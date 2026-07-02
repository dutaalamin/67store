import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
  const { slug } = useParams();
  const [sortType, setSortType] = useState('default');
  const [sortLabel, setSortLabel] = useState('Featured Items');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock Category Data based on the laravel version
  const mockProducts = [
    { name: 'Adidas Samba OG White Black', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzU3Mjg3LzlhZTVjNGViZjUxM2U3MjQ1ZGU3ZDI4NjQ3ODExYTdjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', price: 2500000, slug: 'adidas-samba-og-cloud-white', originalPrice: null, index: 0 },
    { name: 'New Balance 530 Silver', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzMxNjQ3L2UxMTk3ZGE4YTlkODQ2ZmVmOWEwNjYzMGIzMTBkZTc2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', price: 1800000, slug: 'new-balance-530-silver', originalPrice: 2000000, index: 1 },
    { name: 'Nike P-6000 Metallic Silver Sail', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzc4MjEzL2IxZTgxYTZjYzZlMjg1ZGNiMGMxY2Q2YzA4YWMxZjg2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', price: 1950000, slug: 'nike-p-6000', originalPrice: null, index: 2 },
    { name: 'Puma Speedcat OG Black White', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzEwNjk4Ny80Y2ZhYWU4YjZiNDViZjAxZGY3YTlkZjliZWViYWZlNS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH0sIndlYnAiOnsicXVhbGl0eSI6NTB9fX0=', price: 1200000, slug: 'puma-speedcat', originalPrice: null, index: 3 },
    { name: 'New Balance 1906R White Gold', img: 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzM2NTExLzYzY2M5NDE4MjM0MzQyZWQyOTM2NGFkZTFjZGQzZWNiLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==', price: 2100000, slug: 'nb-1906r', originalPrice: 2400000, index: 4 },
  ];

  const [sortedProducts, setSortedProducts] = useState(mockProducts);

  useEffect(() => {
    let sorted = [...mockProducts];
    if (sortType === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortType === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === 'popular') {
      sorted.sort((a, b) => (a.index % 2) - (b.index % 2) || a.index - b.index);
    } else if (sortType === 'new') {
      sorted.sort((a, b) => b.index - a.index);
    } else {
      sorted.sort((a, b) => a.index - b.index);
    }
    setSortedProducts(sorted);
  }, [sortType]);

  const applySort = (type, label) => {
    setSortType(type);
    setSortLabel(label);
    setIsDropdownOpen(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price).replace('Rp', 'IDR ').replace(',00', '');
  };

  return (
    <div>
      {/* Category Header */}
      <div className="w-full bg-white py-8 px-4 sm:px-8 md:px-12 border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto">
          {/* Title & Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-[10px] font-black uppercase tracking-[0.15em] text-black">
              {sortedProducts.length} Items - {slug?.toUpperCase()}
            </div>
            
            {/* Premium Custom Sort Dropdown */}
            <div className="relative inline-block text-left">
              <div>
                <button 
                  type="button" 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="inline-flex items-center justify-between gap-x-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 active:scale-95 transition-all min-w-[180px]"
                >
                  <span>
                    <span className="text-gray-400 font-semibold">Sort:</span>
                    <span className="text-gray-900 ml-1">{sortLabel}</span>
                  </span>
                  <svg className={`h-4 w-4 text-gray-400 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setIsDropdownOpen(false)}></div>
                  <div className="absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 space-y-1 transform opacity-100 scale-100 transition-all duration-200">
                    {[
                      { type: 'default', label: 'Featured Items' },
                      { type: 'popular', label: 'Most Popular' },
                      { type: 'new', label: 'Newly Added' },
                      { type: 'price-desc', label: 'Highest to Lowest' },
                      { type: 'price-asc', label: 'Lowest to Highest' },
                    ].map((opt) => (
                      <button 
                        key={opt.type}
                        onClick={() => applySort(opt.type, opt.label)} 
                        className={`w-full text-left rounded-xl px-4 py-2.5 text-xs block transition-all ${sortType === opt.type ? 'bg-gray-50/50 text-ks-orange font-bold' : 'text-gray-700 font-medium hover:bg-gray-50/80 hover:text-ks-orange'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Area */}
      <div className="w-full px-4 sm:px-8 md:px-12 py-14 bg-white min-h-[50vh]">
        <div className="max-w-screen-xl mx-auto">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12">
              {sortedProducts.map((item) => (
                <Link 
                  key={item.slug}
                  to={`/game/${item.slug}?name=${encodeURIComponent(item.name)}`}
                  className="group block w-full cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square flex items-center justify-center p-6 mb-4 overflow-hidden bg-white border border-gray-50 rounded-2xl group-hover:shadow-sm transition-all duration-300">
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
                      {item.originalPrice && (
                        <span className="text-[10px] text-gray-400 line-through">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-black text-gray-900 text-base uppercase tracking-wider mb-1">Item Tidak Ditemukan</h3>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Koleksi untuk kategori ini sedang diperbarui. Silakan kembali beberapa saat lagi!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
