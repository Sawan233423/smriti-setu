import { create } from 'zustand';
import { AccessibilitySettings } from '../types';

interface AccessibilityState extends AccessibilitySettings {
  toggleElderlyMode: () => void;
  setFontSizeScale: (scale: number) => void;
  toggleHighContrast: () => void;
  toggleSpeechAssist: () => void;
  toggleReducedMotion: () => void;
}

export const useAccessibilityStore = create<AccessibilityState>((set) => ({
  elderlyMode: true, // Default to Elderly Mode ON for max accessibility
  fontSizeScale: 1.15,
  highContrast: false,
  speechAssistEnabled: true,
  reducedMotion: true,

  toggleElderlyMode: () =>
    set((state) => {
      const nextMode = !state.elderlyMode;
      return {
        elderlyMode: nextMode,
        fontSizeScale: nextMode ? 1.15 : 1.0,
        reducedMotion: nextMode ? true : state.reducedMotion,
        speechAssistEnabled: nextMode ? true : state.speechAssistEnabled,
      };
    }),

  setFontSizeScale: (fontSizeScale) => set({ fontSizeScale }),
  toggleHighContrast: () => set((state) => ({ highContrast: !state.highContrast })),
  toggleSpeechAssist: () => set((state) => ({ speechAssistEnabled: !state.speechAssistEnabled })),
  toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),
}));
