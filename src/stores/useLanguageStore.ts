import { create } from 'zustand';
import i18n from '../i18n/i18n';

export type SupportedLanguage = 'en' | 'hi' | 'as' | 'bn';

interface LanguageState {
  currentLanguage: SupportedLanguage;
  availableLanguages: Array<{ code: SupportedLanguage; label: string; nativeLabel: string }>;
  setLanguage: (lang: SupportedLanguage) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: 'en',
  availableLanguages: [
    { code: 'en', label: 'English', nativeLabel: 'English' },
    { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
    { code: 'as', label: 'Assamese', nativeLabel: 'অসমীয়া' },
    { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  ],
  setLanguage: (lang) => {
    i18n.changeLanguage(lang);
    set({ currentLanguage: lang });
  },
}));
