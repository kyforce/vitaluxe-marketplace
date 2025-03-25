
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vitaGreen-light/40 via-white to-vitaYellow-light/30 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-[5%] w-64 h-64 bg-vitaGreen/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-vitaYellow/10 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div>
              <div className="inline-block bg-vitaGreen/10 px-3 py-1 rounded-full text-sm font-medium text-vitaGreen mb-4">
                Compléments naturels
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Prenez soin de votre santé avec <span className="text-vitaGreen">VitaNature</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 max-w-lg">
              Découvrez notre gamme de compléments alimentaires naturels, conçus pour vous aider à atteindre votre bien-être optimal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center">
                <span>Voir les produits</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                En savoir plus
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">100%</span>
                <span className="text-sm text-gray-600">Naturel</span>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">9+</span>
                <span className="text-sm text-gray-600">Produits</span>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">5★</span>
                <span className="text-sm text-gray-600">Évaluations</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-vitaGreen/10 rounded-3xl transform rotate-3 scale-105"></div>
              
              <div className="glass-card p-2 rounded-3xl relative z-10">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/60489334-b94c-43db-a4cc-7963a44f1077.png" 
                      alt="Resveratrol" 
                      className="w-full h-full object-cover transform transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/eed988a9-2d4f-4e42-97f5-5820e78a6095.png" 
                      alt="Liver Care" 
                      className="w-full h-full object-cover transform transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/5084105f-716a-47cb-9948-36bda36d8f82.png" 
                      alt="Hair Skin Nails" 
                      className="w-full h-full object-cover transform transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src="/lovable-uploads/2b303a4a-f3f5-4838-a53f-1b06dff84d62.png" 
                      alt="Super Focus" 
                      className="w-full h-full object-cover transform transition-transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
