import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguageStore, SupportedLanguage } from '../../stores/useLanguageStore';
import { useAccessibilityStore } from '../../stores/useAccessibilityStore';

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, availableLanguages, setLanguage } = useLanguageStore();
  const { elderlyMode } = useAccessibilityStore();

  return (
    <div className="relative inline-flex items-center gap-1.5 bg-ivory-200/80 hover:bg-ivory-300/80 px-3 py-1.5 rounded-full border border-ivory-300 transition-colors">
      <Languages className="w-3.5 h-3.5 text-forest-800" />
      <select
        value={currentLanguage}
        onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
        aria-label="Select Interface Language"
        className={`bg-transparent font-medium text-charcoal-900 focus:outline-none cursor-pointer pr-1 ${
          elderlyMode ? 'text-sm font-bold' : 'text-xs'
        }`}
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-white text-slate-900">
            {lang.nativeLabel} ({lang.label})
          </option>
        ))}
      </select>
    </div>
  );
};
