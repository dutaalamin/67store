import React from 'react';
import { Link } from 'react-router-dom';

const PromoBanners = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 pb-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col justify-center min-h-[240px] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
          <div className="z-10 max-w-[55%]">
            <p className="text-ks-dark text-[10px] font-black tracking-[0.2em] uppercase mb-2">Limited Drop</p>
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-black leading-[1.1] mb-5">
              ADIDAS SAMBA<br/>OG WHITE
            </h3>
            <Link to="/game/adidas-samba-og-cloud-white" className="inline-flex items-center gap-2 bg-ks-dark text-white text-xs font-bold px-6 py-3 rounded-full w-fit hover:bg-ks-orange transition-all active:scale-95">
              Shop Now &rarr;
            </Link>
          </div>
          {/* Floating Transparent Image */}
          <img 
            src="https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzU3Mjg3LzlhZTVjNGViZjUxM2U3MjQ1ZGU3ZDI4NjQ3ODExYTdjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTQwMH19fQ=="
            className="absolute -right-8 sm:-right-4 top-1/2 -translate-y-1/2 w-56 sm:w-72 object-contain drop-shadow-2xl group-hover:scale-110 transition-all duration-500 ease-out"
            alt="Adidas Samba OG" 
          />
        </div>
        
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 flex flex-col justify-center min-h-[240px] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
          <div className="z-10 max-w-[55%]">
            <p className="text-gray-400 text-[10px] font-black tracking-[0.2em] uppercase mb-2">Flash Sale</p>
            <h3 className="text-gray-900 text-2xl sm:text-3xl font-black leading-[1.1] mb-5">
              UP TO<br/>30% OFF
            </h3>
            <Link to="/category/sale" className="inline-flex items-center gap-2 bg-ks-dark text-white text-xs font-bold px-6 py-3 rounded-full w-fit hover:bg-ks-orange transition-all active:scale-95">
              Lihat Promo &rarr;
            </Link>
          </div>
          {/* Floating Transparent Image */}
          <img 
            src="https://cdn-old.kickavenue.com/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzMxNjQ3L2UxMTk3ZGE4YTlkODQ2ZmVmOWEwNjYzMGIzMTBkZTc2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTQwMH19fQ=="
            className="absolute -right-8 sm:-right-4 top-1/2 -translate-y-1/2 w-56 sm:w-72 object-contain drop-shadow-2xl group-hover:scale-110 transition-all duration-500 ease-out"
            alt="Promo Mockup" 
          />
        </div>

      </div>
    </div>
  );
};

export default PromoBanners;
