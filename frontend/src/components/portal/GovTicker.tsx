import React from 'react';
import { Bell, Sparkles } from 'lucide-react';

export const GovTicker: React.FC = () => {
  return (
    <div className="bg-govYellow-light border-y border-govYellow-dark/30 py-2 px-4 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-center gap-3 text-xs font-semibold">
        
        {/* Yellow Latest Updates Badge */}
        <div className="bg-govYellow text-slate-950 px-3 py-1 rounded-md font-extrabold flex items-center gap-1.5 shrink-0 shadow-xs uppercase tracking-wider">
          <Bell className="w-3.5 h-3.5" />
          <span>Latest Updates</span>
        </div>

        {/* Scrolling News Marquee Text */}
        <div className="overflow-hidden relative flex-1 text-slate-900 font-medium">
          <div className="animate-marquee whitespace-nowrap space-x-12">
            <span>
              📢 <strong>NER Cognitive Health Camps:</strong> Free memory screening camps launched in Guwahati & Shillong under Ayushman Bharat.
            </span>
            <span>
              ☎️ <strong>Tele-MANAS Helpline:</strong> 24x7 Toll-Free helpline 14567 / 14416 available in Assamese, Bengali, Khasi, and Mizo.
            </span>
            <span>
              ⚙️ <strong>ESP32 Gateway Telemetry:</strong> Stationed hardware nodes active in 65 regional district hospitals across 8 NER states.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
