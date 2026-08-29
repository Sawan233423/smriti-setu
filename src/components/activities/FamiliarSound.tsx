import React, { useState } from 'react';
import { Volume2, Music, CheckCircle2, Sparkles } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { VoiceButton } from '../common/VoiceButton';
import { speakText } from '../../utils/speech';

interface FamiliarSoundProps {
  onComplete: (accuracy: number, attempts: number, responseTimeMs: number) => void;
  onBack: () => void;
}

const soundPrompts = [
  {
    id: 1,
    title: 'Sound Challenge #1',
    description: 'Listen to the gentle rainfall on bamboo leaves and choose the matching sound.',
    audioText: 'Pitter patter rainfall sound over lush green bamboo leaves in Assam',
    options: ['Lush Rain on Leaves', 'Train Horn', 'Busy Traffic', 'Dog Barking'],
    correctOption: 0,
  },
  {
    id: 2,
    title: 'Sound Challenge #2',
    description: 'Listen to traditional Bihu Pepa horn music and identify the instrument.',
    audioText: 'Melodious traditional Pepa horn melody played during Bihu celebrations',
    options: ['Assamese Pepa Flute', 'Violin', 'Electric Guitar', 'Piano'],
    correctOption: 0,
  },
];

export const FamiliarSound: React.FC<FamiliarSoundProps> = ({ onComplete, onBack }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime] = useState<number>(Date.now());
  const [isFinished, setIsFinished] = useState(false);

  const currentSound = soundPrompts[currentIdx];

  const handlePlaySound = () => {
    speakText(currentSound.audioText, 'en');
  };

  const handleSelectOption = (idx: number) => {
    if (showFeedback) return;
    setSelectedOpt(idx);
    setShowFeedback(true);

    const isCorrect = idx === currentSound.correctOption;
    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentIdx + 1 < soundPrompts.length) {
        setCurrentIdx((prev) => prev + 1);
        setSelectedOpt(null);
        setShowFeedback(false);
      } else {
        const elapsed = Date.now() - startTime;
        const finalScore = isCorrect ? score + 1 : score;
        const accuracy = Math.round((finalScore / soundPrompts.length) * 100);
        setIsFinished(true);
        onComplete(accuracy, soundPrompts.length, elapsed);
      }
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-subtle">
        <div>
          <h3 className="font-bold text-xl text-slate-900">Familiar Sound Recognition</h3>
          <p className="text-xs text-slate-500">Challenge {currentIdx + 1} of {soundPrompts.length}</p>
        </div>
        <Button variant="outline" size="sm" onClick={onBack}>Back</Button>
      </div>

      {!isFinished && (
        <Card className="space-y-6 text-center">
          <div className="p-8 bg-sage-50 rounded-2xl border-2 border-sage-300 space-y-4">
            <div className="w-16 h-16 bg-sage-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md animate-pulse">
              <Music className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-2xl text-slate-900">{currentSound.title}</h4>
            <p className="text-slate-600 text-base">{currentSound.description}</p>
            
            <Button
              variant="primary"
              size="elderly"
              icon={<Volume2 className="w-6 h-6" />}
              onClick={handlePlaySound}
            >
              Play Acoustic Sound Sample
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentSound.options.map((opt, i) => {
              const isSelected = selectedOpt === i;
              const isCorrect = i === currentSound.correctOption;

              let btnStyle = 'bg-white border-2 border-slate-300 text-slate-900 hover:border-brand-500';
              if (showFeedback) {
                if (isCorrect) btnStyle = 'bg-sage-600 border-sage-700 text-white font-bold';
                else if (isSelected) btnStyle = 'bg-terracotta-600 border-terracotta-700 text-white';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelectOption(i)}
                  disabled={showFeedback}
                  className={`w-full p-4 rounded-2xl text-left font-semibold text-lg transition-all shadow-xs ${btnStyle}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </Card>
      )}

      {isFinished && (
        <Card className="bg-sage-50 border-2 border-sage-500 text-center space-y-4 p-8">
          <CheckCircle2 className="w-16 h-16 text-sage-600 mx-auto" />
          <h3 className="text-3xl font-bold text-slate-900">Sound Session Completed!</h3>
          <p className="text-slate-700 font-medium text-lg">
            Recognized {score} out of {soundPrompts.length} sounds accurately!
          </p>
          <Button variant="primary" size="lg" onClick={onBack}>
            Return to Schedule
          </Button>
        </Card>
      )}

    </div>
  );
};
