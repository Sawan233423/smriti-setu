// Web Speech API Voice Assistance Service for SMRITI-SETU Elderly Care

export const speakText = (text: string, lang: string = 'en') => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported in this browser environment.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Map language codes to BCP 47 tags for speech synthesis
  const langMap: Record<string, string> = {
    en: 'en-IN',
    hi: 'hi-IN',
    as: 'as-IN',
    bn: 'bn-IN',
  };

  utterance.lang = langMap[lang] || 'en-IN';
  utterance.rate = 0.85; // Slightly slower, calm cadence for elderly comprehension
  utterance.pitch = 1.0;

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
