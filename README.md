# MediCare — Hospital Management System

**MediCare** is a web-based Hospital Management System designed to streamline hospital and clinic operations by centralizing patient records, appointment scheduling, clinical staff coordination, and administrative workflows in a single browser interface.

## Overview

Hospitals and clinics often juggle patient intake, doctor schedules, medical records, and billing across disconnected tools or manual logs. MediCare provides a structured frontend web interface aimed at making everyday hospital workflows clearer, faster, and easier to manage.

## Key Features

- **Patient Management:** Track patient profiles, registration details, visit history, and ongoing care records.
- **Appointment Scheduling:** Organize consultations, check-ins, and doctor availability.
- **Doctor & Department Coordination:** Manage clinical staff, specialties, and departmental workflows.
- **Records & Administration:** Support clinical documentation, billing/operational views, and day-to-day hospital tracking.
- **Responsive Web UI:** Styled with modular CSS and bundled web scripts for viewing in desktop and mobile browsers.

## Project Structure (Local Capture)

- `box2-local-2cc00b54.we0.ai/` — Main web application assets, stylesheets (`global.css`, `style.css`), `index.html`, and bundled scripts (`__bundled/`, `static/`, `projects/`).
- `node_modules/` — Local package dependencies from the captured workspace.

## Running Locally

### Serve the Local Web Build

Open PowerShell inside the `box2-local-2cc00b54.we0.ai` folder and run a static file server:

```powershell
cd "C:\Users\dell\Downloads\box2_local_2cc00b54.we0.ai (1)\box2-local-2cc00b54.we0.ai"
npx --yes serve .
