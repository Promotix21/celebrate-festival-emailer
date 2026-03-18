/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Users,
  ClipboardCheck,
  Wrench,
  Truck,
  FileSignature,
  PenTool,
  CheckCircle,
  Clock,
  Settings,
  Handshake,
  Cloud,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const steps = [
  {
    id: 6,
    title: "GRAND OPENING",
    subtitle: "YOU'RE READY TO SERVE",
    description: "Your kitchen is built, inspected, and ready. All that's left is welcoming your first customers. We'll be there if you need us after, too.",
    color: "bg-[#b91c22]",
    textColor: "text-white",
    icon: Users,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    slant: "left",
    iconColor: "text-[#b91c22]"
  },
  {
    id: 5,
    title: "FINAL INSPECTION",
    subtitle: "& COMPLIANCE",
    description: "We ensure everything meets code. Health department inspection, fire safety, ADA compliance — all checked before you open your doors.",
    color: "bg-[#1a365d]",
    textColor: "text-white",
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    slant: "right",
    iconColor: "text-[#1a365d]"
  },
  {
    id: 4,
    title: "INSTALLATION",
    subtitle: "& SETUP",
    description: "Professional installation and connections — gas, electric, plumbing, ventilation. Your kitchen is set up right the first time.",
    color: "bg-[#1a365d]",
    textColor: "text-white",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    slant: "left",
    iconColor: "text-[#1a365d]"
  },
  {
    id: 3,
    title: "EQUIPMENT DELIVERY",
    subtitle: "ON SCHEDULE",
    description: "Your equipment arrives on schedule — coordinated with your contractors and build timeline. No surprise delays, no storage headaches.",
    color: "bg-[#b91c22]",
    textColor: "text-white",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    slant: "right",
    iconColor: "text-[#b91c22]"
  },
  {
    id: 2,
    title: "PERMITS",
    subtitle: "& APPROVALS",
    description: "Navigate city and health department requirements with confidence. We guide you through the approvals process so nothing delays your timeline.",
    color: "bg-[#1a365d]",
    textColor: "text-white",
    icon: FileSignature,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    slant: "left",
    iconColor: "text-[#1a365d]"
  },
  {
    id: 1,
    title: "DESIGN",
    subtitle: "& PLANNING",
    description: "We help you design the optimal kitchen layout, plan workflow efficiency, and select the right equipment for your cuisine and capacity. No guesswork.",
    color: "bg-[#1a365d]",
    textColor: "text-white",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    slant: "right",
    iconColor: "text-[#1a365d]"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      {/* Main Container */}
      <div className="max-w-[900px] mx-auto bg-white shadow-2xl relative">
        
        {/* Header Section */}
        <div className="relative h-[400px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920" 
              alt="Restaurant Kitchen" 
              className="w-full h-full object-cover object-top opacity-90"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
          </div>

          {/* Header Content */}
          <div className="relative z-10 flex flex-col items-center pt-8 px-4 text-center">
            
            {/* Logo */}
            <div className="flex flex-col items-center justify-center bg-white rounded-[100%] border-[6px] border-[#1a365d] px-12 py-5 shadow-xl relative mb-8">
              <div className="absolute inset-1 rounded-[100%] border border-[#b91c22] opacity-20"></div>
              <div className="flex items-center gap-2 mb-1">
                <Cloud className="w-10 h-10 text-[#1a365d] fill-current" />
              </div>
              <h1 className="text-4xl font-black text-[#1a365d] tracking-tight">
                Celebrate Festival<span className="text-[#b91c22] text-xl align-top font-bold">.inc</span>
              </h1>
              <p className="text-sm font-bold tracking-[0.2em] text-gray-600 mt-1">
                RESTAURANT EQUIPMENT
              </p>
            </div>

            {/* Titles */}
            <h2 className="text-2xl font-bold text-gray-600 tracking-widest mb-1 uppercase">
              From design to
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-[#b91c22] tracking-tight mb-4 drop-shadow-sm uppercase">
              Grand Opening
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-1 w-8 md:w-12 bg-[#1a365d]"></div>
              <h3 className="text-lg md:text-xl font-bold text-[#1a365d] tracking-widest uppercase">
                We support every step
              </h3>
              <div className="h-1 w-8 md:w-12 bg-[#1a365d]"></div>
            </div>
          </div>
        </div>

        {/* Intro Copy Section */}
        <div className="px-8 md:px-16 py-10 text-center max-w-3xl mx-auto relative z-10 bg-white">
          <p className="text-xl md:text-2xl text-[#1a365d] font-medium mb-6 leading-relaxed">
            Opening a restaurant is one of the most exciting things you'll ever do — and one of the most complex.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            From planning your kitchen layout to passing your final health inspection, there are dozens of moving parts. Most equipment suppliers just ship you a box. <strong className="text-[#b91c22] font-bold">We do everything else too.</strong>
          </p>
          <div className="inline-block bg-gray-100 rounded-full px-6 py-2 border border-gray-200">
            <p className="text-sm font-bold text-[#1a365d] uppercase tracking-widest">
              Here's how we get you from blueprint to grand opening:
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative px-8 md:px-16 py-8">
          
          {/* Dotted Line */}
          <div className="absolute left-[4.5rem] md:left-[6.5rem] top-8 bottom-8 w-0.5 border-l-[3px] border-dashed border-gray-300 z-0"></div>

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeftSlant = step.slant === 'left';
              
              return (
                <div key={step.id} className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">
                  
                  {/* Left Pill */}
                  <div className="w-full md:w-[540px] flex items-center relative">
                    {/* Slanted Background */}
                    <div 
                      className={`absolute inset-0 left-10 rounded-r-2xl ${step.color} shadow-lg`}
                      style={{ 
                        transform: `skewX(${isLeftSlant ? '-6deg' : '6deg'})`, 
                        transformOrigin: 'bottom' 
                      }}
                    ></div>
                    
                    {/* Content (Unskewed) */}
                    <div className="relative z-10 flex items-center w-full py-5">
                      {/* Circle Icon */}
                      <div className="w-20 h-20 rounded-full bg-white border-[5px] border-gray-100 shadow-xl flex items-center justify-center shrink-0 relative z-20">
                        <Icon className={`w-10 h-10 ${step.iconColor}`} strokeWidth={2.5} />
                      </div>
                      
                      {/* Text */}
                      <div className={`ml-6 ${step.textColor} pr-10`}>
                        <h3 className="font-black text-2xl md:text-3xl leading-none tracking-wide mb-1">
                          {step.title}
                        </h3>
                        <p className="font-bold text-sm md:text-base tracking-widest opacity-90 mb-3 uppercase">
                          {step.subtitle}
                        </p>
                        <p className="text-sm opacity-90 leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="hidden md:block w-[260px] h-[180px] shrink-0 relative">
                    {/* Slanted Wrapper for Border & Shadow */}
                    <div 
                      className="absolute inset-0 bg-white p-2 shadow-xl rounded-xl"
                      style={{ 
                        transform: `skewX(${isLeftSlant ? '-6deg' : '6deg'})` 
                      }}
                    >
                      {/* Inner Image Container */}
                      <div className="w-full h-full overflow-hidden rounded-lg relative">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ 
                            transform: `skewX(${isLeftSlant ? '6deg' : '-6deg'}) scale(1.2)`,
                            transformOrigin: 'center'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-8 md:mx-16 my-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center shadow-lg border border-gray-200 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#1a365d] opacity-5 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#b91c22] opacity-5 rounded-tl-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] mb-4 tracking-tight">
              Ready to start planning your restaurant?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Talk to our team — no obligation, no pressure. Just expert advice to get your kitchen running smoothly.
            </p>
            <button className="bg-[#b91c22] hover:bg-red-800 text-white font-bold py-4 px-10 rounded-xl shadow-xl transform transition hover:-translate-y-1 text-lg tracking-wider uppercase">
              Schedule a Free Consultation
            </button>
            <p className="mt-6 text-gray-500 font-medium">
              or call us: <a href="tel:5555555555" className="text-[#1a365d] hover:underline font-bold text-lg">(555) 555-5555</a>
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="px-8 md:px-16 py-16 bg-white text-center border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#b91c22] text-7xl font-serif leading-none h-12 opacity-80">"</div>
            <p className="text-2xl md:text-3xl text-[#1a365d] font-medium italic mb-8 leading-relaxed">
              Celebrate Festival handled everything from design to our opening day. We couldn't have done it without them.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=150" alt="Restaurant Owner" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-gray-900 leading-tight">Sarah Jenkins</p>
                <p className="text-sm text-gray-500 font-medium">Restaurant Owner, Chicago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="px-8 md:px-16 pb-12 bg-white">
          <div className="bg-[#1a365d] text-white py-6 px-6 md:px-10 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-0 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#b91c22]" /> 
              <span className="font-bold text-lg tracking-wide">Quality Service</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#b91c22]" /> 
              <span className="font-bold text-lg tracking-wide">On Time Delivery</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-[#b91c22]" /> 
              <span className="font-bold text-lg tracking-wide">Expert Support</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-[#b91c22]" /> 
              <span className="font-bold text-lg tracking-wide">Complete Solutions</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
          <div className="max-w-4xl mx-auto px-8">
            <div className="flex justify-center items-center gap-2 mb-6 opacity-80">
              <Cloud className="w-6 h-6 text-white" />
              <span className="text-xl font-bold text-white tracking-wider">Celebrate Festival<span className="text-[#b91c22]">.inc</span></span>
            </div>
            <p className="mb-2 text-gray-300 font-medium tracking-wider uppercase text-xs">Restaurant Equipment</p>
            <p className="mb-8">123 Culinary Way, Suite 100, Food City, FC 12345 | www.celebratefestival.com</p>
            
            <div className="flex justify-center gap-6 mb-10">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#b91c22] hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#b91c22] hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#b91c22] hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-4 text-xs opacity-60">
              <p>&copy; {new Date().getFullYear()} Celebrate Festival Inc. All rights reserved.</p>
              <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
              <p>
                <a href="#" className="hover:text-white transition-colors">Unsubscribe</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-white transition-colors">View in browser</a>
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
