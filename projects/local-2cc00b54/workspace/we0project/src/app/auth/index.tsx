import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useAuth } from '@/contexts/auth.context';
import { useI18n } from '@/i18n';
import { We0LoginButton } from '../../components/auth/we0-login-button';

type AuthMode = 'login' | 'register';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, loading: authLoading, signIn, signUp } = useAuth();
  const { t } = useI18n();

  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  const initialMessage = searchParams.get('message') || '';
  const redirectTarget = useMemo(() => {
    const redirect = searchParams.get('redirect');
    if (!redirect || !redirect.startsWith('/')) {
      return '/';
    }
    return redirect;
  }, [searchParams]);

  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setMode(initialMode);
    setError(initialMessage);
    setSuccess('');
  }, [initialMessage, initialMode]);

  useEffect(() => {
    if (!authLoading && user) {
      navigate(redirectTarget, { replace: true });
    }
  }, [authLoading, navigate, redirectTarget, user]);

  const resetFeedback = () => {
    setError('');
    setSuccess('');
  };

  const updateMode = (nextMode: AuthMode) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('mode', nextMode);
    setSearchParams(nextParams, { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetFeedback();
    setSubmitting(true);

    try {
      if (mode === 'register') {
        if (password !== confirmPassword) {
          setError(t('auth.passwordMismatch'));
          return;
        }

        const { error: signUpError } = await signUp(email, password);
        if (signUpError) {
          setError(signUpError.message);
          return;
        }

        setSuccess(t('auth.registerSuccess'));
        updateMode('login');
        setPassword('');
        setConfirmPassword('');
        return;
      }

      const { error: signInError } = await signIn(email, password);
      if (signInError) {
        setError(signInError.message);
        return;
      }

      navigate(redirectTarget, { replace: true });
    } catch (err: any) {
      setError(err.message || t('auth.operationFailed'));
    } finally {
      setSubmitting(false);
    }
  };

  const switchMode = () => {
    updateMode(mode === 'login' ? 'register' : 'login');
    setPassword('');
    setConfirmPassword('');
    resetFeedback();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{t('auth.title')}</p>
          <h1 className="text-3xl font-semibold text-card-foreground">
            {mode === 'login' ? t('auth.loginTitle') : t('auth.registerTitle')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {mode === 'login' ? t('auth.loginDesc') : t('auth.registerDesc')}
          </p>
        </div>

        <We0LoginButton redirect={redirectTarget} />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t('auth.email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('auth.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={submitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t('auth.password')}</Label>
            <Input
              id="password"
              type="password"
              placeholder={t('auth.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={submitting}
            />
          </div>

          {mode === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder={t('auth.passwordPlaceholder')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                disabled={submitting}
              />
            </div>
          )}

          {error && (
            <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-md bg-green-50 p-3 text-sm text-green-600">
              {success}
            </div>
          )}

          <div className="space-y-2 pt-2">
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? t('auth.processing') : mode === 'login' ? t('auth.loginBtn') : t('auth.registerBtn')}
            </Button>
            <Button type="button" variant="ghost" className="w-full" onClick={switchMode} disabled={submitting}>
              {mode === 'login' ? t('auth.noAccount') : t('auth.hasAccount')}
            </Button>
            {location.key && (
              <Button type="button" variant="outline" className="w-full" onClick={() => navigate(-1)}>
                {t('auth.back')}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
