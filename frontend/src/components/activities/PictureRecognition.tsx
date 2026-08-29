import React, { useState } from 'react';
import { CheckCircle2, Volume2, ArrowLeft } from 'lucide-react';
import { Button } from '../common/Button';
import { VoiceButton } from '../common/VoiceButton';
import { useAccessibilityStore } from '../../stores/useAccessibilityStore';

interface PictureRecognitionProps {
  onComplete: (accuracy: number, attempts: number, responseTimeMs: number) => void;
  onBack: () => void;
}

const quizQuestions = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80',
    question: 'Which traditional festival celebration is shown in this family photograph?',
    options: ['Rongali Bihu', 'Diwali Lights', 'Durga Puja', 'New Year'],
    correctOption: 0,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=80',
    question: 'What landmark location in Assam is featured here?',
    options: ['Lush Green Tea Estate', 'Himalayan Snow Peak', 'Sea Beach', 'Desert Dunes'],
    correctOption: 0,
  },
];

export const PictureRecognition: React.FC<PictureRecognitionProps> = ({ onComplete, onBack }) => {
  const { elderlyMode } = useAccessibilityStore();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startTime] = useState<number>(Date.now());
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizQuestions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (showFeedback) return;
    setSelectedOpt(idx);
    setShowFeedback(true);

    const isCorrect = idx === currentQ.correctOption;
    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentIdx + 1 < quizQuestions.length) {
        setCurrentIdx((prev) => prev + 1);
        setSelectedOpt(null);
        setShowFeedback(false);
      } else {
        const elapsed = Date.now() - startTime;
        const finalScore = isCorrect ? score + 1 : score;
        const accuracy = Math.round((finalScore / quizQuestions.length) * 100);
        setIsFinished(true);
        onComplete(accuracy, quizQuestions.length, elapsed);
      }
    }, 1400);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-4">
      
      {/* Clean Top Bar */}
      <div className="flex items-center justify-between border-b border-ivory-200 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-forest-800 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Schedule
        </button>
        <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
          Question {currentIdx + 1} of {quizQuestions.length}
        </span>
      </div>

      {!isFinished && (
        <div className="space-y-8 text-center">
          
          {/* Main Visual Image */}
          <div className="relative rounded-4xl overflow-hidden shadow-photo border-4 border-white bg-ivory-200 max-h-[380px] mx-auto">
            <img
              src={currentQ.imageUrl}
              alt="Recognition item"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          {/* Question Prompt */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className={`font-serif font-bold text-charcoal-900 leading-tight ${
              elderlyMode ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
            }`}>
              {currentQ.question}
            </h3>
            
            <VoiceButton textToSpeak={currentQ.question} label="Listen Question" size="md" />
          </div>

          {/* Answer Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2">
            {currentQ.options.map((opt, i) => {
              const isSelected = selectedOpt === i;
              const isCorrect = i === currentQ.correctOption;

              let btnStyle = 'bg-white border-2 border-ivory-300 text-charcoal-900 hover:border-forest-700 shadow-soft';
              if (showFeedback) {
                if (isCorrect) btnStyle = 'bg-forest-800 border-forest-900 text-white font-bold shadow-photo';
                else if (isSelected) btnStyle = 'bg-terracotta-600 border-terracotta-700 text-white font-bold';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelectOption(i)}
                  disabled={showFeedback}
                  className={`w-full p-5 rounded-3xl text-center font-serif font-bold text-xl transition-all duration-200 select-none ${btnStyle} ${
                    elderlyMode ? 'py-6 text-2xl' : ''
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

        </div>
      )}

      {/* Completion Experience */}
      {isFinished && (
        <div className="bg-ivory-100 border-2 border-forest-600 text-center space-y-6 p-10 md:p-14 rounded-4xl shadow-photo max-w-2xl mx-auto">
          <CheckCircle2 className="w-20 h-20 text-forest-700 mx-auto" />
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900">Great Effort, Ranjit ji!</h3>
          <p className="text-charcoal-700 font-medium text-xl">
            You recognized {score} out of {quizQuestions.length} memory questions accurately.
          </p>
          <Button variant="primary" size="elderly" onClick={onBack}>
            Return to Schedule
          </Button>
        </div>
      )}

    </div>
  );
};
