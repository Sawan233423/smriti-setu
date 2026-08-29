import React from 'react';
import { 
  Heart, 
  UserCheck, 
  Stethoscope, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  BrainCircuit,
  Volume2
} from 'lucide-react';

interface SmritiSetuSectionProps {
  onAccessPlatform: () => void;
}

export const SmritiSetuSection: React.FC<SmritiSetuSectionProps> = ({ onAccessPlatform }) => {
  return (
    <section id="smriti-setu-section" className="py-14 md:py-20 bg-gradient-to-br from-govNavy-dark via-govNavy to-blue-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-govYellow text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-slate-950" /> Featured Mission Platform
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            SMRITI-SETU
          </h2>

          <p className="text-amber-300 font-serif text-lg md:text-xl italic">
            "Connecting memories, families and care."
          </p>

          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans pt-2">
            A multilingual cognitive assistance platform designed to support senior citizens experiencing memory and cognitive difficulties, alongside primary family caregivers and attending healthcare clinicians.
          </p>
        </div>

        {/* Visual Workflow: Patient -> Cognitive Activities -> Memory Assistance -> Caregiver -> Clinician */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Step 1: Patient */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center space-y-3">
            <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">1. Patient</h3>
            <p className="text-slate-200 text-xs leading-relaxed">
              Warm greeting, large typography, audio prompts, and peaceful daily memory activities.
            </p>
          </div>

          {/* Step 2: Cognitive Activities */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">2. Cognitive Care</h3>
            <p className="text-slate-200 text-xs leading-relaxed">
              5 interactive games with automatic adaptive difficulty adjustments.
            </p>
          </div>

          {/* Step 3: Caregiver */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center space-y-3">
            <div className="w-14 h-14 bg-blue-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <UserCheck className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">3. Caregiver</h3>
            <p className="text-slate-200 text-xs leading-relaxed">
              Memory Garden photo albums, daily medicine reminders, and engagement tracking.
            </p>
          </div>

          {/* Step 4: Clinician */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center space-y-3">
            <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">4. Clinician</h3>
            <p className="text-slate-200 text-xs leading-relaxed">
              Session trends, response time metrics, and AI-assisted observations.
            </p>
          </div>

        </div>

        {/* Access Platform CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onAccessPlatform}
            className="bg-govYellow text-slate-950 hover:bg-govYellow-dark px-8 py-4 rounded-2xl font-extrabold text-base md:text-lg shadow-banner transition-all transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Lock className="w-5 h-5 text-slate-950" />
            <span>Access Smriti-Setu Authenticated Platform</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
