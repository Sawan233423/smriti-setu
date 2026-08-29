import React from 'react';
import { Shield, ExternalLink, Mail, Phone, Lock, Heart, Award } from 'lucide-react';
import { AshokaEmblem, DigitalIndiaBadge } from '../common/GovEmblem';

export const GovFooter: React.FC = () => {
  return (
    <footer className="bg-govNavy-dark text-slate-200 pt-12 pb-8 border-t-4 border-govYellow font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Column 1: Government Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <AshokaEmblem className="w-10 h-14 shrink-0 bg-white p-1 rounded" />
              <div>
                <h3 className="font-serif font-extrabold text-lg text-white">
                  Government of India
                </h3>
                <p className="text-xs text-amber-300 font-bold">
                  Ministry of Health & Family Welfare · North Eastern Council
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs max-w-sm">
              Official public healthcare directory and cognitive care platform serving citizens across Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura.
            </p>
            <div className="pt-2">
              <DigitalIndiaBadge />
            </div>
          </div>

          {/* Column 2: Health Portals */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-slate-700 pb-1">
              Public Health Portals
            </h4>
            <ul className="space-y-1.5 text-slate-300 font-bold">
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Hospital Directory</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Primary Health Centres</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Smriti-Setu Cognitive Care</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Tele-MANAS (14416)</a></li>
              <li><a href="#services" className="hover:text-amber-300 transition-colors">Elderly Helpline (14567)</a></li>
            </ul>
          </div>

          {/* Column 3: Accessibility */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-slate-700 pb-1">
              Accessibility Services
            </h4>
            <ul className="space-y-1.5 text-slate-300 font-bold">
              <li><span className="text-slate-300">English / Hindi Support</span></li>
              <li><span className="text-slate-300">Assamese (অসমীয়া) Portal</span></li>
              <li><span className="text-slate-300">Bengali (বাংলা) Portal</span></li>
              <li><span className="text-slate-300">Screen Reader Accessibility</span></li>
              <li><span className="text-slate-300">WCAG High Contrast Toggle</span></li>
            </ul>
          </div>

          {/* Column 4: Helplines */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-slate-700 pb-1">
              Official Helplines
            </h4>
            <div className="space-y-2 text-slate-300 font-bold">
              <p className="flex items-center gap-1.5 text-amber-300">
                <Phone className="w-3.5 h-3.5" />
                <span>Elderly Helpline: 14567</span>
              </p>
              <p className="flex items-center gap-1.5 text-amber-300">
                <Phone className="w-3.5 h-3.5" />
                <span>Tele-MANAS: 14416</span>
              </p>
              <p className="text-[11px] text-slate-400 font-normal pt-1">
                Website Content Managed by National Health Mission & NEC Partnership.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Disclaimer Strip */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <p>© 2026 Ministry of Health & Family Welfare, Government of India. All rights reserved.</p>
          <p className="text-slate-400 italic">
            "Designed and developed for public healthcare delivery in North Eastern Region."
          </p>
        </div>

      </div>
    </footer>
  );
};
