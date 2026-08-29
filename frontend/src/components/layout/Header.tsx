import React from 'react';
import { Heart, Sparkles, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { RoleSwitcher } from './RoleSwitcher';
import { useAuthStore } from '../../stores/useAuthStore';
import { useAccessibilityStore } from '../../stores/useAccessibilityStore';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  const { role, selectedPatient } = useAuthStore();
  const { elderlyMode } = useAccessibilityStore();

  const patientNav = [
    { id: 'home', labelKey: 'navigation.home' },
    { id: 'activities', labelKey: 'navigation.activities' },
    { id: 'memories', labelKey: 'navigation.memories' },
    { id: 'reminders', labelKey: 'navigation.reminders' },
  ];

  const caregiverNav = [
    { id: 'home', labelKey: 'navigation.home' },
    { id: 'memories', labelKey: 'navigation.memories' },
    { id: 'reminders', labelKey: 'navigation.reminders' },
    { id: 'device', labelKey: 'navigation.deviceCenter' },
  ];

  const clinicianNav = [
    { id: 'analytics', labelKey: 'navigation.analytics' },
    { id: 'activities', labelKey: 'navigation.activities' },
    { id: 'device', labelKey: 'navigation.deviceCenter' },
  ];

  const adminNav = [
    { id: 'facility', labelKey: 'navigation.facility' },
    { id: 'device', labelKey: 'navigation.deviceCenter' },
    { id: 'analytics', labelKey: 'navigation.analytics' },
  ];

  const navItems = {
    patient: patientNav,
    caregiver: caregiverNav,
    clinician: clinicianNav,
    facility_admin: adminNav,
  }[role];

  return (
    <header className="bg-ivory-50/90 backdrop-blur-md border-b border-ivory-200 sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Single Row Header */}
        <div className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-ivory-200/60">
          
          {/* Logo & Regional Identity */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-forest-800 flex items-center justify-center text-ivory-50 shadow-soft">
              <Heart className="w-6 h-6 fill-gold-500 stroke-forest-800" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-2xl tracking-tight text-forest-950 font-serif">
                  SMRITI-SETU
                </h1>
                <span className="bg-forest-100 text-forest-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-forest-200">
                  {selectedPatient.hierarchy.state} Care Node
                </span>
              </div>
              <p className="text-xs font-medium text-charcoal-500">
                {t('tagline')}
              </p>
            </div>
          </div>

          {/* Controls: Role Switcher & Language Selector */}
          <div className="flex flex-wrap items-center gap-3">
            <RoleSwitcher />
            <LanguageSelector />
          </div>
        </div>

        {/* Clean Editorial Navigation Bar */}
        <div className="py-2.5 flex items-center justify-between overflow-x-auto">
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-forest-800 text-white shadow-soft font-semibold'
                      : 'text-charcoal-700 hover:text-forest-900 hover:bg-ivory-200/60'
                  } ${elderlyMode ? 'px-6 py-2.5 text-lg font-bold' : 'text-sm'}`}
                >
                  {t(item.labelKey)}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-charcoal-600 bg-ivory-100 px-3.5 py-1.5 rounded-full border border-ivory-200">
            <Navigation className="w-3.5 h-3.5 text-forest-700" />
            <span>
              {selectedPatient.name} ({selectedPatient.hierarchy.district})
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};
