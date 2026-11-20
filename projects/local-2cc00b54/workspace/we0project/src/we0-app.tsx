import { defineWe0App } from '../we0-runtime/define-app';
import './app/global.css';
import { routes } from './routes';
import { AuthDialog } from './components/auth/auth-dialog';
import { AppErrorBoundary } from './components/monitoring/app-error-boundary';
import { Toaster } from './components/ui/sonner';
import { appI18n } from './i18n';

export default defineWe0App({
  routes,
  i18n: appI18n,
  ssr: {
    documentTitle: 'MediCare Hospital Management System',
    favicon: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Crect width=%2264%22 height=%2264%22 rx=%2216%22 fill=%22%232675e8%22/%3E%3Cpath d=%22M27 14h10v13h13v10H37v13H27V37H14V27h13z%22 fill=%22white%22/%3E%3C/svg%3E',
    pages: [{ path: '/cms' }],
  },
  slots: {
    AuthDialog,
    ErrorBoundary: AppErrorBoundary,
    Toaster,
  },
});
