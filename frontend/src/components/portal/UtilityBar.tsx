import React from 'react';
import { PhoneCall, Globe } from 'lucide-react';
import { useAccessibilityStore } from '../../stores/useAccessibilityStore';
import { useLanguageStore, SupportedLanguage } from '../../stores/useLanguageStore';
import { IndianFlagBadge } from '../common/GovEmblem';

export const UtilityBar: React.FC = () => {
  const { currentLanguage, availableLanguages, setLanguage } = useLanguageStore();
  const { fontSizeScale, setFontSizeScale } = useAccessibilityStore();

  return (
    <div className="bg-[#0B3B60] text-white py-1.5 px-4 text-xs font-bold border-b border-blue-950 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Indian Government & Ministry Identity */}
        <div className="flex items-center gap-3">
          <IndianFlagBadge />
          <span className="hidden md:inline text-slate-200 font-extrabold text-[11px] border-l border-slate-500 pl-3">
            National Health Mission — North Eastern Region Cognitive Health Ecosystem
          </span>
        </div>

        {/* Right: Helplines, Font Resizers & Official Language Selector */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          
          {/* Toll-Free Helplines */}
          <div className="hidden lg:flex items-center gap-2 text-amber-300 font-extrabold text-xs bg-[#004085] px-2.5 py-1 rounded-md border border-slate-500">
            <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
            <span>Healthcare Helpline: 14567 / 14416 (Toll Free 24x7)</span>
          </div>

          {/* Official Language Selector Dropdown */}
          <div className="relative inline-flex items-center bg-[#004085] px-2.5 py-1 rounded-md border border-slate-500 text-xs font-extrabold text-amber-300 shadow-xs">
            <Globe className="w-3.5 h-3.5 text-amber-300 mr-1.5 shrink-0" />
            <select
              value={currentLanguage}
              onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
              className="bg-transparent text-white focus:outline-none cursor-pointer font-bold text-xs pr-1"
              aria-label="Select Language"
            >
              {availableLanguages.map((l) => (
                <option key={l.code} value={l.code} className="text-slate-900 bg-white font-bold">
                  {l.nativeLabel}
                </option>
              ))}
            </select>
          </div>

          {/* Text Size Resizers A- A A+ */}
          <div className="flex items-center gap-1 bg-[#004085] p-0.5 rounded-md border border-slate-500">
            <span className="text-[10px] text-slate-200 px-1 font-bold">Text:</span>
            <button
              onClick={() => setFontSizeScale(0.9)}
              title="Decrease Font Size"
              className={`px-1.5 py-0.5 text-xs font-bold rounded ${
                fontSizeScale === 0.9 ? 'bg-amber-400 text-slate-950' : 'hover:bg-blue-600 text-white'
              }`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeScale(1.0)}
              title="Standard Font Size"
              className={`px-1.5 py-0.5 text-xs font-bold rounded ${
                fontSizeScale === 1.0 ? 'bg-amber-400 text-slate-950' : 'hover:bg-blue-600 text-white'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSizeScale(1.2)}
              title="Increase Font Size"
              className={`px-1.5 py-0.5 text-xs font-bold rounded ${
                fontSizeScale === 1.2 ? 'bg-amber-400 text-slate-950' : 'hover:bg-blue-600 text-white'
              }`}
            >
              A+
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
