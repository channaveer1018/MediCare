import React, { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useAuth } from '@/contexts/auth.context';
import {
  type AuthDialogOptions,
  notifyAuthDialogClose,
  registerAuthDialogOpener,
  unregisterAuthDialogOpener,
} from '@/lib/auth-dialog.store';
import { useI18n } from '@/i18n';
import { We0LoginButton } from './we0-login-button';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: 'login' | 'register';
}

export const AuthDialog: React.FC<AuthDialogProps> = ({
  open,
  onOpenChange,
  defaultMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [hint, setHint] = useState('');
  const onSuccessRef = useRef<(() => void) | undefined>(undefined);

  const { signIn, signUp } = useAuth();
  const { t } = useI18n();

  // 注册全局 opener，允许非 React 代码（如 fetcher）触发弹窗
  useEffect(() => {
    registerAuthDialogOpener((opts?: AuthDialogOptions) => {
      setHint(opts?.message || '');
      setError('');
      setSuccess('');
      if (opts?.mode) setMode(opts.mode);
      onSuccessRef.current = opts?.onSuccess;
      onOpenChange(true);
    });
    return () => unregisterAuthDialogOpener();
  }, [onOpenChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'register') {
        if (password !== confirmPassword) {
          setError(t('auth.passwordMismatch'));
          setLoading(false);
          return;
        }

        const { error } = await signUp(email, password, username || undefined);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(t('auth.registerSuccess'));
          setTimeout(() => {
            setMode('login');
            setSuccess('');
          }, 2000);
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(t('auth.loginSuccess'));
          setTimeout(() => {
            onOpenChange(false);
            resetForm();
            onSuccessRef.current?.();
          }, 800);
        }
      }
    } catch (err: any) {
      setError(err.message || t('auth.operationFailed'));
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess('');
    setHint('');
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    resetForm();
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      resetForm();
      notifyAuthDialogClose();
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode === 'login' ? t('auth.loginTitle') : t('auth.registerTitle')}</DialogTitle>
          <DialogDescription>
            {mode === 'login' ? t('auth.loginDesc') : t('auth.registerDesc')}
          </DialogDescription>
        </DialogHeader>

        {hint && (
          <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 rounded-md">
            {hint}
          </div>
        )}

        <We0LoginButton />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dialog-email">{t('auth.email')}</Label>
            <Input
              id="dialog-email"
              type="email"
              placeholder={t('auth.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {mode === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="dialog-username">{t('auth.username')}</Label>
              <Input
                id="dialog-username"
                type="text"
                placeholder={t('auth.usernamePlaceholder')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={2}
                maxLength={50}
                disabled={loading}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="dialog-password">{t('auth.password')}</Label>
            <Input
              id="dialog-password"
              type="password"
              placeholder={t('auth.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={loading}
            />
          </div>

          {mode === 'register' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="dialog-confirmPassword">{t('auth.confirmPassword')}</Label>
                <Input
                  id="dialog-confirmPassword"
                  type="password"
                  placeholder={t('auth.passwordPlaceholder')}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={loading}
                />
              </div>
            </>
          )}

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="text-sm text-green-600 bg-green-50 p-3 rounded-md">
              {success}
            </div>
          )}

          <div className="space-y-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? t('auth.processing') : mode === 'login' ? t('auth.loginBtn') : t('auth.registerBtn')}
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={switchMode}
              disabled={loading}
            >
              {mode === 'login' ? t('auth.noAccount') : t('auth.hasAccount')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
