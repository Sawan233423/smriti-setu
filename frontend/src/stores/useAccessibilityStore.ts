import { create } from 'zustand';
import { AccessibilitySettings } from '../types';

interface AccessibilityState extends AccessibilitySettings {
  toggleElderlyMode: () => void;
  setFontSizeScale: (scale: number) => void;
  toggleHighContrast: () => void;
  toggleSpeechAssist: () => void;
  toggleReducedMotion: () => void;
}

const updateDOMAccessibility = (state: AccessibilitySettings) => {
  if (typeof document !== 'undefined') {
    // 1. Dynamically scale root HTML font size (scales all rem units in Tailwind CSS)
    document.documentElement.style.fontSize = `${state.fontSizeScale * 100}%`;

    // 2. High Contrast mode toggle on document root & body
    if (state.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.body.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.body.classList.remove('high-contrast');
    }

    // 3. Elderly mode toggle on document root & body
    if (state.elderlyMode) {
      document.documentElement.classList.add('elderly-mode');
      document.body.classList.add('elderly-mode');
    } else {
      document.documentElement.classList.remove('elderly-mode');
      document.body.classList.remove('elderly-mode');
    }
  }
};

const initialState: AccessibilitySettings = {
  elderlyMode: true, // Default to Elderly Mode ON for max accessibility
  fontSizeScale: 1.15,
  highContrast: false,
  speechAssistEnabled: true,
  reducedMotion: true,
};

export const useAccessibilityStore = create<AccessibilityState>((set) => ({
  ...initialState,

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

// Apply initial DOM accessibility settings
updateDOMAccessibility(initialState);

// Subscribe to store changes to keep DOM accessibility perfectly in sync
useAccessibilityStore.subscribe((state) => {
  updateDOMAccessibility(state);
});
