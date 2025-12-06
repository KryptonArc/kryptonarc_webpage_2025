'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 px-6 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🚀 World&apos;s First Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Battery-less
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                Smart Padlock
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Modular • OpenSource • 3D Printable • Sustainable
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The world&apos;s first battery-less smart padlock that combines cutting-edge technology 
              with environmental consciousness. No batteries, no maintenance, just pure innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#features" 
                className="group bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-primary text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl text-center"
              >
                Explore Features
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="https://www.youtube.com/watch?v=OEKdXPiyxxU"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-300 dark:border-gray-600 hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Demo
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Battery-free</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lifespan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">OSS</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Product Image */}
            <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800">
                <Image
                  src="https://i.kickstarter.com/assets/042/159/257/ddf0dd333ef1a5059318dec02fe5df12_original.JPG?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&v=1693660732&width=1552"
                  alt="KryptonArc Battery-less Smart Padlock"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">🔋 No Battery</span>
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">🔧 Modular</span>
                <span className="bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">🌐 Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
