import React from 'react';
import BannerSection from './HomeComponents/BannerSection';
import InformationSection from './HomeComponents/InformationSection';
import CharacterSection from './HomeComponents/CharacterSection';

const StickyBackgroundSection = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <BannerSection />
      <InformationSection />
      <CharacterSection />
    </div>
  );
};

export default StickyBackgroundSection;
