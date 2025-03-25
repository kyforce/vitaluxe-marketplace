
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, TrendingUp, Leaf, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 3));
  
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Produits Populaires</h2>
            <p className="text-gray-600">
              Découvrez nos compléments alimentaires les plus appréciés
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-10 reveal">
            <Link to="/products" className="btn-primary inline-flex items-center justify-center">
              <span>Voir tous les produits</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Pourquoi Choisir VitaNature ?</h2>
            <p className="text-gray-600">
              Nous nous engageons à vous offrir des produits naturels de la plus haute qualité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 mb-4 bg-vitaGreen/10 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-vitaGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ingrédients 100% Naturels</h3>
              <p className="text-gray-600">
                Tous nos produits sont fabriqués à partir d'ingrédients naturels de haute qualité sans additifs artificiels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 mb-4 bg-vitaYellow/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-vitaYellow" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité Garantie</h3>
              <p className="text-gray-600">
                Nos produits sont testés rigoureusement pour garantir leur pureté, leur puissance et leur efficacité.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 mb-4 bg-vitaGreen/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-vitaGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Résultats Prouvés</h3>
              <p className="text-gray-600">
                Des milliers de clients satisfaits témoignent de l'efficacité de nos compléments alimentaires.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ce que nos clients disent</h2>
            <p className="text-gray-600">
              Des témoignages de personnes qui ont amélioré leur bien-être grâce à nos produits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-vitaYellow text-vitaYellow" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Les produits VitaNature ont vraiment fait une différence dans mon quotidien. Je me sens plus énergique et en meilleure santé."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-gray-600">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Client {i}</h4>
                    <p className="text-sm text-gray-500">Client fidèle</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vitaGreen-light/50 to-vitaYellow-light/50">
        <div className="container mx-auto px-4 md:px-6 text-center reveal">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Prêt à améliorer votre bien-être ?</h2>
            <p className="text-gray-600 mb-8">
              Découvrez la gamme complète de produits VitaNature et commencez votre parcours vers une meilleure santé dès aujourd'hui.
            </p>
            <Link to="/products" className="btn-primary inline-flex items-center justify-center">
              <span>Découvrir les produits</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
