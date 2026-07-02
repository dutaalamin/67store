import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const promos = [
    { title: 'TOP 50', slug: 'top-50', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400' },
    { title: 'RUNNING', slug: 'running', img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400' },
    { title: 'WALKING', slug: 'walking', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=400' },
    { title: 'DAILY', slug: 'daily', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div id="categories-section" className="bg-white pt-12 pb-6 border-b border-gray-100">
      <div className="w-full px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-black tracking-widest uppercase text-gray-900">Shop By Category</h2>
        </div>

        {/* 4-Column Promo Banners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {promos.map((promo, index) => (
            <Link 
              key={index} 
              to={`/category/${promo.slug}`}
              className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-center items-center text-center h-40 border border-gray-150/40 group cursor-pointer block"
            >
              {/* Background image */}
              <img 
                src={promo.img} 
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Uniform dark overlay for centered text */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
              {/* Centered Text Content */}
              <div className="z-10 flex flex-col items-center">
                <h3 className="text-white text-xl sm:text-2xl font-black tracking-widest uppercase transform group-hover:scale-105 transition-transform duration-300">
                  {promo.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
