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

  const greetingMessage = `Good morning, ${selectedPatient?.name || 'Ranjit ji'}. A few peaceful memory activities for today.`;

  const cognitiveGames = [
    {
      id: 'memory_match' as ActivityType,
      title: 'Visual Memory Match',
      category: 'Visual Recognition',
      duration: '5 mins',
      difficulty: 'Adaptive',
      image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80',
      description: 'Match familiar Assam tea garden, Brahmaputra river & regional cultural photo pairs.',
      badgeColor: 'bg-[#004085]',
    },
    {
      id: 'picture_recognition' as ActivityType,
      title: 'Family & Face Recognition',
      category: 'Family Memories',
      duration: '4 mins',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80',
      description: 'Identify family photo prompts, children, and familiar regional heritage moments.',
      badgeColor: 'bg-emerald-700',
    },
    {
      id: 'routine_recall' as ActivityType,
      title: 'Daily Care Routine Recall',
      category: 'Daily Care',
      duration: '6 mins',
      difficulty: 'Guided',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
      description: 'Sequence daily morning routines: morning tea, medication, walk, and breakfast.',
      badgeColor: 'bg-amber-600',
    },
    {
      id: 'familiar_sound' as ActivityType,
      title: 'Familiar Sound & Audio Quiz',
      category: 'Auditory Recall',
      duration: '4 mins',
      difficulty: 'Audio Guided',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
      description: 'Listen and identify familiar sounds of rain, temple bell, birds, and tea kettle.',
      badgeColor: 'bg-blue-700',
    },
    {
      id: 'sequence_recall' as ActivityType,
      title: 'Spatial Pattern Sequence',
      category: 'Spatial Focus',
      duration: '5 mins',
      difficulty: 'Level 1-3',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
      description: 'Follow step-by-step glowing color tile sequences to test attention span.',
      badgeColor: 'bg-purple-700',
    },
  ];

  return (
    <div className="space-y-10 py-4">
      
      {/* 1. Patient Hero Greeting Photography Frame (Authentic Assam/North East Elder Care) */}
      <div className="relative rounded-3xl overflow-hidden shadow-banner border-4 border-white bg-slate-900 text-white min-h-[300px] md:min-h-[350px] flex items-end">
        {/* Background Image: Authentic North East Elder Care Environment */}
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
          alt="Ranjit Borthakur - Assam Senior Citizen Cognitive Care"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

        <div className="relative z-10 p-6 md:p-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-amber-400 text-slate-950 font-extrabold text-xs rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" /> Patient Portal · Ranjit ji (Assam)
            </span>
            <span className="text-xs font-bold text-slate-300 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
              Daily Cognitive Streak: 🔥 5 Days Active
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            {greetingMessage}
          </h1>

          <div className="flex items-center gap-4 pt-1">
            <VoiceButton textToSpeak={greetingMessage} label="Listen to Morning Greeting" />
          </div>
        </div>
      </div>

      {/* 2. Cognitive AI Gaming Modules Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#004085]">
              Interactive Cognitive Games
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-0.5">
              5 Core Memory & Recall Games
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cognitiveGames.map((act) => (
            <div
              key={act.id}
              onClick={() => onStartActivity(act.id)}
              className="bg-white rounded-3xl border border-slate-300 overflow-hidden shadow-xs hover:shadow-gov hover:border-[#004085] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-3 left-3 px-2.5 py-1 text-white rounded-md font-extrabold text-[11px] uppercase shadow-xs ${act.badgeColor}`}>
                  {act.category}
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-slate-900/80 backdrop-blur-md text-amber-300 font-bold text-[10px] rounded border border-slate-700">
                  {act.difficulty}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-[#004085] transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#004085]" /> {act.duration}
                  </span>
                  <span className="text-xs font-extrabold text-[#004085] group-hover:underline flex items-center gap-1">
                    Play Game <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
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
