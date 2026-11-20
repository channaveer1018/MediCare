/* MediCare is a fictional, browser-only teaching demo, not secure authentication. */
(function() {
    'use strict';
    // The hosted preview imports this module during SSR; initialize only in a browser.
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const DATA_KEY = 'medicare.hospital.v1';
    const SESSION_KEY = 'medicare.session.v1';
    const SESSION_LIFETIME = 8 * 60 * 60 * 1000;
    let root, data, session, page = 'dashboard',
        query = '',
        filter = 'All',
        currentPage = 1;
    let authMode = 'login',
        authRole = 'Admin',
        pendingConfirm = null,
        storageError = false,
        expiryTimer;
    const PAGE_SIZE = 6;
    const icons = {
        dashboard: '▦',
        patients: '♙',
        doctors: '✚',
        appointments: '▤',
        billing: '▣',
        settings: '⚙',
        profile: '♙'
    };
    const titles = {
        dashboard: 'Dashboard',
        patients: 'Patients',
        doctors: 'Doctors',
        appointments: 'Appointments',
        billing: 'Billing',
        settings: 'About & Settings',
        profile: 'My profile'
    };
    const $ = (selector) => root.querySelector(selector);
    const $$ = (selector) => [...root.querySelectorAll(selector)];
    const escapeHTML = (value) => String(value ? ? '').replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[c]));
    const initials = (name) => String(name || '?').trim().split(/\s+/).map(v => v[0]).slice(0, 2).join('').toUpperCase();
    const money = (value) => new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2
    }).format(Number(value));
    const localDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const dateOffset = (days) => {
        const d = new Date();
        d.setDate(d.getDate() + days);
        return localDate(d);
    };
    const displayDate = (value, short = false) => new Date(value + 'T12:00:00').toLocaleDateString('en-IN', {
        day: '2-digit',
        month: short ? 'short' : 'long',
        ...(short ? {} : {
            year: 'numeric'
        })
    });
    const timeLabel = (time) => {
        const [h, m] = time.split(':').map(Number);
        return `${(h % 12) || 12}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
    };
    // UUIDs prevent collisions even when several records are created in one millisecond.
    function uniqueId(prefix) {
        const bytes = new Uint32Array(3);
        if (globalThis.crypto ? .getRandomValues) globalThis.crypto.getRandomValues(bytes);
        else bytes.set([Date.now() % 4294967295, Math.random() * 4294967295, Math.random() * 4294967295]);
        return prefix + '-' + [...bytes].map(n => n.toString(36).toUpperCase()).join('');
    }

    function seedData() {
        const names = ['Aarav Sharma', 'Priya Patel', 'Rohan Mehta', 'Ananya Singh', 'Vikram Rao', 'Neha Kapoor', 'Arjun Das', 'Isha Verma'];
        const patients = names.map((name, i) => ({
            id: `PAT-10${String(i + 1).padStart(2, '0')}`,
            name,
            age: [32, 27, 45, 24, 56, 31, 38, 29][i],
            gender: i % 2 ? 'Female' : 'Male',
            phone: `90000000${String(i + 1).padStart(2, '0')}`,
            email: i === 0 ? 'patient@medicare.demo' : `patient${i + 1}@example.test`,
            address: `${i + 10} Example Lane, Demo City`,
            concern: ['Routine check-up', 'Migraine', 'Knee pain', 'Skin consultation', 'Cardiac follow-up', 'Routine check-up', 'Seasonal allergies', 'Eye check-up'][i],
            registered: dateOffset(-i - 2)
        }));
        const doctors = [{
                id: 'DOC-1001',
                name: 'Dr. Sarah Wilson',
                specialization: 'Cardiology',
                phone: '9000010001',
                email: 'sarah@example.test',
                availability: 'Available'
            },
            {
                id: 'DOC-1002',
                name: 'Dr. James Miller',
                specialization: 'General Medicine',
                phone: '9000010002',
                email: 'james@example.test',
                availability: 'Available'
            },
            {
                id: 'DOC-1003',
                name: 'Dr. Emily Chen',
                specialization: 'Neurology',
                phone: '9000010003',
                email: 'emily@example.test',
                availability: 'Available'
            },
            {
                id: 'DOC-1004',
                name: 'Dr. Michael Brown',
                specialization: 'Orthopedics',
                phone: '9000010004',
                email: 'michael@example.test',
                availability: 'Available'
            },
            {
                id: 'DOC-1005',
                name: 'Dr. Olivia Davis',
                specialization: 'Dermatology',
                phone: '9000010005',
                email: 'olivia@example.test',
                availability: 'On leave'
            }
        ];
        const appointments = patients.slice(0, 6).map((p, i) => ({
            id: `APT-20${String(i + 1).padStart(2, '0')}`,
            patientId: p.id,
            doctorId: doctors[i % 4].id,
            date: dateOffset(i < 2 ? 1 : i === 4 ? -1 : 0),
            time: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'][i],
            reason: p.concern,
            status: i === 4 ? 'Completed' : i === 5 ? 'Cancelled' : 'Scheduled'
        }));
        const bills = patients.slice(0, 4).map((p, i) => ({
            id: `BILL-30${String(i + 1).padStart(2, '0')}`,
            patientId: p.id,
            consultation: 500 + i * 150,
            service: i * 100,
            date: dateOffset(-i),
            status: i % 2 ? 'Unpaid' : 'Paid'
        }));
        const accounts = [{
                id: 'ADMIN-DEMO',
                name: 'Alex Johnson',
                email: 'admin@medicare.demo',
                phone: '9000000000',
                password: 'DemoAdmin123!',
                role: 'Admin'
            },
            {
                id: 'USER-DEMO',
                name: patients[0].name,
                email: 'patient@medicare.demo',
                phone: patients[0].phone,
                password: 'DemoPatient123!',
                role: 'Patient',
                patientId: patients[0].id
            }
        ];
        return {
            version: 1,
            patients,
            doctors,
            appointments,
            bills,
            accounts
        };
    }
    // Storage writes are atomic: a failed quota/privacy-mode write never reports success.
    function commit(next) {
        try {
            localStorage.setItem(DATA_KEY, JSON.stringify(next));
            data = next;
            return true;
        } catch {
            toast('Unable to save. Browser storage may be blocked or full. No changes were applied.', true);
            return false;
        }
    }

    function updateData(mutator) {
        const next = JSON.parse(JSON.stringify(data));
        mutator(next);
        return commit(next);
    }

    function validateStoredData(value) {
        if (!value || value.version !== 1) return false;
        const required = {
            patients: ['id', 'name', 'phone', 'gender', 'address', 'concern', 'registered'],
            doctors: ['id', 'name', 'specialization', 'phone', 'email', 'availability'],
            appointments: ['id', 'patientId', 'doctorId', 'date', 'time', 'reason', 'status'],
            bills: ['id', 'patientId', 'date', 'status'],
            accounts: ['id', 'name', 'email', 'password', 'role']
        };
        for (const [collection, fields] of Object.entries(required)) {
            if (!Array.isArray(value[collection]) || value[collection].some(item => !item || !fields.every(f => typeof item[f] === 'string')) || new Set(value[collection].map(item => item.id)).size !== value[collection].length) return false;
        }
        return value.patients.every(p => Number.isInteger(p.age) && p.age >= 0 && p.age <= 130) && value.bills.every(b => Number.isFinite(b.consultation) && Number.isFinite(b.service) && b.consultation >= 0 && b.service >= 0) && value.accounts.every(a => ['Admin', 'Patient'].includes(a.role));
    }

    function loadData() {
        try {
            const raw = localStorage.getItem(DATA_KEY);
            if (!raw) return commit(seedData());
            const parsed = JSON.parse(raw);
            if (!validateStoredData(parsed)) throw new Error('Invalid data');
            data = parsed;
            return true;
        } catch {
            storageError = true;
            return false;
        }
    }

    function getCurrentUser() {
        if (!session || !Number.isFinite(session.expires) || session.expires <= Date.now()) return null;
        return data.accounts.find(a => a.id === session.userId) || null;
    }

    function checkUserRole(role) {
        return getCurrentUser() ? .role === role;
    }

    function allowedPages() {
        return checkUserRole('Admin') ? ['dashboard', 'patients', 'doctors', 'appointments', 'billing', 'settings'] : ['dashboard', 'profile', 'appointments', 'billing'];
    }

    function protectPage(target) {
        return !!getCurrentUser() && allowedPages().includes(target);
    }

    function checkAuthentication() {
        if (getCurrentUser()) return true;
        const hadSession = !!session;
        session = null;
        try {
            localStorage.removeItem(SESSION_KEY);
        } catch { /* Login remains unavailable if storage is disabled. */ }
        closeDialog();
        renderAuth();
        if (hadSession) toast('Your demo session expired. Please sign in again.', true);
        return false;
    }

    function ownPatients() {
        const u = getCurrentUser();
        return u ? .role === 'Admin' ? data.patients : data.patients.filter(p => p.id === u ? .patientId);
    }

    function ownAppointments() {
        const u = getCurrentUser();
        return u ? .role === 'Admin' ? data.appointments : data.appointments.filter(a => a.patientId === u ? .patientId);
    }

    function ownBills() {
        const u = getCurrentUser();
        return u ? .role === 'Admin' ? data.bills : data.bills.filter(b => b.patientId === u ? .patientId);
    }

    function patientById(id) {
        return ownPatients().find(p => p.id === id);
    }

    function doctorById(id) {
        return data.doctors.find(d => d.id === id);
    }

    function toast(message, error = false) {
        const container = $('#toast-container');
        if (!container) return;
        const el = document.createElement('div');
        el.className = 'toast' + (error ? ' error' : '');
        const text = document.createElement('span');
        text.textContent = (error ? 'ⓘ  ' : '✓  ') + message;
        const dismiss = document.createElement('button');
        dismiss.type = 'button';
        dismiss.setAttribute('aria-label', 'Dismiss notification');
        dismiss.textContent = '×';
        dismiss.onclick = () => el.remove();
        el.append(text, dismiss);
        container.append(el);
        setTimeout(() => el.remove(), 6000);
    }

    function brand() {
        return '<div class="brand"><span class="brand-mark">+</span><span>Medi<span class="brand-light">Care</span><small>HOSPITAL MANAGEMENT</small></span></div>';
    }

    function passwordField(name, label, confirm = false) {
        return `<div class="field ${authMode === 'login' ? 'full' : ''}"><label for="${name}">${label}</label><div class="password-wrap"><input id="${name}" name="${name}" type="password" minlength="8" maxlength="100" required autocomplete="${authMode === 'login' ? 'current-password' : 'new-password'}" placeholder="${confirm ? 'Repeat your password' : 'Enter your password'}"><button type="button" data-action="toggle-password" data-target="${name}" aria-label="Show ${label.toLowerCase()}">Show</button></div></div>`;
    }

    function field(name, label, type = 'text', value = '', extra = '', full = false) {
        return `<div class="field${full ? ' full' : ''}"><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" value="${escapeHTML(value)}" required ${type === 'text' ? 'maxlength="150"' : ''} ${extra}></div>`;
    }

    function selectField(name, label, options, value = '', full = false) {
        return `<div class="field${full ? ' full' : ''}"><label for="${name}">${label}</label><select id="${name}" name="${name}" required>${options.map(([v, labelText]) => `<option value="${escapeHTML(v)}" ${v === value ? 'selected' : ''}>${escapeHTML(labelText)}</option>`).join('')}</select></div>`;
    }

    function textareaField(name, label, value = '') {
        return `<div class="field full"><label for="${name}">${label}</label><textarea id="${name}" name="${name}" required maxlength="500">${escapeHTML(value)}</textarea></div>`;
    }

    function phoneField(value = '') {
        return field('phone', 'Phone number', 'tel', value, 'pattern="[+]?[0-9 ()-]{10,18}" maxlength="18" placeholder="e.g. 9876543210"');
    }

    function renderAuth() {
        clearTimeout(expiryTimer);
        $('#app-shell').hidden = true;
        $('#auth-screen').hidden = false;
        const registering = authMode !== 'login';
        if (storageError) {
            $('#auth-screen').innerHTML = `<div class="auth-main"><div class="auth-card">${brand()}<h2>Browser storage needs attention</h2><p class="subtitle">Saved demo data is unreadable or storage is disabled. Existing data has not been overwritten. Allow browser storage, or reset only MediCare demo data to continue.</p><button class="btn" data-action="recover-storage">Reset MediCare demo storage</button></div></div>`;
            return;
        }
        $('#auth-screen').innerHTML = `<div class="auth-layout"><section class="auth-story">${brand()}<div class="auth-story-content"><span class="eyebrow">Better care. Beautifully connected.</span><h1>People-first care.<br><span>Effortless management.</span></h1><p>One thoughtful workspace for your patients, your team, and every moment of care in between.</p><div class="auth-feature"><span>♙</span> Patient care, all in one place</div><div class="auth-feature"><span>▤</span> A clearer view of every appointment</div><div class="auth-feature"><span>✓</span> Less paperwork. More peace of mind.</div></div><div class="auth-story-footer">MediCare Hospital Management System · Academic edition<br>Fictional demonstration data only.</div></section><section class="auth-main"><div class="auth-card ${registering ? 'register' : ''}"><div class="auth-topline"><span class="brand-mark">+</span><span class="demo-label">ACADEMIC DEMO</span></div><h2>${registering ? `Create your ${authRole.toLowerCase()} account` : 'Welcome back'}</h2><p class="subtitle">${registering ? 'A little information to get your demo workspace ready.' : 'Sign in to your MediCare workspace to continue.'}</p><div class="role-switch" role="group" aria-label="Account role"><button type="button" data-action="auth-role" data-role="Admin" class="${authRole === 'Admin' ? 'active' : ''}" aria-pressed="${authRole === 'Admin'}">✚ &nbsp; Administrator</button><button type="button" data-action="auth-role" data-role="Patient" class="${authRole === 'Patient' ? 'active' : ''}" aria-pressed="${authRole === 'Patient'}">♙ &nbsp; Patient</button></div>${registering && authRole === 'Admin' ? '<div class="inline-note">Demo-only admin registration. Public admin signup must be disabled in a real deployment.</div>' : ''}<form id="auth-form"><div id="auth-error" class="form-error" role="alert" hidden></div><div class="form-grid">${registering ? field('name', 'Full name', 'text', '', 'autocomplete="name" placeholder="Your full name"') + phoneField() : ''}${field('email', 'Email address', 'email', '', 'autocomplete="email" maxlength="150" placeholder="you@example.com"', !registering)}${registering && authRole === 'Patient' ? field('age', 'Age', 'number', '', 'min="0" max="130" step="1"') + selectField('gender', 'Gender', [['', 'Select gender'], ['Female', 'Female'], ['Male', 'Male'], ['Other', 'Other'], ['Prefer not to say', 'Prefer not to say']]) + textareaField('address', 'Address') : ''}${passwordField('password', 'Password')}${registering ? passwordField('confirmPassword', 'Confirm password', true) : ''}</div><button type="submit" class="btn auth-submit">${registering ? 'Create demo account' : 'Sign in to workspace'} <span>→</span></button></form><div class="auth-switch">${registering ? 'Already have an account?' : 'New to MediCare?'} <button type="button" data-action="auth-mode">${registering ? 'Sign in' : 'Create an account'}</button></div>${!registering ? `<div class="demo-credentials"><strong>Explore the ${authRole === 'Admin' ? 'administrator' : 'patient'} demo</strong>Email: ${authRole === 'Admin' ? 'admin@medicare.demo' : 'patient@medicare.demo'}<br>Password: ${authRole === 'Admin' ? 'DemoAdmin123!' : 'DemoPatient123!'}<br><button type="button" data-action="demo-fill">Fill demo credentials →</button></div>` : ''}<p class="auth-warning">Frontend-only academic demonstration. Passwords are stored in readable LocalStorage. Client-side access checks are bypassable. Never enter real patient information or a password you use elsewhere.</p></div></section></div>`;
    }

    function formError(message, selector = '#form-error') {
        const el = $(selector);
        if (!el) return toast(message, true);
        el.textContent = message;
        el.hidden = false;
    }

    function validateAccount(f) {
        if (!f.name || f.name.length < 2) return 'Please enter a full name of at least two characters.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return 'Please enter a valid email address.';
        if (!validPhone(f.phone)) return 'Please enter a phone number with 10–15 digits.';
        if (f.password.length < 8) return 'Use a demo password of at least 8 characters.';
        if (f.password !== f.confirmPassword) return 'Passwords do not match.';
        if (data.accounts.some(a => a.email.toLowerCase() === f.email.toLowerCase())) return 'An account already exists with this email address.';
        return '';
    }

    function validPhone(value) {
        const digits = String(value || '').replace(/\D/g, '');
        return /^[+\d ()-]+$/.test(value) && digits.length >= 10 && digits.length <= 15;
    }

    function readForm(form) {
        return Object.fromEntries([...new FormData(form)].map(([k, v]) => [k, String(v).trim()]));
    }

    function registerAdmin(f) {
        return registerAccount(f, 'Admin');
    }

    function registerPatient(f) {
        return registerAccount(f, 'Patient');
    }

    function registerAccount(f, role) {
        const error = validateAccount(f);
        if (error) return formError(error, '#auth-error');
        if (role === 'Patient' && (!validAge(f.age) || !f.gender || !f.address)) return formError('Please provide a valid age, gender and address.', '#auth-error');
        const patientId = role === 'Patient' ? uniqueId('PAT') : undefined;
        const account = {
            id: uniqueId(role === 'Admin' ? 'ADM' : 'USR'),
            name: f.name,
            email: f.email.toLowerCase(),
            phone: f.phone,
            password: f.password,
            role,
            ...(patientId ? {
                patientId
            } : {})
        };
        if (!updateData(next => {
                next.accounts.push(account);
                if (patientId) next.patients.push({
                    id: patientId,
                    name: f.name,
                    email: f.email.toLowerCase(),
                    phone: f.phone,
                    age: Number(f.age),
                    gender: f.gender,
                    address: f.address,
                    concern: 'Not specified',
                    registered: localDate()
                });
            })) return;
        authMode = 'login';
        renderAuth();
        $('#email').value = f.email;
        toast('Account created. You can now sign in.');
    }

    function loginUser(f) {
        const account = data.accounts.find(a => a.email.toLowerCase() === f.email.toLowerCase() && a.password === f.password && a.role === authRole);
        if (!account) return formError('Email, password or selected role is incorrect.', '#auth-error');
        const next = {
            userId: account.id,
            expires: Date.now() + SESSION_LIFETIME
        };
        try {
            localStorage.setItem(SESSION_KEY, JSON.stringify(next));
            session = next;
        } catch {
            return formError('Browser storage is unavailable. Allow storage to sign in.', '#auth-error');
        }
        page = 'dashboard';
        renderShell();
        toast(`Welcome back, ${account.name.split(' ')[0]}.`);
    }

    function logoutUser() {
        try {
            localStorage.removeItem(SESSION_KEY);
        } catch {
            toast('Browser storage could not be cleared; close this browser session.', true);
        }
        session = null;
        closeDialog();
        authMode = 'login';
        renderAuth();
        toast('You have signed out. Your hospital records are still saved.');
    }

    function renderShell() {
        if (!checkAuthentication()) return;
        $('#auth-screen').hidden = true;
        $('#app-shell').hidden = false;
        const user = getCurrentUser();
        $('#user-name').textContent = user.name;
        $('#user-role').textContent = user.role === 'Admin' ? 'Administrator' : 'Patient portal';
        $('#user-avatar').textContent = initials(user.name);
        $('#copyright-year').textContent = new Date().getFullYear();
        $('#main-nav').innerHTML = allowedPages().map(p => `${p === 'settings' ? '<div class="nav-separator"></div>' : ''}<a href="#${p}" data-page="${p}" class="nav-item ${p === page ? 'active' : ''}" ${p === page ? 'aria-current="page"' : ''}><span class="nav-icon" aria-hidden="true">${icons[p]}</span>${p === 'appointments' && user.role === 'Patient' ? 'My appointments' : p === 'billing' && user.role === 'Patient' ? 'My bills' : titles[p]}${p === 'appointments' ? `<span class="nav-counter">${ownAppointments().filter(a => a.status === 'Scheduled').length}</span>` : ''}</a>`).join('');
        clearTimeout(expiryTimer);
        expiryTimer = setTimeout(checkAuthentication, Math.max(0, session.expires - Date.now()));
        renderPage();
    }

    function navigate(target) {
        if (!checkAuthentication()) return;
        if (!protectPage(target)) {
            toast('This page is not available for your role.', true);
            target = 'dashboard';
        }
        page = target;
        query = '';
        filter = 'All';
        currentPage = 1;
        closeMenu();
        renderShell();
        $('#main-content').focus({
            preventScroll: true
        });
        // Keep navigation inside this document, including the hosted iframe.
        try {
            history.replaceState(null, '', '#' + page);
        } catch { /* file: browser history may be restricted. */ }
    }

    function pageHeader(title, subtitle, action = '', label = '') {
        return `<div class="breadcrumbs"><span>Workspace</span><span>›</span><span>${escapeHTML(title)}</span></div><div class="page-heading"><div><h1>${escapeHTML(title)}</h1><p class="subtitle">${escapeHTML(subtitle)}</p></div><div class="heading-actions"><span class="date-chip">▤ &nbsp; ${new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>${action ? `<button class="btn" data-action="${action}"><span>＋</span> ${escapeHTML(label)}</button>` : ''}</div></div>`;
    }

    function statCard(label, value, icon, color, foot, trend) {
        return `<div class="stat-card"><div class="stat-top"><span class="stat-icon ${color}">${icon}</span><span class="stat-menu" aria-hidden="true">···</span></div><div class="stat-number">${value}</div><div class="stat-label">${label}</div><div class="stat-bottom"><span class="stat-trend">${trend}</span><span>${foot}</span></div></div>`;
    }

    function renderPage() {
        if (!protectPage(page)) page = 'dashboard';
        const renderers = {
            dashboard: renderDashboard,
            patients: renderPatients,
            doctors: renderDoctors,
            appointments: renderAppointments,
            billing: renderBilling,
            settings: renderSettings,
            profile: renderProfile
        };
        $('#main-content').innerHTML = renderers[page]();
    }

    function badge(status) {
        return `<span class="badge badge-${status.toLowerCase().replace(/ /g, '-')}">${escapeHTML(status)}</span>`;
    }

    function demoNote() {
        return '<div class="demo-note"><span>ⓘ</span><span><b>Your demo workspace.</b> All data is fictional and saved in this browser only. No real patient information, please.</span></div>';
    }

    function renderDashboard() {
        const user = getCurrentUser(),
            admin = user.role === 'Admin';
        const appointments = ownAppointments();
        const scheduled = appointments.filter(a => a.status === 'Scheduled');
        const today = appointments.filter(a => a.date === localDate());
        const completed = appointments.filter(a => a.status === 'Completed').length;
        const cancelled = appointments.filter(a => a.status === 'Cancelled').length;
        const active = appointments.length || 1;
        const stats = admin ? [statCard('Total patients', data.patients.length.toLocaleString('en-IN'), '♙', '', 'Registered patients', '↗ Live records'), statCard('Total doctors', data.doctors.length, '✚', 'purple', 'Our care team', `${data.doctors.filter(d => d.availability === 'Available').length} available`), statCard('Appointments', appointments.length, '▤', 'teal', 'Across all dates', `${today.length} today`), statCard('Bills generated', data.bills.length, '▣', 'orange', 'Billing records', `${data.bills.filter(b => b.status === 'Unpaid').length} unpaid`)] : [statCard('My appointments', appointments.length, '▤', '', 'All your visits', `${scheduled.length} scheduled`), statCard('Completed visits', completed, '✓', 'teal', 'Your care journey', 'Visit history'), statCard('Unpaid bills', ownBills().filter(b => b.status === 'Unpaid').length, '▣', 'orange', 'Pending bills', money(ownBills().filter(b => b.status === 'Unpaid').reduce((s, b) => s + b.consultation + b.service, 0)))];
        return pageHeader(admin ? 'Dashboard overview' : 'Your health, at a glance', admin ? "A little clarity for your day. Here’s what’s happening at MediCare." : 'Your appointments, care team and billing, all in one place.', 'new-appointment', 'Book appointment') + `<section class="welcome-banner"><div><div class="welcome-pill"><span class="live-dot"></span> YOUR CARE, CONNECTED</div><h2>Good ${new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 17 ? 'afternoon' : 'evening'}, ${escapeHTML(user.name.split(' ')[0])}. <span aria-hidden="true">☀</span></h2><p>${admin ? 'A healthier community starts with a well-connected team.<br>Let’s make every patient experience a little better today.' : 'A simpler way to manage your health.<br>Book your next visit and stay connected to your care.'}</p></div><div class="banner-art" aria-hidden="true"><div class="art-orbit"></div><div class="art-cross">+</div><div class="art-card"><strong>People first.</strong>Always at the heart of care.</div><div class="art-pulse">⌁</div></div></section><section class="stats-grid ${admin ? '' : 'compact-stats'}" aria-label="Live hospital statistics">${stats.join('')}</section><div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Recent appointments</h2><p class="panel-description">A quick look at your latest patient visits.</p></div><button class="text-button" data-action="go-appointments">View all <span>→</span></button></div><div class="table-toolbar"><label class="search-box"><span>⌕</span><input id="dashboard-search" aria-label="Search recent appointments" placeholder="Search patient or appointment..."></label><select id="dashboard-status" class="filter-select" aria-label="Filter recent appointment status"><option value="All">All statuses</option><option>Scheduled</option><option>Completed</option><option>Cancelled</option></select></div><div id="dashboard-table">${appointmentTable(appointments.slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5), true)}</div><div class="table-footer"><span id="recent-count">${Math.min(5, appointments.length)} of ${appointments.length} appointments</span><button class="text-button" data-action="go-appointments">Manage appointments →</button></div></section><div class="side-column"><section class="panel"><div class="panel-header"><h2>Quick actions</h2><span style="color:#9eabba;font-size:17px">↗</span></div><div class="quick-actions">${admin ? quickAction('new-patient', '♙', '', 'Register patient', 'Add a new patient to your records') + quickAction('new-doctor', '✚', 'purple', 'Add doctor', 'Grow your hospital care team') : quickAction('go-profile', '♙', '', 'My profile', 'Keep your personal details up to date')}${quickAction('new-appointment', '▤', 'teal', 'Book appointment', 'Schedule a visit with a specialist')}${admin ? quickAction('new-bill', '▣', 'orange', 'Generate bill', 'Create and manage patient billing') : quickAction('go-billing', '▣', 'orange', 'My bills', 'Review your bills and payment status')}</div></section><section class="panel"><div class="panel-header"><h2>Appointment overview</h2><span class="panel-description">All time</span></div><div class="overview-body"><div class="overview-title"><span>Total appointments</span><strong>${appointments.length} visits</strong></div><div class="progress-track"><span style="width:${scheduled.length / active * 100}%;background:#4b8ae8"></span><span style="width:${completed / active * 100}%;background:#52b69a"></span><span style="width:${cancelled / active * 100}%;background:#e9b37a"></span></div>${legend('Scheduled', scheduled.length, '#4b8ae8')}${legend('Completed', completed, '#52b69a')}${legend('Cancelled', cancelled, '#e9b37a')}</div></section></div></div>` + demoNote();
    }

    function legend(label, value, color) {
        return `<div class="legend-row"><span class="legend-dot" style="background:${color}"></span>${label}<strong>${value}</strong></div>`;
    }

    function quickAction(action, icon, color, title, subtitle) {
        return `<button class="quick-action" data-action="${action}"><span class="stat-icon ${color}">${icon}</span><span><strong>${title}</strong><small>${subtitle}</small></span><span class="quick-arrow">›</span></button>`;
    }

    function personCell(patient) {
        return patient ? `<div class="person-cell"><span class="avatar">${escapeHTML(initials(patient.name))}</span><span><strong class="person-name">${escapeHTML(patient.name)}</strong><small class="person-id">${escapeHTML(patient.id)}</small></span></div>` : '<span>Unavailable patient</span>';
    }

    function emptyRow(columns, title, description) {
        return `<tr><td colspan="${columns}"><div class="empty-state"><strong>${escapeHTML(title)}</strong>${escapeHTML(description)}</div></td></tr>`;
    }

    function appointmentTable(records, compact = false) {
        const admin = checkUserRole('Admin');
        return `<div class="table-scroll"><table class="${compact ? 'dashboard-table' : ''}"><thead><tr>${admin ? '<th>Patient</th>' : '<th>Appointment</th>'}<th>Doctor</th><th>Date & time</th><th>Status</th><th>${compact ? '' : 'Actions'}</th></tr></thead><tbody>${records.map(a => { const p = patientById(a.patientId), d = doctorById(a.doctorId); return `<tr><td>${admin ? personCell(p) : `<span class="person-name">${escapeHTML(a.id)}</span><span class="person-id">${escapeHTML(a.reason)}</span>`}</td><td><span class="person-name">${escapeHTML(d?.name || 'Unavailable doctor')}</span><span class="doctor-specialty">${escapeHTML(d?.specialization || '')}</span></td><td><span class="person-name">${displayDate(a.date, true)}</span><span class="person-id">${timeLabel(a.time)}</span></td><td>${badge(a.status)}</td><td><div class="row-actions">${compact ? `<button data-action="view-appointment" data-id="${escapeHTML(a.id)}" aria-label="View appointment ${escapeHTML(a.id)}">↗</button>` : `${admin ? `<button data-action="edit-appointment" data-id="${escapeHTML(a.id)}" aria-label="Edit appointment">Edit</button>` : ''}${a.status === 'Scheduled' ? `${admin ? `<button data-action="complete-appointment" data-id="${escapeHTML(a.id)}">Complete</button>` : ''}<button data-action="cancel-appointment" data-id="${escapeHTML(a.id)}">Cancel</button>` : `<button data-action="view-appointment" data-id="${escapeHTML(a.id)}">View</button>`}`}</div></td></tr>`; }).join('') || emptyRow(5, 'No appointments found', 'Book a visit or adjust your search to get started.')}</tbody></table></div>`;
    }

    function toolbar(placeholder, options = []) {
        return `<div class="table-toolbar"><label class="search-box"><span>⌕</span><input id="record-search" value="${escapeHTML(query)}" placeholder="${placeholder}" aria-label="${placeholder}"></label>${options.length ? `<select id="record-filter" class="filter-select" aria-label="Filter records">${['All', ...options].map(s => `<option value="${s}" ${filter === s ? 'selected' : ''}>${s === 'All' ? 'All statuses' : s}</option>`).join('')}</select>` : '<span class="panel-description">Saved in this browser</span>'}</div>`;
    }

    function matches(record, fields) {
        return fields.some(f => String(record[f] || '').toLowerCase().includes(query.toLowerCase()));
    }

    function paginate(records) {
        const totalPages = Math.max(1, Math.ceil(records.length / PAGE_SIZE));
        currentPage = Math.min(Math.max(1, currentPage), totalPages);
        return records.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    }

    function pagination(total) {
        const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
        return `<div class="table-footer"><span>${total ? `${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(currentPage * PAGE_SIZE, total)} of ${total}` : '0'} records</span><div class="pagination"><button data-action="previous-page" aria-label="Previous page" ${currentPage === 1 ? 'disabled' : ''}>‹</button><button class="current" aria-label="Current page">${currentPage}</button><button data-action="next-page" aria-label="Next page" ${currentPage >= pages ? 'disabled' : ''}>›</button></div></div>`;
    }

    function renderPatients() {
        return pageHeader('Patient management', 'Thoughtful care starts with knowing your patients.', 'new-patient', 'Register patient') + `<section class="panel"><div class="panel-header"><div><h2>All patients</h2><p class="panel-description">Manage your hospital’s registered patient records.</p></div><span class="badge badge-neutral">${data.patients.length} patients</span></div>${toolbar('Search patient name or ID...')}<div id="record-results">${patientResults()}</div></section>` + demoNote();
    }

    function patientResults() {
        const all = data.patients.filter(p => matches(p, ['name', 'id']));
        const records = paginate(all);
        return `<div class="table-scroll"><table><thead><tr><th>Patient</th><th>Age / gender</th><th>Phone</th><th>Medical concern</th><th>Registered</th><th>Actions</th></tr></thead><tbody>${records.map(p => `<tr><td>${personCell(p)}</td><td>${p.age} / ${escapeHTML(p.gender)}</td><td>${escapeHTML(p.phone)}</td><td>${escapeHTML(p.concern)}</td><td>${displayDate(p.registered, true)}</td><td><div class="row-actions"><button data-action="edit-patient" data-id="${escapeHTML(p.id)}">Edit</button><button data-action="delete-patient" data-id="${escapeHTML(p.id)}">Delete</button></div></td></tr>`).join('') || emptyRow(6, 'No patients found', 'Register a patient or try a different name or ID.')}</tbody></table></div>${pagination(all.length)}`;
    }

    function renderDoctors() {
        return pageHeader('Doctor management', 'An exceptional team, working together for better care.', 'new-doctor', 'Add doctor') + `<section class="panel"><div class="panel-header"><div><h2>Your care team</h2><p class="panel-description">Doctor details, specialties and current availability.</p></div><span class="badge badge-neutral">${data.doctors.length} doctors</span></div>${toolbar('Search name, ID or specialization...', ['Available', 'On leave'])}<div id="record-results">${doctorResults()}</div></section>` + demoNote();
    }

    function doctorResults() {
        const all = data.doctors.filter(d => matches(d, ['name', 'id', 'specialization']) && (filter === 'All' || d.availability === filter));
        const records = paginate(all);
        return `<div class="table-scroll"><table><thead><tr><th>Doctor</th><th>Specialization</th><th>Contact</th><th>Availability</th><th>Actions</th></tr></thead><tbody>${records.map(d => `<tr><td>${personCell(d)}</td><td>${escapeHTML(d.specialization)}</td><td><span class="person-name">${escapeHTML(d.email)}</span><span class="person-id">${escapeHTML(d.phone)}</span></td><td>${badge(d.availability)}</td><td><div class="row-actions"><button data-action="edit-doctor" data-id="${escapeHTML(d.id)}">Edit</button><button data-action="delete-doctor" data-id="${escapeHTML(d.id)}">Delete</button></div></td></tr>`).join('') || emptyRow(5, 'No doctors found', 'Add a doctor or change your search and filters.')}</tbody></table></div>${pagination(all.length)}`;
    }

    function renderAppointments() {
        return pageHeader(checkUserRole('Admin') ? 'Appointment management' : 'My appointments', 'Make time for what matters. Plan and manage every visit.', 'new-appointment', 'Book appointment') + `<section class="panel"><div class="panel-header"><div><h2>${checkUserRole('Admin') ? 'All appointments' : 'Your visits'}</h2><p class="panel-description">Scheduled, completed and cancelled visits in one place.</p></div></div>${toolbar('Search patient, doctor or appointment...', ['Scheduled', 'Completed', 'Cancelled'])}<div id="record-results">${appointmentResults()}</div></section>` + demoNote();
    }

    function filteredAppointments() {
        return ownAppointments().filter(a => (filter === 'All' || a.status === filter) && [a.id, patientById(a.patientId) ? .name, doctorById(a.doctorId) ? .name, a.reason].some(v => String(v || '').toLowerCase().includes(query.toLowerCase()))).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
    }

    function appointmentResults() {
        const all = filteredAppointments();
        return appointmentTable(paginate(all)) + pagination(all.length);
    }

    function renderBilling() {
        const bills = ownBills();
        const sum = status => bills.filter(b => b.status === status).reduce((s, b) => s + b.consultation + b.service, 0);
        return pageHeader(checkUserRole('Admin') ? 'Billing management' : 'My bills', 'Clear, straightforward billing for every patient.', checkUserRole('Admin') ? 'new-bill' : '', 'Generate bill') + `<div class="summary-inline"><div>Total billed <strong>${money(sum('Paid') + sum('Unpaid'))}</strong></div><div>Collected <strong>${money(sum('Paid'))}</strong></div><div>Outstanding <strong>${money(sum('Unpaid'))}</strong></div></div><section class="panel"><div class="panel-header"><div><h2>Bill history</h2><p class="panel-description">All amounts in Indian Rupees (INR).</p></div></div>${toolbar('Search patient or bill ID...', ['Paid', 'Unpaid'])}<div id="record-results">${billResults()}</div></section>` + demoNote();
    }

    function billResults() {
        const all = ownBills().filter(b => (filter === 'All' || b.status === filter) && [b.id, patientById(b.patientId) ? .name].some(v => String(v || '').toLowerCase().includes(query.toLowerCase()))).slice().reverse();
        const records = paginate(all);
        return `<div class="table-scroll"><table><thead><tr><th>Bill ID</th><th>Patient</th><th>Date</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead><tbody>${records.map(b => `<tr><td><span class="person-name">${escapeHTML(b.id)}</span></td><td>${personCell(patientById(b.patientId))}</td><td>${displayDate(b.date, true)}</td><td><span class="person-name">${money(b.consultation + b.service)}</span></td><td>${badge(b.status)}</td><td><div class="row-actions">${checkUserRole('Admin') ? `<button data-action="edit-bill" data-id="${escapeHTML(b.id)}">Edit</button>${b.status === 'Unpaid' ? `<button data-action="pay-bill" data-id="${escapeHTML(b.id)}">Mark paid</button>` : ''}` : ''}<button data-action="print-bill" data-id="${escapeHTML(b.id)}">Print</button>${checkUserRole('Admin') ? `<button data-action="delete-bill" data-id="${escapeHTML(b.id)}">Delete</button>` : ''}</div></td></tr>`).join('') || emptyRow(6, 'No bills found', 'No bills match this search. New bills will appear here.')}</tbody></table></div>${pagination(all.length)}`;
    }

    function renderSettings() {
        return pageHeader('About & settings', 'A better-connected workspace, made for learning.') + `<div class="settings-grid"><section class="panel content-card"><h2>Care at the heart of everything.</h2><p><strong>MediCare General Hospital</strong> is a fictional multidisciplinary hospital dedicated to compassionate, patient-first care. This workspace demonstrates how everyday hospital operations can be brought together.</p><dl class="detail-list"><div><dt>Project</dt><dd>Hospital Management System</dd></div><div><dt>Application version</dt><dd>1.0.0 · Academic edition</dd></div><div><dt>Built with</dt><dd>HTML5, CSS3, Vanilla JavaScript</dd></div><div><dt>Persistence</dt><dd>Browser LocalStorage</dd></div></dl></section><section class="panel content-card"><h2>Your data, in this browser.</h2><p>Hospital records and accounts use <code>medicare.hospital.v1</code>. A separate <code>medicare.session.v1</code> key stores the active demo session for eight hours. Logout clears the session but keeps records.</p><p>There is no server, database, payment processor or real authentication. Passwords are readable in LocalStorage, roles can be modified using browser tools, and data is not encrypted. Use fictional records and disposable passwords only.</p></section><section class="panel content-card"><h2>Explore the project</h2><p>Manage patients, doctors, appointments and bills. Search and filter records, prevent appointment conflicts, print invoices, and explore the separate patient portal.</p><button class="btn btn-soft" data-action="help">Open project guide →</button></section><section class="panel content-card danger-panel"><h2>Clear demonstration records</h2><p>Remove all patients, doctors, appointments, bills and patient accounts. Admin accounts are retained so you can continue using the workspace. This cannot be undone.</p><button class="btn btn-danger" data-action="clear-data">Clear demo records</button></section></div>` + demoNote();
    }

    function renderProfile() {
        const p = ownPatients()[0];
        if (!p) return pageHeader('My profile', 'Your personal information.') + '<section class="panel empty-state"><strong>Patient profile unavailable</strong>Ask a demo administrator to check your account.</section>';
        return pageHeader('My profile', 'A little about you, for a more connected care experience.', 'edit-profile', 'Edit profile') + `<div class="profile-grid"><section class="panel content-card"><div class="profile-name"><span class="avatar">${escapeHTML(initials(p.name))}</span><div><h2>${escapeHTML(p.name)}</h2><small>${escapeHTML(p.id)}</small></div></div><dl class="detail-list">${[['Email', p.email], ['Phone', p.phone], ['Age', p.age], ['Gender', p.gender], ['Address', p.address], ['Medical concern', p.concern], ['Registered', displayDate(p.registered)]].map(([k, v]) => `<div><dt>${k}</dt><dd>${escapeHTML(v || 'Not provided')}</dd></div>`).join('')}</dl></section><section class="panel content-card"><h2>Your patient portal</h2><p>Book appointments with an available doctor, track your visits and review your own bills. Your portal only displays records linked to your patient ID.</p><p>This is a client-side teaching demo. These access checks are not a security boundary.</p><button class="btn" data-action="new-appointment">Book an appointment →</button></section></div>` + demoNote();
    }

    function refreshResults() {
        const render = {
            patients: patientResults,
            doctors: doctorResults,
            appointments: appointmentResults,
            billing: billResults
        }[page];
        if (render && $('#record-results')) $('#record-results').innerHTML = render();
    }
    let dialogTrigger;

    function openDialog(title, body, footer = '') {
        closeDialog();
        dialogTrigger = document.activeElement;
        $('#dialog-content').innerHTML = `<div class="dialog-header"><h2 id="dialog-title">${escapeHTML(title)}</h2><button class="icon-button" data-action="close-dialog" aria-label="Close dialog">×</button></div>${body}${footer}`;
        $('#app-dialog').showModal();
    }

    function closeDialog() {
        const dialog = $('#app-dialog');
        if (dialog ? .open) dialog.close();
        pendingConfirm = null;
    }

    function confirmAction(title, message, handler, label = 'Confirm', dangerous = false) {
        openDialog(title, `<div class="dialog-body"><p class="confirm-copy">${escapeHTML(message)}</p></div>`, `<div class="dialog-footer"><button class="btn btn-secondary" data-action="close-dialog">Keep as is</button><button class="btn ${dangerous ? 'btn-danger' : ''}" data-action="confirm-action">${escapeHTML(label)}</button></div>`);
        pendingConfirm = handler;
    }

    function formDialog(title, kind, id, body) {
        openDialog(title, `<form id="record-form" data-kind="${kind}" data-id="${escapeHTML(id || '')}"><div class="dialog-body"><div class="form-error" id="form-error" role="alert" hidden></div><div class="form-grid">${body}</div>${kind === 'bill' ? '<div class="bill-total"><span>Total amount</span><strong id="bill-total"></strong></div>' : ''}</div><div class="dialog-footer"><button type="button" class="btn btn-secondary" data-action="close-dialog">Cancel</button><button type="submit" class="btn">${id ? 'Save changes' : kind === 'appointment' ? 'Book appointment' : kind === 'bill' ? 'Generate bill' : 'Save record'}</button></div></form>`);
        if (kind === 'bill') updateBillTotal();
    }

    function validAge(age) {
        return age !== '' && Number.isInteger(Number(age)) && Number(age) >= 0 && Number(age) <= 130;
    }

    function openPatient(id = '', profile = false) {
        if (!checkAuthentication() || (!profile && !checkUserRole('Admin'))) return;
        const p = id ? patientById(id) : {};
        if (!p) return toast('Patient record not found.', true);
        formDialog(profile ? 'Edit my profile' : id ? 'Edit patient' : 'Register a new patient', profile ? 'profile' : 'patient', id, field('name', 'Full name', 'text', p.name, 'minlength="2"') + field('age', 'Age', 'number', p.age ? ? '', 'min="0" max="130" step="1"') + selectField('gender', 'Gender', [
            ['', 'Select gender'],
            ['Male', 'Male'],
            ['Female', 'Female'],
            ['Other', 'Other'],
            ['Prefer not to say', 'Prefer not to say']
        ], p.gender) + phoneField(p.phone) + field('email', 'Email address', 'email', p.email, 'maxlength="150"', true) + textareaField('address', 'Address', p.address) + textareaField('concern', 'Medical concern', p.concern));
    }

    function openDoctor(id = '') {
        if (!checkAuthentication() || !checkUserRole('Admin')) return;
        const d = id ? doctorById(id) : {};
        if (!d) return toast('Doctor record not found.', true);
        formDialog(id ? 'Edit doctor' : 'Add a new doctor', 'doctor', id, field('name', 'Doctor name', 'text', d.name, 'minlength="2"') + field('specialization', 'Specialization', 'text', d.specialization) + phoneField(d.phone) + field('email', 'Email address', 'email', d.email, 'maxlength="150"') + selectField('availability', 'Availability', [
            ['Available', 'Available'],
            ['On leave', 'On leave']
        ], d.availability, true));
    }

    function openAppointment(id = '') {
        if (!checkAuthentication() || (id && !checkUserRole('Admin'))) return;
        const a = id ? ownAppointments().find(a => a.id === id) : {};
        if (!a) return toast('Appointment not found.', true);
        const patients = ownPatients();
        const doctors = data.doctors.filter(d => d.availability === 'Available' || d.id === a.doctorId);
        if (!patients.length || !doctors.length) return toast(!patients.length ? 'Register a patient before booking an appointment.' : 'No doctors are available. Ask an administrator to add an available doctor.', true);
        formDialog(id ? 'Edit appointment' : 'Book an appointment', 'appointment', id, selectField('patientId', 'Patient', [
            ['', 'Select a patient'], ...patients.map(p => [p.id, `${p.name} · ${p.id}`])
        ], a.patientId || (checkUserRole('Patient') ? getCurrentUser().patientId : '')) + selectField('doctorId', 'Doctor', [
            ['', 'Select a doctor'], ...doctors.map(d => [d.id, `${d.name} · ${d.specialization}`])
        ], a.doctorId) + field('date', 'Appointment date', 'date', a.date || localDate(), `min="${localDate()}"`) + field('time', 'Appointment time', 'time', a.time || '', 'step="60"') + textareaField('reason', 'Reason for visit', a.reason) + (id ? selectField('status', 'Status', [
            ['Scheduled', 'Scheduled'],
            ['Completed', 'Completed'],
            ['Cancelled', 'Cancelled']
        ], a.status, true) : ''));
    }

    function openBill(id = '') {
        if (!checkAuthentication() || !checkUserRole('Admin')) return;
        if (!data.patients.length) return toast('Register a patient before generating a bill.', true);
        const b = id ? ownBills().find(b => b.id === id) : {};
        if (!b) return toast('Bill not found.', true);
        formDialog(id ? 'Edit bill' : 'Generate a bill', 'bill', id, selectField('patientId', 'Patient', [
            ['', 'Select a patient'], ...data.patients.map(p => [p.id, `${p.name} · ${p.id}`])
        ], b.patientId, true) + field('consultation', 'Consultation charges (₹)', 'number', b.consultation ? ? '', 'min="0" max="10000000" step="0.01"') + field('service', 'Additional service charges (₹)', 'number', b.service ? ? 0, 'min="0" max="10000000" step="0.01"') + selectField('status', 'Payment status', [
            ['Unpaid', 'Unpaid'],
            ['Paid', 'Paid']
        ], b.status || 'Unpaid', true));
    }

    function updateBillTotal() {
        const c = Number($('#consultation') ? .value || 0),
            s = Number($('#service') ? .value || 0);
        if ($('#bill-total')) $('#bill-total').textContent = money(Math.round((c + s) * 100) / 100);
    }
    // Every mutation rechecks role, record ownership and referential integrity.
    function saveRecord(form) {
        if (!checkAuthentication()) return;
        const f = readForm(form),
            kind = form.dataset.kind,
            id = form.dataset.id;
        const admin = checkUserRole('Admin');
        if (!admin && !['profile', 'appointment'].includes(kind)) return formError('This action is not allowed for your role.');
        if (kind === 'patient' || kind === 'profile') {
            const existing = id ? patientById(id) : null;
            if ((id && !existing) || (kind === 'profile' && (!id || id !== getCurrentUser().patientId))) return formError('Patient record not available.');
            if (f.name.length < 2 || !validAge(f.age) || !['Male', 'Female', 'Other', 'Prefer not to say'].includes(f.gender) || !f.address || !f.concern || !validPhone(f.phone) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return formError('Please enter a name, age (0–130), gender, valid phone, email, address and concern.');
            if (data.patients.some(p => p.id !== id && p.email ? .toLowerCase() === f.email.toLowerCase()) || data.accounts.some(a => a.patientId !== id && a.email.toLowerCase() === f.email.toLowerCase())) return formError('This email already belongs to another record.');
            const record = { ...(existing || {}),
                ...f,
                email: f.email.toLowerCase(),
                age: Number(f.age),
                id: id || uniqueId('PAT'),
                registered: existing ? .registered || localDate()
            };
            if (!updateData(next => {
                    if (id) next.patients = next.patients.map(p => p.id === id ? record : p);
                    else next.patients.push(record);
                    next.accounts = next.accounts.map(a => a.patientId === id ? { ...a,
                        name: f.name,
                        phone: f.phone,
                        email: f.email.toLowerCase()
                    } : a);
                })) return;
        } else if (kind === 'doctor') {
            if (!admin) return;
            if (id && !doctorById(id)) return formError('Doctor not found.');
            if (f.name.length < 2 || !f.specialization || !validPhone(f.phone) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || !['Available', 'On leave'].includes(f.availability)) return formError('Enter valid doctor details, contact information and availability.');
            if (data.doctors.some(d => d.id !== id && d.email.toLowerCase() === f.email.toLowerCase())) return formError('A doctor already uses this email.');
            const record = { ...f,
                email: f.email.toLowerCase(),
                id: id || uniqueId('DOC')
            };
            if (!updateData(next => {
                    if (id) next.doctors = next.doctors.map(d => d.id === id ? record : d);
                    else next.doctors.push(record);
                })) return;
        } else if (kind === 'appointment') {
            const existing = id ? ownAppointments().find(a => a.id === id) : null;
            if ((id && (!admin || !existing)) || !patientById(f.patientId) || (!admin && f.patientId !== getCurrentUser().patientId)) return formError('Select a valid patient for this account.');
            const doctor = doctorById(f.doctorId),
                status = id ? f.status : 'Scheduled';
            if (!doctor || (doctor.availability !== 'Available' && status === 'Scheduled')) return formError('Select an available doctor.');
            if (!f.reason || !/^\d{4}-\d{2}-\d{2}$/.test(f.date) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(f.time) || !['Scheduled', 'Completed', 'Cancelled'].includes(status)) return formError('Enter a valid appointment date, time, reason and status.');
            const instant = new Date(f.date + 'T' + f.time);
            const unchangedPast = existing && existing.date === f.date && existing.time === f.time && existing.doctorId === f.doctorId && status !== 'Scheduled';
            if (!Number.isFinite(instant.getTime()) || (instant <= new Date() && !unchangedPast)) return formError('Appointments must be scheduled for a future date and time.');
            if (status !== 'Cancelled' && data.appointments.some(a => a.id !== id && a.doctorId === f.doctorId && a.date === f.date && a.time === f.time && a.status !== 'Cancelled')) return formError('This doctor already has an appointment at that time. Please select another time.');
            const record = { ...f,
                id: id || uniqueId('APT'),
                status
            };
            if (!updateData(next => {
                    if (id) next.appointments = next.appointments.map(a => a.id === id ? record : a);
                    else next.appointments.push(record);
                })) return;
        } else if (kind === 'bill') {
            if (!admin || !patientById(f.patientId)) return formError('Select a registered patient.');
            const existing = id ? ownBills().find(b => b.id === id) : null;
            if (id && !existing) return formError('Bill not found.');
            const consultation = Number(f.consultation),
                service = Number(f.service);
            if (f.consultation === '' || f.service === '' || !Number.isFinite(consultation) || !Number.isFinite(service) || consultation < 0 || service < 0 || consultation > 10000000 || service > 10000000 || !['Paid', 'Unpaid'].includes(f.status)) return formError('Enter valid non-negative charges of up to ₹1,00,00,000 each.');
            const record = {
                id: id || uniqueId('BILL'),
                patientId: f.patientId,
                consultation: Math.round(consultation * 100) / 100,
                service: Math.round(service * 100) / 100,
                status: f.status,
                date: existing ? .date || localDate()
            };
            if (!updateData(next => {
                    if (id) next.bills = next.bills.map(b => b.id === id ? record : b);
                    else next.bills.push(record);
                })) return;
        } else return;
        closeDialog();
        renderShell();
        toast(id ? 'Changes saved successfully.' : 'Record created successfully.');
    }

    function deleteRecord(kind, id) {
        if (!checkAuthentication() || !checkUserRole('Admin')) return;
        const collection = {
            patient: 'patients',
            doctor: 'doctors',
            bill: 'bills'
        }[kind];
        if (!collection) return;
        const record = data[collection].find(r => r.id === id);
        if (!record) return toast('Record not found.', true);
        if (kind === 'patient' && (data.appointments.some(a => a.patientId === id) || data.bills.some(b => b.patientId === id))) return toast('This patient has linked appointments or bills. Keep the record to preserve hospital history.', true);
        if (kind === 'doctor' && data.appointments.some(a => a.doctorId === id)) return toast('This doctor has linked appointments. Set availability to “On leave” instead.', true);
        confirmAction(`Delete ${kind}?`, `Permanently delete ${record.name || record.id}? ${kind === 'patient' ? 'Any linked patient login account will also be removed. ' : ''}This cannot be undone.`, () => {
            if (!checkAuthentication() || !checkUserRole('Admin')) return;
            if (updateData(next => {
                    next[collection] = next[collection].filter(r => r.id !== id);
                    if (kind === 'patient') next.accounts = next.accounts.filter(a => a.patientId !== id);
                })) {
                closeDialog();
                renderShell();
                toast('Record deleted.');
            }
        }, 'Delete record', true);
    }

    function setAppointmentStatus(id, status) {
        if (!checkAuthentication()) return;
        const a = ownAppointments().find(a => a.id === id);
        if (!a || a.status !== 'Scheduled' || (!checkUserRole('Admin') && status !== 'Cancelled')) return toast('This appointment cannot be updated.', true);
        confirmAction(status === 'Cancelled' ? 'Cancel appointment?' : 'Complete appointment?', `${status === 'Cancelled' ? 'Cancel' : 'Mark as completed'} the appointment for ${displayDate(a.date)} at ${timeLabel(a.time)}?`, () => {
            if (!checkAuthentication()) return;
            const current = ownAppointments().find(x => x.id === id);
            if (!current || current.status !== 'Scheduled' || (!checkUserRole('Admin') && status !== 'Cancelled')) return;
            if (updateData(next => {
                    next.appointments = next.appointments.map(x => x.id === id ? { ...x,
                        status
                    } : x);
                })) {
                closeDialog();
                renderShell();
                toast(`Appointment ${status.toLowerCase()}.`);
            }
        }, status === 'Cancelled' ? 'Cancel appointment' : 'Mark completed', status === 'Cancelled');
    }

    function viewAppointment(id) {
        if (!checkAuthentication()) return;
        const a = ownAppointments().find(a => a.id === id);
        if (!a) return toast('Appointment not found.', true);
        const d = doctorById(a.doctorId);
        openDialog('Appointment details', `<div class="dialog-body"><dl class="detail-list">${[['Appointment', a.id], ['Patient', patientById(a.patientId)?.name], ['Doctor', d?.name], ['Specialization', d?.specialization], ['Date', displayDate(a.date)], ['Time', timeLabel(a.time)], ['Status', a.status], ['Reason', a.reason]].map(([k, v]) => `<div><dt>${k}</dt><dd>${escapeHTML(v)}</dd></div>`).join('')}</dl></div>`, '<div class="dialog-footer"><button class="btn btn-secondary" data-action="close-dialog">Close</button></div>');
    }

    function payBill(id) {
        if (!checkAuthentication() || !checkUserRole('Admin')) return;
        const b = ownBills().find(b => b.id === id);
        if (!b || b.status !== 'Unpaid') return;
        confirmAction('Mark bill as paid?', `Confirm that ${money(b.consultation + b.service)} has been received for ${b.id}. This only records a demo payment; no money is transferred.`, () => {
            if (!checkAuthentication() || !checkUserRole('Admin')) return;
            if (updateData(next => {
                    next.bills = next.bills.map(b => b.id === id ? { ...b,
                        status: 'Paid'
                    } : b);
                })) {
                closeDialog();
                renderShell();
                toast('Bill marked as paid. No real payment was processed.');
            }
        }, 'Mark as paid');
    }

    function printBill(id) {
        if (!checkAuthentication()) return;
        const b = ownBills().find(b => b.id === id);
        if (!b) return toast('Bill not found.', true);
        const p = patientById(b.patientId);
        const markup = `<div class="print-heading"><div><h1>MediCare</h1><p>MediCare General Hospital<br>Fictional academic demonstration</p></div><div><h2>Patient invoice</h2><p>${escapeHTML(b.id)}<br>${displayDate(b.date)}</p></div></div><h3>${escapeHTML(p?.name)}</h3><p>${escapeHTML(p?.id)}<br>${escapeHTML(p?.address)}<br>${escapeHTML(p?.phone)}</p><table><thead><tr><th>Description</th><th>Amount</th></tr></thead><tbody><tr><td>Consultation charges</td><td>${money(b.consultation)}</td></tr><tr><td>Additional service charges</td><td>${money(b.service)}</td></tr><tr><td><strong>Total amount</strong></td><td><strong>${money(b.consultation + b.service)}</strong></td></tr><tr><td>Payment status</td><td>${escapeHTML(b.status)}</td></tr></tbody></table><p class="print-note">This is a demonstration invoice, not a valid medical or tax document.<br>Thank you for choosing MediCare.</p>`;
        $('#print-area').innerHTML = markup;
        openDialog('Print invoice', `<div class="dialog-body">${markup}</div>`, '<div class="dialog-footer"><button class="btn btn-secondary" data-action="close-dialog">Close</button><button class="btn" data-action="browser-print">Print invoice</button></div>');
    }

    function showGuide() {
        openDialog('Your MediCare project guide', '<div class="dialog-body"><p class="confirm-copy">A frontend-only academic project built with HTML5, CSS3 and vanilla JavaScript. Every record is fictional.</p><ol class="guide-list"><li><strong>Patients:</strong> register, search and edit patient records. Records linked to visits or bills are protected from deletion.</li><li><strong>Doctors:</strong> manage specialties, contacts and availability.</li><li><strong>Appointments:</strong> book future visits, prevent doctor time conflicts, update status and cancel visits.</li><li><strong>Billing:</strong> calculate INR totals, record demo payments and print invoices. No real payments are processed.</li><li><strong>Patient portal:</strong> view your own profile, visits and bills; book and cancel your appointments.</li><li><strong>Persistence:</strong> records remain in this browser after refresh and logout. Sessions expire after eight hours.</li></ol><div class="inline-note">Passwords and all records are readable in LocalStorage. Roles can be bypassed with browser tools. This is not secure authentication or a medical records system.</div></div>', '<div class="dialog-footer"><button class="btn" data-action="close-dialog">Got it</button></div>');
    }

    function showNotifications() {
        if (!checkAuthentication()) return;
        const visits = ownAppointments().filter(a => a.status === 'Scheduled'),
            bills = ownBills().filter(b => b.status === 'Unpaid');
        openDialog('Workspace updates', `<div class="dialog-body"><div class="notification-item"><strong>${visits.length} scheduled appointment${visits.length === 1 ? '' : 's'}</strong>Review upcoming visits in your appointment workspace.</div><div class="notification-item"><strong>${bills.length} unpaid bill${bills.length === 1 ? '' : 's'}</strong>Outstanding balance: ${money(bills.reduce((sum, b) => sum + b.consultation + b.service, 0))}</div><div class="notification-item"><strong>Everything stays in this browser</strong>Only fictional demonstration records should be used.</div></div>`, '<div class="dialog-footer"><button class="btn btn-secondary" data-action="close-dialog">Close</button></div>');
    }

    function closeMenu() {
        $('#sidebar') ? .classList.remove('open');
        if ($('#sidebar-overlay')) $('#sidebar-overlay').hidden = true;
    }

    function handleAction(action, el) {
        const id = el.dataset.id;
        if (action === 'toggle-password') {
            const input = $('#' + el.dataset.target);
            const visible = input.type === 'password';
            input.type = visible ? 'text' : 'password';
            el.textContent = visible ? 'Hide' : 'Show';
            el.setAttribute('aria-label', `${visible ? 'Hide' : 'Show'} ${el.dataset.target === 'confirmPassword' ? 'confirm password' : 'password'}`);
            return;
        }
        if (action === 'auth-role') {
            authRole = el.dataset.role;
            renderAuth();
            return;
        }
        if (action === 'auth-mode') {
            authMode = authMode === 'login' ? 'register' : 'login';
            renderAuth();
            return;
        }
        if (action === 'demo-fill') {
            $('#email').value = authRole === 'Admin' ? 'admin@medicare.demo' : 'patient@medicare.demo';
            $('#password').value = authRole === 'Admin' ? 'DemoAdmin123!' : 'DemoPatient123!';
            $('#email').focus();
            return;
        }
        if (action === 'recover-storage') {
            confirmAction('Reset MediCare demo storage?', 'This replaces unreadable MediCare demo records and clears its active session. Other applications’ LocalStorage will not be changed.', () => {
                if (commit(seedData())) {
                    try {
                        localStorage.removeItem(SESSION_KEY);
                    } catch {
                        return toast('Storage is blocked. Allow browser storage before continuing.', true);
                    }
                    storageError = false;
                    session = null;
                    closeDialog();
                    renderAuth();
                    toast('Demo storage restored.');
                }
            }, 'Reset demo storage', true);
            return;
        }
        if (action === 'close-dialog') return closeDialog();
        if (action === 'confirm-action') {
            const handler = pendingConfirm;
            if (handler) handler();
            return;
        }
        if (!checkAuthentication()) return;
        if (action.startsWith('go-')) return navigate(action.slice(3));
        if (action === 'menu') {
            const open = $('#sidebar').classList.toggle('open');
            $('#sidebar-overlay').hidden = !open;
            return;
        }
        if (action === 'logout') return logoutUser();
        if (action === 'help') return showGuide();
        if (action === 'notifications') return showNotifications();
        if (action === 'account') {
            if (checkUserRole('Patient')) return navigate('profile');
            const u = getCurrentUser();
            return openDialog('Administrator account', `<div class="dialog-body"><div class="profile-name"><span class="avatar">${escapeHTML(initials(u.name))}</span><div><h2>${escapeHTML(u.name)}</h2><small>Administrator</small></div></div><p class="confirm-copy">${escapeHTML(u.email)}<br>${escapeHTML(u.phone)}<br>Session expires ${new Date(session.expires).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p><div class="inline-note">Demo account only. This is not secure authentication.</div></div>`, '<div class="dialog-footer"><button class="btn btn-secondary" data-action="close-dialog">Close</button><button class="btn" data-action="logout">Log out</button></div>');
        }
        if (action === 'new-patient') return openPatient();
        if (action === 'edit-patient') return openPatient(id);
        if (action === 'edit-profile') return openPatient(getCurrentUser().patientId, true);
        if (action === 'new-doctor') return openDoctor();
        if (action === 'edit-doctor') return openDoctor(id);
        if (action === 'new-appointment') return openAppointment();
        if (action === 'edit-appointment') return openAppointment(id);
        if (action === 'new-bill') return openBill();
        if (action === 'edit-bill') return openBill(id);
        if (action.startsWith('delete-')) return deleteRecord(action.slice(7), id);
        if (action === 'cancel-appointment') return setAppointmentStatus(id, 'Cancelled');
        if (action === 'complete-appointment') return setAppointmentStatus(id, 'Completed');
        if (action === 'view-appointment') return viewAppointment(id);
        if (action === 'pay-bill') return payBill(id);
        if (action === 'print-bill') return printBill(id);
        if (action === 'browser-print') {
            try {
                window.print();
            } catch {
                toast('Printing is unavailable in this preview. Use the standalone application in a browser.', true);
            }
            return;
        }
        if (action === 'previous-page') {
            currentPage--;
            refreshResults();
            return;
        }
        if (action === 'next-page') {
            currentPage++;
            refreshResults();
            return;
        }
        if (action === 'clear-data' && checkUserRole('Admin')) return confirmAction('Clear all demonstration records?', 'All patients, doctors, appointments, bills and patient accounts will be removed permanently. Administrator accounts will remain. This cannot be undone.', () => {
            if (!checkAuthentication() || !checkUserRole('Admin')) return;
            if (updateData(next => {
                    next.patients = [];
                    next.doctors = [];
                    next.appointments = [];
                    next.bills = [];
                    next.accounts = next.accounts.filter(a => a.role === 'Admin');
                })) {
                closeDialog();
                renderShell();
                toast('Demonstration records cleared. Administrator accounts retained.');
            }
        }, 'Clear demo records', true);
    }

    function searchRecent() {
        const term = $('#dashboard-search').value.toLowerCase(),
            status = $('#dashboard-status').value;
        const records = ownAppointments().filter(a => (status === 'All' || a.status === status) && [a.id, patientById(a.patientId) ? .name, doctorById(a.doctorId) ? .name].some(v => String(v || '').toLowerCase().includes(term))).sort((a, b) => b.date.localeCompare(a.date));
        $('#dashboard-table').innerHTML = appointmentTable(records.slice(0, 5), true);
        $('#recent-count').textContent = `${Math.min(5, records.length)} of ${records.length} matching appointments`;
    }

    function onClick(e) {
        const nav = e.target.closest('[data-page]');
        if (nav && root.contains(nav)) {
            e.preventDefault();
            navigate(nav.dataset.page);
            return;
        }
        const action = e.target.closest('[data-action]');
        if (action && root.contains(action)) {
            e.preventDefault();
            handleAction(action.dataset.action, action);
        }
    }

    function onSubmit(e) {
        if (e.target.id !== 'auth-form' && e.target.id !== 'record-form') return;
        e.preventDefault();
        if (!e.target.reportValidity()) return;
        if (e.target.id === 'auth-form') {
            const f = readForm(e.target);
            if (authMode === 'login') loginUser(f);
            else if (authRole === 'Admin') registerAdmin(f);
            else registerPatient(f);
        } else saveRecord(e.target);
    }

    function onInput(e) {
        if (e.target.id === 'record-search') {
            query = e.target.value;
            currentPage = 1;
            refreshResults();
        }
        if (e.target.id === 'dashboard-search') searchRecent();
        if (e.target.id === 'consultation' || e.target.id === 'service') updateBillTotal();
    }

    function onChange(e) {
        if (e.target.id === 'record-filter') {
            filter = e.target.value;
            currentPage = 1;
            refreshResults();
        }
        if (e.target.id === 'dashboard-status') searchRecent();
    }

    function onHashChange() {
        if (!getCurrentUser()) {
            checkAuthentication();
            return;
        }
        const target = location.hash.slice(1) || 'dashboard';
        if (target !== page) navigate(target);
    }

    function onKeyDown(e) {
        if (e.key === 'Escape') closeMenu();
    }

    function onStorage(e) {
        if (![DATA_KEY, SESSION_KEY, null].includes(e.key)) return;
        closeDialog();
        storageError = false;
        // Synchronize other tabs without silently recreating externally removed data.
        try {
            const raw = localStorage.getItem(DATA_KEY);
            const parsed = raw && JSON.parse(raw);
            if (!validateStoredData(parsed)) throw new Error('Unavailable');
            data = parsed;
            session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
        } catch {
            session = null;
            storageError = true;
            renderAuth();
            return;
        }
        if (getCurrentUser()) {
            if (!protectPage(page)) page = 'dashboard';
            renderShell();
        } else {
            session = null;
            renderAuth();
        }
    }

    function mount(element) {
        root = element;
        if (!root || root.dataset.mounted) return () => {};
        root.dataset.mounted = 'true';
        storageError = false;
        root.addEventListener('click', onClick);
        root.addEventListener('submit', onSubmit);
        root.addEventListener('input', onInput);
        root.addEventListener('change', onChange);
        root.addEventListener('keydown', onKeyDown);
        const dialog = $('#app-dialog');
        const onClose = () => {
            pendingConfirm = null;
            dialogTrigger ? .focus ? .({
                preventScroll: true
            });
        };
        dialog.addEventListener('close', onClose);
        const overlay = $('#sidebar-overlay');
        overlay.addEventListener('click', closeMenu);
        window.addEventListener('hashchange', onHashChange);
        window.addEventListener('storage', onStorage);
        if (loadData()) {
            try {
                session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
            } catch {
                session = null;
            }
            if (getCurrentUser()) {
                const requested = location.hash.slice(1);
                page = protectPage(requested) ? requested : 'dashboard';
                renderShell();
            } else {
                session = null;
                try {
                    localStorage.removeItem(SESSION_KEY);
                } catch { /* Storage error is displayed by the login form. */ }
                renderAuth();
            }
        } else renderAuth();
        return () => {
            clearTimeout(expiryTimer);
            root.removeEventListener('click', onClick);
            root.removeEventListener('submit', onSubmit);
            root.removeEventListener('input', onInput);
            root.removeEventListener('change', onChange);
            root.removeEventListener('keydown', onKeyDown);
            dialog.removeEventListener('close', onClose);
            overlay.removeEventListener('click', closeMenu);
            window.removeEventListener('hashchange', onHashChange);
            window.removeEventListener('storage', onStorage);
            delete root.dataset.mounted;
        };
    }
    // The same unmodified vanilla application runs locally and in the hosted preview.
    globalThis.MediCareMount = mount;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => {
        const element = document.getElementById('medicare-root');
        if (element) mount(element);
    }, {
        once: true
    });
    else {
        const element = document.getElementById('medicare-root');
        if (element) mount(element);
    }
})();