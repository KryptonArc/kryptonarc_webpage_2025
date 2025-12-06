'use client';

import { useState } from 'react';

const features = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Battery-less Design",
    description: "Revolutionary power system that eliminates the need for batteries, making it truly maintenance-free and environmentally friendly.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Modular Architecture",
    description: "Fully modular design allowing you to customize and upgrade components based on your specific security needs.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "OpenSource",
    description: "Complete transparency with open-source hardware and software, empowering the community to innovate and improve.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "3D Printable",
    description: "DIY-friendly with 3D printable components, giving you the freedom to create custom parts and repairs at home.",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Smart Technology",
    description: "Advanced smart features including remote access, activity logs, and multiple unlock methods for maximum convenience.",
    color: "from-indigo-500 to-blue-600"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Customizable",
    description: "Fully customizable design lets you tailor the padlock's appearance and functionality to match your unique requirements.",
    color: "from-teal-500 to-green-600"
  }
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section id="features" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Revolutionary Technology</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">KryptonArc</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the future of security with our innovative battery-less smart padlock technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                See It In <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">Action</span>
              </h2>
              <p className="text-xl text-gray-300">
                Watch our demonstration videos to understand how it works
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Demo Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <a 
                    href="https://www.youtube.com/watch?v=OEKdXPiyxxU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <img 
                      src="https://i.ytimg.com/vi/OEKdXPiyxxU/hqdefault.jpg"
                      alt="KryptonArc Demo"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-6 bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Product Demo</h3>
                  <p className="text-gray-400">Battery-less Smart Padlock in action</p>
                </div>
              </div>

              {/* Assembly Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <a 
                    href="https://www.youtube.com/watch?v=Xxooo4-YHvQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <img 
                      src="https://i.ytimg.com/vi/Xxooo4-YHvQ/hqdefault.jpg"
                      alt="Assembly Guide"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-6 bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Assembly Guide</h3>
                  <p className="text-gray-400">Step-by-step assembly process (2x Speed)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
