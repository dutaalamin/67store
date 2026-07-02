import React from 'react';
import HeroCarousel from '../components/Home/HeroCarousel';
import TrendingSection from '../components/Home/TrendingSection';
import CategorySection from '../components/Home/CategorySection';
import ProductGrid from '../components/Home/ProductGrid';
import PromoBanners from '../components/Home/PromoBanners';

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <TrendingSection />
      <CategorySection />
      <ProductGrid />
      <PromoBanners />
    </div>
  );
};

export default Home;
