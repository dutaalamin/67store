import React from 'react';
import { Link } from 'react-router-dom';

const TrendingSection = () => {
  const sneakers = [
    { name: 'Adidas Samba OG White Black', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzU3Mjg3LzlhZTVjNGViZjUxM2U3MjQ1ZGU3ZDI4NjQ3ODExYTdjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', slug: 'adidas-samba-og-cloud-white' },
    { name: 'New Balance 530 Silver', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzMxNjQ3L2UxMTk3ZGE4YTlkODQ2ZmVmOWEwNjYzMGIzMTBkZTc2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', slug: 'new-balance-550-white-green' },
    { name: 'Nike P-6000 Metallic Silver Sail', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzc4MjEzL2IxZTgxYTZjYzZlMjg1ZGNiMGMxY2Q2YzA4YWMxZjg2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', slug: 'nike-air-max-97-silver-bullet' },
    { name: 'Puma Speedcat OG Black White', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzEwNjk4Ny80Y2ZhYWU4YjZiNDViZjAxZGY3YTlkZjliZWViYWZlNS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH0sIndlYnAiOnsicXVhbGl0eSI6NTB9fX0=', slug: 'puma-suede-classic-black' },
    { name: 'Adidas Samba OG Black White Gum', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzU3Mjg3LzlhZTVjNGViZjUxM2U3MjQ1ZGU3ZDI4NjQ3ODExYTdjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTQwMH19fQ==', slug: 'adidas-samba-og-cloud-white' },
    { name: 'Adidas Adizero Evo SL Black White', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzExODU1NS83M2Y4MTgwOWM3MjFjMmExNDAzMGUwNjU3YTA5ZTc0My5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH0sIndlYnAiOnsicXVhbGl0eSI6NTB9fX0=', slug: 'adidas-ultraboost-22' },
    { name: 'Puma Speedcat Ballet Lace Frosted Ivory', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzE1MjI0NC9hNDY5Yjc0MmE2NTI4YjExZTdkNTMwYjE2OWFmMTZmMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH0sIndlYnAiOnsicXVhbGl0eSI6NTB9fX0=', slug: 'puma-suede-classic-black' },
    { name: 'Adidas Adizero Evo SL White Black', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzExNDYwMC81NTEyOGEzYWIwY2FkYjU5MjUxM2Y2ZDE0NjkwYjYyNC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH0sIndlYnAiOnsicXVhbGl0eSI6NTB9fX0=', slug: 'adidas-stan-smith-green' },
    { name: 'New Balance 1906R White Gold', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzM2NTExLzYzY2M5NDE4MjM0MzQyZWQyOTM2NGFkZTFjZGQzZWNiLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', slug: 'new-balance-550-white-green' },
    { name: 'Puma Speedcat OG Pink White', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzExOTIxNC85ZDFkOWZlZjI2MzM5NTgyYjJhZTQ1ZTE3YzVkZWE5ZC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH0sIndlYnAiOnsicXVhbGl0eSI6NTB9fX0=', slug: 'puma-suede-classic-black' },
  ];

  return (
    <div id="trending-section" className="bg-white py-10 border-b border-gray-100">
      <div className="w-full px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-black tracking-widest uppercase text-gray-900">Trending</h2>
          <a href="#sneakers" className="text-xs font-extrabold text-gray-400 hover:text-ks-dark transition-colors">
            View All
          </a>
        </div>

        {/* Single Row of 9 Premium Curated Sneakers */}
        <div className="py-2">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-5 w-full">
            {sneakers.map((item, index) => (
              <Link 
                key={index} 
                to={`/game/${item.slug}?name=${encodeURIComponent(item.name)}`}
                className="text-center w-full flex flex-col items-center group cursor-pointer block"
              >
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <p className="text-[10px] font-bold text-gray-800 truncate mt-2 w-full text-center group-hover:text-ks-orange transition-colors">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
