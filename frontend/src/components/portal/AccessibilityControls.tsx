import React from 'react';
import { Volume2, Type, Sliders, Sparkles } from 'lucide-react';
import { useAccessibilityStore } from '../../stores/useAccessibilityStore';
import { useTranslation } from 'react-i18next';

export const AccessibilityControls: React.FC = () => {
  const { t } = useTranslation();
  const {
    fontSizeScale,
    speechAssistEnabled,
    reducedMotion,
    setFontSizeScale,
    toggleSpeechAssist,
    toggleReducedMotion,
  } = useAccessibilityStore();

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-gov space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <Sliders className="w-5 h-5 text-govNavy" />
        <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
          Elderly & Cognitive Accessibility Preferences <Sparkles className="w-4 h-4 text-amber-500" />
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
        {/* Text Size Resizer */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
          <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Text Resizer</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFontSizeScale(0.9)}
              className={`flex-1 py-1.5 rounded-lg border font-extrabold ${
                fontSizeScale === 0.9 ? 'bg-govNavy text-white border-govNavy' : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
              }`}
            >
              A- (Small)
            </button>
            <button
              onClick={() => setFontSizeScale(1.0)}
              className={`flex-1 py-1.5 rounded-lg border font-extrabold ${
                fontSizeScale === 1.0 ? 'bg-govNavy text-white border-govNavy' : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
              }`}
            >
              A (Normal)
            </button>
            <button
              onClick={() => setFontSizeScale(1.2)}
              className={`flex-1 py-1.5 rounded-lg border font-extrabold ${
                fontSizeScale === 1.2 ? 'bg-govNavy text-white border-govNavy' : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
              }`}
            >
              A+ (Large)
            </button>
          </div>
        </div>

        {/* Text-to-Speech Assist */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
          <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Speech Assistance</span>
          <button
            onClick={toggleSpeechAssist}
            className={`w-full py-2 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all ${
              speechAssistEnabled
                ? 'bg-emerald-600 text-white border-emerald-700 font-extrabold'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{speechAssistEnabled ? 'Voice Assist On' : 'Enable Voice Assist'}</span>
          </button>
        </div>

        {/* Reduced Motion */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
          <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Motion Controls</span>
          <button
            onClick={toggleReducedMotion}
            className={`w-full py-2 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all ${
              reducedMotion
                ? 'bg-govNavy text-white border-govNavy-dark font-extrabold'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>{reducedMotion ? 'Reduced Motion On' : 'Standard Motion'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
