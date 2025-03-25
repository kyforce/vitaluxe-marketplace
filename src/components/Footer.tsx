
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-vitaGreen rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vitaGreen to-vitaYellow">
                VitaNature
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Des compléments alimentaires naturels de qualité pour votre bien-être quotidien
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-vitaGreen transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vitaGreen transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vitaGreen transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Gestion%20du%20poids" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  Gestion du poids
                </Link>
              </li>
              <li>
                <Link to="/products?category=Antioxydant" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  Antioxydants
                </Link>
              </li>
              <li>
                <Link to="/products?category=Détoxification" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  Détoxification
                </Link>
              </li>
              <li>
                <Link to="/products?category=Santé%20cognitive" className="text-sm text-gray-600 hover:text-vitaGreen transition-colors">
                  Santé cognitive
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-vitaGreen mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  info@vitanature.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-vitaGreen mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  +123 456 789
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} VitaNature. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-vitaGreen transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-vitaGreen transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
