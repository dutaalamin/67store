import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  const [searchParams] = useSearchParams();
  const displayName = searchParams.get('name') || 'Sneaker Product';
  
  const [selectedSize, setSelectedSize] = useState('EU 40');
  const [isAccordion1Open, setIsAccordion1Open] = useState(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [formRating, setFormRating] = useState(0);

  const sizes = [
    { name: 'EU 40', price: 2500000 },
    { name: 'EU 41', price: 2550000 },
    { name: 'EU 42', price: 2600000 },
    { name: 'EU 43', price: 2650000 },
    { name: 'EU 44', price: 2700000 },
  ];

  const currentProduct = sizes.find(s => s.name === selectedSize) || sizes[0];
  
  // Dummy images matching the laravel ones
  const mainImg = 'https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzU3Mjg3LzlhZTVjNGViZjUxM2U3MjQ1ZGU3ZDI4NjQ3ODExYTdjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==';

  const formatPrice = (price) => {
    return 'IDR ' + new Intl.NumberFormat('id-ID').format(price);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!formRating) {
      alert('Silakan pilih rating bintang terlebih dahulu!');
      return;
    }
    alert('Terima kasih! Ulasan Anda berhasil ditambahkan.');
    setIsReviewFormOpen(false);
    setFormRating(0);
  };

  return (
    <div className="bg-white">
      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative bg-white rounded-3xl overflow-hidden aspect-square border border-gray-100 p-8 flex items-center justify-center group">
                <img 
                  src={mainImg} 
                  alt={displayName}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                />
                <button type="button" className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="flex justify-center gap-2">
                <span className="w-2 h-2 bg-gray-800 rounded-full cursor-pointer"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full cursor-pointer"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full cursor-pointer"></span>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">{displayName}</h1>

              {/* Price & Size Chart */}
              <div className="flex items-end justify-between py-4 border-b border-gray-100">
                <div>
                  <span className="block text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">start from</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-gray-900">
                      {formatPrice(currentProduct.price)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(currentProduct.price * 1.15)}
                    </span>
                    <span className="bg-red-50 text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full">-15%</span>
                  </div>
                </div>
                <a href="#" className="text-xs text-gray-500 font-black underline hover:text-ks-dark transition-colors">Size Chart</a>
              </div>

              <div className="space-y-6">
                {/* Size Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-sm">Pilih Ukuran</h3>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                    {sizes.map((s) => (
                      <label key={s.name} className="relative cursor-pointer">
                        <input 
                          type="radio" 
                          name="product_id" 
                          value={s.name}
                          checked={selectedSize === s.name}
                          onChange={() => setSelectedSize(s.name)}
                          className="peer sr-only" 
                        />
                        <div className={`h-11 border rounded-xl flex flex-col items-center justify-center transition-all ${selectedSize === s.name ? 'bg-ks-dark border-ks-dark text-white' : 'border-gray-200 text-gray-900 hover:border-gray-300'}`}>
                          <span className="text-xs font-bold">{s.name}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Accordion Sections */}
                <div className="space-y-3 pt-2">
                  <div className="border-b border-gray-100 pb-3">
                    <button type="button" onClick={() => setIsAccordion1Open(!isAccordion1Open)} className="flex justify-between items-center w-full text-left font-bold text-xs text-gray-800 py-1">
                      <span>Please Make Sure The Size Fits You.</span>
                      <span className="text-gray-400 text-lg font-normal">{isAccordion1Open ? '-' : '+'}</span>
                    </button>
                    {isAccordion1Open && (
                      <div className="text-[11px] text-gray-500 leading-relaxed mt-2">
                        Harap pastikan ukuran kaki Anda sudah sesuai dengan panduan ukuran kami (Size Guide) sebelum melakukan pembelian. Kami tidak menerima penukaran size setelah transaksi berhasil.
                      </div>
                    )}
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <button type="button" onClick={() => setIsAccordion2Open(!isAccordion2Open)} className="flex justify-between items-center w-full text-left font-bold text-xs text-gray-800 py-1">
                      <span>Authentic. Guaranteed.</span>
                      <span className="text-gray-400 text-lg font-normal">{isAccordion2Open ? '-' : '+'}</span>
                    </button>
                    {isAccordion2Open && (
                      <div className="text-[11px] text-gray-500 leading-relaxed mt-2">
                        We thoroughly check every purchase you make and applies our company's guarantee to the product's legitimacy. The guarantee is valid for 2 days after receiving the product from the delivery service.
                      </div>
                    )}
                  </div>
                </div>

                {/* BUY Button */}
                <div className="pt-4">
                  <button type="button" className="w-full text-white py-4 bg-black hover:bg-neutral-800 rounded-xl font-black text-xs transition-all shadow-md active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-2">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-50/50 border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-sm font-black tracking-widest uppercase text-gray-900">Ulasan Pelanggan</h2>
              <p className="text-xs text-gray-500 mt-1">Apa kata mereka yang telah membeli produk ini</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-400 font-bold">100% dari pembeli menyukai produk ini</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Rating Summary */}
            <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-8 space-y-6">
              <div className="text-center">
                <div className="text-5xl font-black text-gray-900 leading-none mb-2">4.8</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className={`w-5 h-5 ${s <= 4 ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Berdasarkan 238 ulasan</p>
              </div>

              <div className="pt-4 text-center">
                <button type="button" onClick={() => setIsReviewFormOpen(!isReviewFormOpen)} className="inline-flex items-center justify-center text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors w-full active:scale-[0.98] bg-black hover:bg-neutral-800">
                  Tulis Ulasan Baru
                </button>
              </div>
            </div>

            {/* Reviews List & Form */}
            <div className="lg:col-span-8 space-y-6">
              {isReviewFormOpen && (
                <form onSubmit={handleReviewSubmit} className="bg-white border border-gray-100 rounded-3xl p-8 space-y-6 transition-all duration-300">
                  <h3 className="font-black text-gray-900 text-sm uppercase tracking-wider">Tulis Ulasan Anda</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Rating Anda</label>
                      <div className="flex gap-1.5">
                        {[1,2,3,4,5].map(r => (
                          <button key={r} type="button" onClick={() => setFormRating(r)} className={`${r <= formRating ? 'text-amber-400' : 'text-gray-200'} hover:text-amber-400 transition-colors`}>
                            <svg className="w-7 h-7 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Nama Lengkap</label>
                        <input type="text" required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-ks-dark" placeholder="Masukkan nama Anda" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Komentar / Ulasan</label>
                      <textarea required rows="4" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-ks-dark" placeholder="Tuliskan pengalaman Anda menggunakan produk ini..."></textarea>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                      <button type="button" onClick={() => setIsReviewFormOpen(false)} className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-bold px-5 py-2.5 rounded-xl transition-colors">Batal</button>
                      <button type="submit" className="text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors bg-black hover:bg-neutral-800">Kirim Ulasan</button>
                    </div>
                  </div>
                </form>
              )}

              <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 space-y-4 hover:shadow-sm transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700 text-sm uppercase">DI</div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-black text-gray-900 text-xs">Dimas R.</h4>
                      </div>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">2 hari yang lalu | Varian: EU 42</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">Sepatunya 100% original, pengiriman super cepat dan packing aman banget. Sangat direkomendasikan!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
