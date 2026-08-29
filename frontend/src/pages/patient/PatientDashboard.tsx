import React from 'react';
import { 
  Clock, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { useAuthStore } from '../../stores/useAuthStore';
import { VoiceButton } from '../../components/common/VoiceButton';
import { ActivityType } from '../../types';

interface PatientDashboardProps {
  onStartActivity: (type: ActivityType) => void;
}

export const PatientDashboard: React.FC<PatientDashboardProps> = ({ onStartActivity }) => {
  const { selectedPatient } = useAuthStore();

  const greetingMessage = `Good morning, ${selectedPatient?.name || 'Ranjit ji'}. A few familiar moments for today.`;

  const suggestedActivities = [
    {
      id: 'memory_match' as ActivityType,
      title: 'Remember the Picture',
      category: 'Visual Recognition',
      duration: '5 mins',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80',
      description: 'Match familiar North East tea garden and landscape photo pairs.',
    },
    {
      id: 'picture_recognition' as ActivityType,
      title: 'Who Is This?',
      category: 'Family Memories',
      duration: '4 mins',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
      description: 'Identify family members and familiar regional cultural moments.',
    },
    {
      id: 'routine_recall' as ActivityType,
      title: 'Remember Your Morning',
      category: 'Daily Care',
      duration: '6 mins',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80',
      description: 'Sequence your morning routine: tea, morning walk, and warm breakfast.',
    },
  ];

  return (
    <div className="space-y-10 py-6">
      
      {/* 1. Patient Hero Greeting Photography Frame (Authentic Assam/North East Elder Care) */}
      <div className="relative rounded-3xl overflow-hidden shadow-banner border-4 border-white bg-slate-900 text-white min-h-[320px] md:min-h-[380px] flex items-end">
        {/* Background Image: Authentic North East Elder & Care Environment */}
        <img
          src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80"
          alt="Ranjit Borthakur - Assam North East Elder Care"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

        <div className="relative z-10 p-6 md:p-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-amber-400 text-slate-950 font-extrabold text-xs rounded-full uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Today with Ranjit ji
            </span>
            <span className="text-xs font-semibold text-slate-300">
              Kamrup Metro · Assam
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            {greetingMessage}
          </h1>

          <div className="flex items-center gap-4 pt-2">
            <VoiceButton textToSpeak={greetingMessage} label="Listen to Morning Greeting" />
          </div>
        </div>
      </div>

      {/* 2. Today's Recommended Cognitive Activities */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-govNavy">
              Cognitive Activities
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-0.5">
              Today's Memory Exercises
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestedActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => onStartActivity(act.id)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-gov hover:border-govNavy transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-govNavy text-white rounded-md font-bold text-[11px] uppercase">
                  {act.category}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-govNavy transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-govNavy" /> {act.duration}
                  </span>
                  <span className="text-xs font-extrabold text-govNavy group-hover:underline flex items-center gap-1">
                    Start Activity <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
