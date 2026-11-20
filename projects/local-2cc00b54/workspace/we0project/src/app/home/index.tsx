import { useEffect, useRef } from 'react';
import documentMarkup from '../../../MediCare-Hospital-Management-System/index.html?raw';
import '../../../MediCare-Hospital-Management-System/css/style.css';
import '../../../MediCare-Hospital-Management-System/js/script.js';

declare global {
  interface Window {
    MediCareMount?: (element: HTMLElement) => () => void;
  }
}

const markup = documentMarkup.split('<!-- app:start -->')[1].split('<!-- app:end -->')[0];

export default function HomePage() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current?.querySelector<HTMLElement>('#medicare-root');
    if (!element) return;
    return window.MediCareMount?.(element);
  }, []);
  return <div className="min-h-screen w-full" ref={host} dangerouslySetInnerHTML={{ __html: markup }} />;
}
