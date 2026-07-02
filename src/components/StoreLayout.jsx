import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, X, Camera, Video, MessageCircle } from 'lucide-react';

const StoreLayout = () => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const categories = ['Sneakers', 'Apparel', 'Luxury', 'Men', 'Women', 'Kids'];

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      {/* ===== TOP NAV ===== */}
      <header id="main-header" className="bg-white sticky top-0 z-50">
        {/* Main nav row */}
        <div className="w-full px-4 sm:px-8 md:px-12 flex items-center h-16 gap-6 md:gap-8 border-b border-gray-50">
          {/* Logo */}
          <Link to="/" className="shrink-0 mr-4 group">
            <span className="font-black text-2xl tracking-[0.08em] uppercase text-neutral-900 group-hover:text-black transition-all">
              67Sports
            </span>
          </Link>

          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Type any products here"
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ks-dark/20 focus:border-ks-dark transition-all"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-gray-500 hover:text-ks-dark rounded-full hover:bg-gray-100 transition-colors relative"
            >
              <Heart className="w-5 h-5" />
            </button>
            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-gray-500 hover:text-ks-dark rounded-full hover:bg-gray-100 transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 bg-ks-dark text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <div className="w-px h-5 bg-gray-200 mx-1"></div>

            <Link
              to="/login"
              className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-600 hover:text-black px-4 py-2 rounded-full hover:bg-gray-50 transition-all"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-[11px] font-black uppercase tracking-[0.15em] text-white bg-black hover:bg-neutral-800 px-5 py-2.5 rounded-full transition-all ml-1 active:scale-[0.97]"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Category nav */}
        <div className="bg-white border-b border-gray-100">
          <div className="w-full px-4 sm:px-8 md:px-12 flex items-center justify-start md:justify-center gap-8 md:gap-12 h-12 overflow-x-auto scrollbar-none">
            <Link
              to="/"
              className={`cat-link shrink-0 h-full flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-200 ${
                location.pathname === '/' ? 'text-ks-orange font-extrabold' : 'text-black hover:text-ks-orange'
              }`}
            >
              Sale
            </Link>
            {categories.map((cat) => {
              const lowCat = cat.toLowerCase();
              const isActive = location.pathname.includes(`/category/${lowCat}`);
              return (
                <Link
                  key={cat}
                  to={`/category/${lowCat}`}
                  className={`cat-link shrink-0 h-full flex items-center text-[11px] uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-200 ${
                    isActive ? 'text-ks-orange font-extrabold' : 'text-black hover:text-ks-orange'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      {!location.pathname.includes('login') && !location.pathname.includes('register') && (
        <footer className="bg-[#121212] text-white mt-16 border-t border-neutral-800">
          <div className="w-full px-4 sm:px-8 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-start">
            {/* Column 1: Logo & Tagline */}
            <div>
              <span className="font-black text-xl tracking-tight text-white block">67Sports</span>
              <div className="mt-4 space-y-1.5">
                <p className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase leading-none">
                  200% Money Back Guarantee
                </p>
                <p className="text-[10px] font-medium text-neutral-400 leading-normal">Authentic, Guaranteed.</p>
              </div>
            </div>

            {/* Column 2: Information */}
            <div className="space-y-4">
              <a href="#" className="block text-[10px] font-bold tracking-widest uppercase text-neutral-300 hover:text-ks-orange transition-colors">FAQ</a>
              <a href="#" className="block text-[10px] font-bold tracking-widest uppercase text-neutral-300 hover:text-ks-orange transition-colors">Terms and Conditions</a>
              <a href="#" className="block text-[10px] font-bold tracking-widest uppercase text-neutral-300 hover:text-ks-orange transition-colors">Buying & Selling Guide</a>
              <a href="#" className="block text-[10px] font-bold tracking-widest uppercase text-neutral-300 hover:text-ks-orange transition-colors">67SportsNews</a>
            </div>

            {/* Column 3: Instagram Links */}
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white mb-5">Explore us more on Instagram!</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 hover:text-white transition-colors group">
                  <Camera className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  <span>67Sports</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 hover:text-white transition-colors group">
                  <Camera className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  <span>LuxSports</span>
                </a>
              </div>
            </div>

            {/* Column 4: Keep in touch with us! */}
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white mb-5">Keep in touch with us!</h4>
              <div className="flex flex-wrap gap-2.5">
                <a href="#" className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                  <Camera className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                  <Video className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 5: Newsletter */}
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-white mb-5">Newsletter</h4>
              <p className="text-[10px] text-neutral-400 leading-relaxed mb-4">
                Be the first to hear about new sneaker releases, premium collections, and exclusive drops.
              </p>
              <div className="relative w-full max-w-[280px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#1c1c1c] border border-neutral-800 rounded-full pl-4 pr-12 py-2.5 text-[10px] text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-ks-orange hover:text-white rounded-full p-1.5 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-900 py-6 bg-[#0a0a0a]">
            <div className="w-full px-4 sm:px-8 md:px-12 flex items-center justify-center">
              <p className="text-[10px] text-neutral-500 font-bold text-center">&copy; {new Date().getFullYear()} 67Sports. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}

      {/* ===== WISHLIST FLYOUT DRAWER ===== */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ease-in-out ${isWishlistOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsWishlistOpen(false)}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col p-6 transform transition-transform duration-300 ease-in-out ${isWishlistOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
            <h3 className="font-black text-base text-gray-900 uppercase tracking-wider">Wishlist Kamu</h3>
            <button onClick={() => setIsWishlistOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <Heart className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Belum ada item</h4>
            <p className="text-xs text-gray-500 max-w-[280px] leading-relaxed">Temukan sneaker impianmu dan klik tombol wishlist untuk menyimpannya di sini!</p>
          </div>
        </div>
      </div>

      {/* ===== CART FLYOUT DRAWER ===== */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ease-in-out ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col p-6 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
            <h3 className="font-black text-base text-gray-900 uppercase tracking-wider">Keranjang Belanja</h3>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Keranjang kamu kosong</h4>
            <p className="text-xs text-gray-500 max-w-[280px] leading-relaxed">Jelajahi koleksi kami dan tambahkan sepatu pilihanmu ke dalam keranjang!</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StoreLayout;
