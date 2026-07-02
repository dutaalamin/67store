import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const saleProducts = [
    { name: "Nike Revolution 6 Men's Road Running Shoes - White", img: 'https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/fa9fb4d0f43eee24ec164086e782e45f/helix/01-NIKE-F34RUNIK5-NIKHJ9198102-White.jpg?x-oss-process=image/resize,w_400,webp', price: 695200, original_price: 869000, slug: 'nike-air-force-1-low-white' },
    { name: "Airwalk Easter Men's Lifestyle Shoes - Beige/Grey", img: 'https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/4a8798258a4e27674094ae8b2384b046/helix/01-AIRWALK-FFSSBAIWA-AIWXF251116H-Beige.jpg?x-oss-process=image/resize,w_400,webp', price: 349300, original_price: 499000, slug: 'vans-old-skool-black-white' },
    { name: "Converse Sport Casual Men's Sneakers - Black/Black/White", img: 'https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/a54b92dff7c13086286386f972f38411/helix/01-CONVERSE-FFSSBCONA-CONA10547C-Black.jpg?x-oss-process=image/resize,w_400,webp', price: 699000, original_price: null, slug: 'adidas-campus-00s' },
    { name: "Diadora Piagio Men's Running Shoes - Black", img: 'https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/49c76b1d8fd9066335a1a0bdf125fde3/helix/01-DIADORA-FFSSBDIAA-DIAXR250705B-Black.jpg?x-oss-process=image/resize,w_400,webp', price: 399200, original_price: 499000, slug: 'adidas-ultraboost-22' },
    { name: "Adidas Base Aim Men's Running Shoes - Olive Strata", img: 'https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/ba4b41f0f77d499e9e0e7ad0786920ad/helix/01-ADIDAS-F34RUADI5-ADIJK0960-Olive.jpg?x-oss-process=image/resize,w_400,webp', price: 420000, original_price: 700000, slug: 'adidas-stan-smith-green' },
    { name: "K-Swiss Court Tiebreak II Men Sneakers Shoes - Red", img: 'https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/5eefbdc731eed95af5ec9a70fdbc4b33/helix/01-K-SWISS-FFSCSKSWA-KSWMLSS501RD-Red.jpg?x-oss-process=image/resize,w_400,webp', price: 599000, original_price: 799000, slug: 'puma-suede-classic-black' },
    { name: "Reebok Forte Lounger Men's Lifestyle Shoes - Black", img: 'https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/34e0ff6620e25c674369f016eecef54e/helix/01-REEBOK-FFSSBREEA-REEC00263942-Black.jpg?x-oss-process=image/resize,w_400,webp', price: 499000, original_price: 699000, slug: 'puma-rs-x-toys' }
  ];

  // Duplicate the items to make the grid look full, just like in the original Laravel
  const allSaleProducts = [...saleProducts, ...saleProducts, ...saleProducts];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price).replace('Rp', 'Rp ').replace(',00', '');
  };

  return (
    <div id="sneakers" className="w-full px-4 sm:px-8 md:px-12 py-12 bg-white">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2 id="product-grid-title" className="text-xs font-black tracking-widest uppercase text-gray-900">Sale</h2>
          <span id="product-grid-count" className="bg-gray-100 text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
            {allSaleProducts.length} item
          </span>
        </div>
      </div>

      <div id="product-grid-container" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
        {allSaleProducts.map((item, index) => (
          <Link key={index} to={`/game/${item.slug}`} className="group block w-full cursor-pointer">
            {/* Image Container */}
            <div className="relative w-full aspect-square flex items-center justify-center p-6 mb-4 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.name}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            {/* Info */}
            <div className="space-y-1.5 px-1">
              <h3 className="text-xs font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-ks-orange transition-colors min-h-[32px]">
                {item.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-black text-gray-900">
                  {formatPrice(item.price)}
                </span>
                {item.original_price && (
                  <span className="text-[10px] text-gray-400 line-through">
                    {formatPrice(item.original_price)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
