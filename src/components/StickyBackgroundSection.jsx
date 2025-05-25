import React from 'react';
import BannerSection from './HomeComponents/BannerSection';
import InformationSection from './HomeComponents/InformationSection';
import CharacterSection from './HomeComponents/CharacterSection';

const StickyBackgroundSection = () => {
  return (
    <div>
      <BannerSection />
      <InformationSection />
      <CharacterSection />
    </div>
  );
};

export default StickyBackgroundSection;
