import React, { useState } from 'react';
import { AccessibilityToolbar } from '../common/AccessibilityToolbar';
import { OfflineBanner } from './OfflineBanner';
import { Header } from './Header';
import { useAccessibilityStore } from '../../stores/useAccessibilityStore';

interface AppShellProps {
  children: (activeTab: string, setActiveTab: (tab: string) => void) => React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const { fontSizeScale, highContrast, reducedMotion } = useAccessibilityStore();

  return (
    <div
      style={{ fontSize: `${fontSizeScale * 100}%` }}
      className={`min-h-screen flex flex-col font-sans transition-all ${
        highContrast ? 'bg-black text-white' : 'bg-ivory-50 text-charcoal-900'
      } ${reducedMotion ? 'motion-reduce' : ''}`}
    >
      <AccessibilityToolbar />
      <OfflineBanner />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {children(activeTab, setActiveTab)}
      </main>

      <footer className="bg-forest-950 text-ivory-300 py-8 border-t border-forest-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400"></span>
            <span className="font-serif font-bold text-ivory-50">SMRITI-SETU</span>
            <span className="text-forest-700">|</span>
            <span className="text-ivory-200">North Eastern Region Cognitive Health Ecosystem</span>
          </div>
          <p className="text-xs text-ivory-400">
            Encrypted Patient Profile & Regional Facility Node Management
          </p>
        </div>
      </footer>
    </div>
  );
};
