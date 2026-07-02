import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
            <h2 className="text-[22px] font-bold text-gray-900 mb-1.5">Register</h2>
            <p className="text-[12px] text-gray-500">Already have an account? <Link to="/login" className="text-emerald-600 font-semibold hover:underline">Login here</Link></p>
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

            {/* Phone Number */}
            <div className="flex gap-2">
              <div className="relative w-[100px]">
                <select className="w-full h-11 pl-4 pr-8 border border-gray-200 rounded-md text-[13px] text-gray-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none appearance-none bg-transparent cursor-pointer transition-all">
                  <option>+62</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              <div className="flex-1">
                <input 
                  id="phone" 
                  type="tel" 
                  required
                  placeholder="Phone Number"
                  className="w-full h-11 px-4 border border-gray-200 rounded-md text-[13px] text-gray-800 placeholder-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" 
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <input 
                id="password" 
                type="password" 
                required 
                placeholder="Password"
                className="w-full h-11 pl-4 pr-10 border border-gray-200 rounded-md text-[13px] text-gray-800 placeholder-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" 
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input 
                id="password_confirmation" 
                type="password" 
                required 
                placeholder="Confirm Password"
                className="w-full h-11 pl-4 pr-10 border border-gray-200 rounded-md text-[13px] text-gray-800 placeholder-gray-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" 
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
              </div>
            </div>

            <p className="text-[11px] text-gray-900 pt-3 leading-relaxed">
              By registering, I agree to 67Sports <a href="#" className="text-emerald-600 font-semibold hover:underline">Terms and Conditions</a> and <a href="#" className="text-emerald-600 font-semibold hover:underline">Privacy Policy</a>
            </p>

            {/* Register Button */}
            <div className="pt-2">
              <button type="submit" className="w-full h-11 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-bold text-[13px] transition-all flex items-center justify-center">
                Register
              </button>
            </div>

            <p className="text-center text-[10.5px] text-gray-500 pt-3">
              Your data will be protected and will not be shared
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
