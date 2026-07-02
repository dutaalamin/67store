import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full bg-white min-h-[75vh] flex items-center justify-center py-6 md:py-12 px-4 sm:px-8">
      <div className="max-w-[1050px] w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-24">
        
        {/* Left side graphic */}
        <div className="flex flex-col items-center w-full md:w-[45%] text-center order-1 mt-2 md:mt-0">
          <img src="https://illustrations.popsy.co/amber/freelancer.svg" alt="Setup" className="w-full max-w-[180px] md:max-w-[360px] mx-auto mb-3 md:mb-10" />
          <h2 className="text-[15px] md:text-[18px] font-bold text-gray-900 mb-1 md:mb-2">What are you waiting for?</h2>
          <p className="text-[11.5px] md:text-[13px] text-gray-500 mb-2 md:mb-0">Immerse yourself in the latest trend in fashion</p>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-[45%] max-w-[360px] mx-auto md:mx-0 order-2">
          <div className="mb-8">
            <h2 className="text-[22px] font-bold text-gray-900 mb-1.5">Login</h2>
            <p className="text-[12px] text-gray-500">Don't have an account? <Link to="/register" className="text-emerald-600 font-semibold hover:underline">Sign up here</Link></p>
          </div>

          <form className="space-y-4">
            {/* Email Address */}
            <div>
              <input 
                id="email" 
                type="email" 
                required 
                placeholder="Email Address"
                className="w-full h-11 px-4 border border-gray-200 rounded-md text-[13px] text-gray-800 placeholder-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" 
              />
            </div>

            {/* Password */}
            <div>
              <input 
                id="password" 
                type="password" 
                required 
                placeholder="Password"
                className="w-full h-11 px-4 border border-gray-200 rounded-md text-[13px] text-gray-800 placeholder-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" 
              />
            </div>

            {/* Log In Button */}
            <div className="pt-2">
              <button type="submit" className="w-full h-11 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-bold text-[13px] transition-all flex items-center justify-center">
                Login
              </button>
            </div>
            
            {/* Forgot Password */}
            <div className="text-center pt-3">
              <a href="#" className="text-[12px] text-emerald-600 font-semibold hover:underline transition-colors">
                Forgot password?
              </a>
            </div>
          </form>

          <div className="mt-8">
            <p className="text-center text-[11px] text-gray-500 mb-4">Login instantly using your social media</p>
            <div className="flex items-center gap-3">
              <button type="button" className="flex-1 h-11 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-[#1877F2] font-bold text-lg" style={{ fontFamily: 'serif' }}>f</span>
              </button>
              <button type="button" className="flex-1 h-11 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
