import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    { img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InNsaWRlci1pbWFnZXMvNDcwMjM1ODg5ZDJlMjdkY2U1OTI2ZTQ4OGJkZTQyNmEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAwfSwid2VicCI6eyJxdWFsaXR5IjoxMDB9fX0=', slug: 'adidas-samba-og-cloud-white' },
    { img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InNsaWRlci1pbWFnZXMvNjYyNWY4NjIxYTAzYzhmY2M1YmFiZjAyMjU5MTI5N2YuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAwfSwid2VicCI6eyJxdWFsaXR5IjoxMDB9fX0=', slug: 'air-jordan-1-retro-high-og-chicago' },
    { img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InNsaWRlci1pbWFnZXMvZjk5ZjI5NDZhZmNmZTgxYzNlNmNiZjM0ZTliYzBjZjMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAwfSwid2VicCI6eyJxdWFsaXR5IjoxMDB9fX0=', slug: 'nike-air-max-97-silver-bullet' },
    { img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InNsaWRlci1pbWFnZXMvZGYxYjMyY2U3ZDMzMTFjZWQyNWJiYzBmNzJmODlkNGUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAwfSwid2VicCI6eyJxdWFsaXR5IjoxMDB9fX0=', slug: 'new-balance-550-white-green' },
    { img: 'https://cdn.getswift.asia/unsafe/1600x640/filters:format(webp):quality(80)/https://bo.asics.co.id/media/weltpixel/owlcarouselslider/images/b/a/banner-2_cumulus.jpg_1.jpeg', slug: 'puma-suede-classic-black' },
  ];

  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const moveCarousel = (dir) => {
    setCurrent((prev) => (prev + dir + total) % total);
  };

  return (
    <div className="relative overflow-hidden bg-white border-b border-gray-100" style={{ height: '560px' }}>
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <Link key={i} to={`/game/${slide.slug}`} className="min-w-full h-full relative block cursor-pointer">
            <img src={slide.img} alt={`Banner ${i}`} className="absolute inset-0 w-full h-full object-cover" />
          </Link>
        ))}
      </div>

      <button 
        onClick={() => moveCarousel(-1)}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center transition-all hover:bg-black/60 hover:scale-105 active:scale-95 z-20"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
      </button>
      <button 
        onClick={() => moveCarousel(1)}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center transition-all hover:bg-black/60 hover:scale-105 active:scale-95 z-20"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => goToSlide(i)} 
            className={`transition-all rounded-full ${i === current ? 'w-6 h-2 bg-ks-dark' : 'w-2 h-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
