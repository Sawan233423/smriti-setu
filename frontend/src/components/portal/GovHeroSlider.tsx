import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Heart, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Activity,
  PhoneCall,
  MapPin,
  Sparkles,
  Search
} from 'lucide-react';

interface GovHeroSliderProps {
  onFindFacility?: () => void;
  onExploreServices?: () => void;
  onAccessSmritiSetu?: () => void;
}

export const GovHeroSlider: React.FC<GovHeroSliderProps> = ({
  onFindFacility,
  onExploreServices,
  onAccessSmritiSetu,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Clean, Authentic North Eastern Region (India) Healthcare Featured Banner Stories
  const heroSlides = [
    {
      id: 1,
      badge: 'National Health Mission · North Eastern Region',
      title: 'Connecting Memories, Families & Healthcare Services Across North East India',
      subtitle: 'Official public healthcare directory & cognitive assistance mission serving citizens across Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura.',
      image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80', // Assam Tea Garden & River Hills
      ctaText: 'Find Hospitals in NER',
    },
    {
      id: 2,
      badge: 'Digital India & Elderly Wellness Initiative',
      title: 'Smriti-Setu Multilingual Cognitive Care & Memory Assistance',
      subtitle: 'Personalized memory exercises, family memory garden timelines, and daily care reminders in English, Hindi, Assamese (অসমীয়া), and Bengali (বাংলা).',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80', // Beautiful Sikkim & Eastern Himalayas Health Node
      ctaText: 'Explore Cognitive Care',
    },
    {
      id: 3,
      badge: 'Ayushman Bharat PM-JAY & Health Network',
      title: '24x7 Regional District Hospitals & Tele-MANAS Health Helplines',
      subtitle: 'Immediate access to government district hospitals, primary health centers, specialized medical college centers, and toll-free mental health support.',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', // Meghalaya Misty Hills Healthcare
      ctaText: 'View Regional Health Network',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const current = heroSlides[activeSlide];

  return (
    <div className="bg-slate-100 border-b-4 border-govNavy py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        
        {/* Main 2-Column Hero Gateway Grid (Government Portal Style - Clean White Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Featured Banner Card (Clean White Container with Image Frame) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-300 shadow-gov flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            <div className="space-y-4 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-govNavy-soft text-govNavy-dark font-extrabold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-govNavy" />
                  <span>{current.badge}</span>
                </span>

                {/* Slider Dots Indicator */}
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeSlide ? 'bg-govNavy w-6' : 'bg-slate-300 w-2 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-slate-900 leading-tight">
                {current.title}
              </h2>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans font-medium">
                {current.subtitle}
              </p>
            </div>

            {/* Featured Photography Frame (Authentic North East India Visual) */}
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-xs group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" /> North Eastern Region Healthcare Infrastructure
                </span>
              </div>
            </div>

            {/* CTAs Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onFindFacility}
                  className="bg-govNavy text-white hover:bg-govNavy-light px-6 py-3 rounded-xl font-bold text-sm shadow-xs transition-all flex items-center gap-2"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-govYellow" />
                </button>

                <button
                  onClick={onAccessSmritiSetu}
                  className="bg-govYellow text-slate-950 hover:bg-amber-400 px-6 py-3 rounded-xl font-extrabold text-sm shadow-xs transition-all flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Access Smriti-Setu Care</span>
                </button>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Quick e-Services Portal Panel (Official Gov Sidebar Style) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-300 shadow-gov flex flex-col justify-between space-y-4">
            
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-govNavy-dark flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-govNavy" /> Quick e-Services Portal
                </span>
                <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  24x7 Active
                </span>
              </div>

              <div className="space-y-3">
                
                <button
                  onClick={onFindFacility}
                  className="w-full p-3.5 bg-slate-50 hover:bg-govNavy-soft rounded-2xl border border-slate-200 text-left transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-govNavy text-white rounded-xl shadow-xs">
                      <Building2 className="w-5 h-5 text-govYellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-govNavy">Hospitals & Clinics Directory</h4>
                      <p className="text-[11px] text-slate-500 font-medium">Search facilities by state or district</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-govNavy group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={onExploreServices}
                  className="w-full p-3.5 bg-slate-50 hover:bg-govNavy-soft rounded-2xl border border-slate-200 text-left transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-xs">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-govNavy">Primary Health Centres (PHC)</h4>
                      <p className="text-[11px] text-slate-500 font-medium">Community care & outpatient units</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-govNavy group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={onAccessSmritiSetu}
                  className="w-full p-3.5 bg-amber-50 hover:bg-amber-100 rounded-2xl border border-amber-300 text-left transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-amber-500 text-slate-950 rounded-xl shadow-xs">
                      <Heart className="w-5 h-5 fill-slate-950" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-950 text-sm">Smriti-Setu Cognitive Care</h4>
                      <p className="text-[11px] text-amber-900 font-medium">Memory exercises & caregiver tools</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-900 group-hover:translate-x-1 transition-all" />
                </button>

              </div>
            </div>

            {/* Helpline Callout Box */}
            <div className="p-4 bg-govNavy-dark text-white rounded-2xl border border-slate-700 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-amber-400" /> Emergency & Mental Helplines:
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 text-sm font-extrabold text-amber-300">
                <span>Elderly: 14567</span>
                <span>Tele-MANAS: 14416</span>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Portal Key Infrastructure Counter Strip (Gov Portal Standard) */}
        <div className="bg-white rounded-2xl p-4 border border-slate-300 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border-r border-slate-200 last:border-r-0">
            <span className="text-2xl font-extrabold text-govNavy block">8 States</span>
            <span className="text-xs font-semibold text-slate-600 uppercase">North Eastern Region</span>
          </div>
          <div className="border-r border-slate-200 last:border-r-0">
            <span className="text-2xl font-extrabold text-govNavy block">1,240+</span>
            <span className="text-xs font-semibold text-slate-600 uppercase">Public Health Units</span>
          </div>
          <div className="border-r border-slate-200 last:border-r-0">
            <span className="text-2xl font-extrabold text-amber-900 block">65 Nodes</span>
            <span className="text-xs font-semibold text-slate-600 uppercase">Cognitive Care Centers</span>
          </div>
          <div>
            <span className="text-2xl font-extrabold text-emerald-700 block">24x7</span>
            <span className="text-xs font-semibold text-slate-600 uppercase">Toll-Free Helplines</span>
          </div>
        </div>

      </div>
    </div>
  );
};
