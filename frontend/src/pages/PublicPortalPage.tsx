import React, { useState } from 'react';
import { UtilityBar } from '../components/portal/UtilityBar';
import { MainNavigation } from '../components/portal/MainNavigation';
import { GovTicker } from '../components/portal/GovTicker';
import { GovHeroSlider } from '../components/portal/GovHeroSlider';
import { Hero } from '../components/portal/Hero';
import { ServiceExplorer } from '../components/portal/ServiceExplorer';
import { StateNetwork } from '../components/portal/StateNetwork';
import { FacilitySearch } from '../components/portal/FacilitySearch';
import { SmritiSetuSection } from '../components/portal/SmritiSetuSection';
import { ProgramsSection } from '../components/portal/ProgramsSection';
import { UpdatesSection } from '../components/portal/UpdatesSection';
import { ResourcesSection } from '../components/portal/ResourcesSection';
import { GovFooter } from '../components/portal/GovFooter';
import { AccessibilityControls } from '../components/portal/AccessibilityControls';
import { AuthModal } from '../components/portal/AuthModal';
import { AIVoiceAssistant } from '../components/common/AIVoiceAssistant';
import { CognitiveStreakWidget } from '../components/common/CognitiveStreakWidget';
import { useAccessibilityStore } from '../stores/useAccessibilityStore';
import { UserRole } from '../types';

interface PublicPortalPageProps {
  onOpenAppAuth: (role?: UserRole) => void;
}

export const PublicPortalPage: React.FC<PublicPortalPageProps> = ({ onOpenAppAuth }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [stateFilter, setStateFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { fontSizeScale, reducedMotion } = useAccessibilityStore();

  const handleSelectStateFilter = (stateName: string) => {
    setStateFilter(stateName);
    setActiveTab('facilities');
    const facSection = document.getElementById('facilities-section');
    if (facSection) facSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    if (serviceId === 'srv-2') {
      setActiveTab('smriti-setu');
      const setuSection = document.getElementById('smriti-setu-section');
      if (setuSection) setuSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('facilities');
      const facSection = document.getElementById('facilities-section');
      if (facSection) facSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setActiveTab('facilities');
    const facSection = document.getElementById('facilities-section');
    if (facSection) facSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFindFacility = () => {
    setActiveTab('facilities');
    const facSection = document.getElementById('facilities-section');
    if (facSection) facSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    setActiveTab('services');
    const srvSection = document.getElementById('services-section');
    if (srvSection) srvSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoginSuccess = (role: UserRole) => {
    onOpenAppAuth(role);
  };

  return (
    <div
      style={{ fontSize: `${fontSizeScale * 100}%` }}
      className={`min-h-screen flex flex-col font-sans transition-all bg-slate-50 text-slate-900 ${
        reducedMotion ? 'motion-reduce' : ''
      }`}
    >
      {/* 1. Official Government Utility Bar */}
      <UtilityBar />

      {/* 2. Official Government Header & Navigation */}
      <MainNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleSearchSubmit}
        onOpenAppAuth={() => setIsAuthModalOpen(true)}
      />

      {/* 3. Scrolling Latest Updates Ticker */}
      <GovTicker />

      {/* 4. Daily AI Cognitive Score & Streak Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 w-full">
        <CognitiveStreakWidget onOpenAppAuth={() => setIsAuthModalOpen(true)} />
      </div>

      {/* 5. Main Hero Carousel Slider */}
      {activeTab === 'home' && (
        <GovHeroSlider
          onFindFacility={handleFindFacility}
          onExploreServices={handleExploreServices}
          onAccessSmritiSetu={() => setIsAuthModalOpen(true)}
        />
      )}

      {/* 6. Main Content Sections */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onFindFacility={handleFindFacility}
              onExploreServices={handleExploreServices}
              onSearchSubmit={handleSearchSubmit}
            />
            
            <ServiceExplorer onSelectService={handleSelectService} />
            
            <StateNetwork onSelectStateFilter={handleSelectStateFilter} />
            
            <FacilitySearch initialStateFilter={stateFilter} initialSearchQuery={searchQuery} />
            
            <SmritiSetuSection onAccessPlatform={() => setIsAuthModalOpen(true)} />
            
            <ProgramsSection />
            
            <UpdatesSection />

            <div className="max-w-7xl mx-auto px-4 py-8">
              <AccessibilityControls />
            </div>

            <ResourcesSection />
          </>
        )}

        {activeTab === 'services' && (
          <>
            <ServiceExplorer onSelectService={handleSelectService} />
            <FacilitySearch initialStateFilter={stateFilter} initialSearchQuery={searchQuery} />
          </>
        )}

        {activeTab === 'facilities' && (
          <FacilitySearch initialStateFilter={stateFilter} initialSearchQuery={searchQuery} />
        )}

        {activeTab === 'network' && (
          <StateNetwork onSelectStateFilter={handleSelectStateFilter} />
        )}

        {activeTab === 'smriti-setu' && (
          <SmritiSetuSection onAccessPlatform={() => setIsAuthModalOpen(true)} />
        )}

        {activeTab === 'programs' && <ProgramsSection />}

        {activeTab === 'resources' && <ResourcesSection />}
      </main>

      {/* 7. Official Government Footer */}
      <GovFooter />

      {/* 8. Floating AI Voice Assistant */}
      <AIVoiceAssistant onSearchQuery={handleSearchSubmit} />

      {/* 9. Role Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};
