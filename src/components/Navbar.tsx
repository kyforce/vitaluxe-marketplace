
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-vitaGreen rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vitaGreen to-vitaYellow">
              VitaNature
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={cn(
              "text-sm font-medium transition-colors hover:text-vitaGreen",
              location.pathname === "/" ? "text-vitaGreen" : "text-gray-700"
            )}>
              Accueil
            </Link>
            <Link to="/products" className={cn(
              "text-sm font-medium transition-colors hover:text-vitaGreen",
              location.pathname === "/products" ? "text-vitaGreen" : "text-gray-700"
            )}>
              Produits
            </Link>
            <Link to="/about" className={cn(
              "text-sm font-medium transition-colors hover:text-vitaGreen",
              location.pathname === "/about" ? "text-vitaGreen" : "text-gray-700"
            )}>
              À propos
            </Link>
            <Link to="/contact" className={cn(
              "text-sm font-medium transition-colors hover:text-vitaGreen",
              location.pathname === "/contact" ? "text-vitaGreen" : "text-gray-700"
            )}>
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {isAdmin && (
              <Link to="/admin" className={cn(
                "hidden md:flex text-sm font-medium transition-colors hover:text-vitaGreen",
                location.pathname === "/admin" ? "text-vitaGreen" : "text-gray-700"
              )}>
                Admin
              </Link>
            )}
            
            {isAuthenticated ? (
              <button onClick={logout} className="hidden md:flex items-center text-sm font-medium text-gray-700 hover:text-vitaGreen">
                <LogOut className="w-4 h-4 mr-1" />
                <span>Déconnexion</span>
              </button>
            ) : (
              <Link to="/login" className="hidden md:flex items-center text-sm font-medium text-gray-700 hover:text-vitaGreen">
                <User className="w-4 h-4 mr-1" />
                <span>Connexion</span>
              </Link>
            )}
            
            <Link to="/cart" className="relative">
              <ShoppingCart className={cn(
                "w-5 h-5 transition-colors",
                isScrolled ? "text-gray-700 hover:text-vitaGreen" : "text-gray-800 hover:text-vitaGreen"
              )} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-vitaYellow text-xs font-medium text-gray-800 w-5 h-5 flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            <button onClick={toggleMobileMenu} className="md:hidden">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block py-2 text-gray-700 font-medium">
              Accueil
            </Link>
            <Link to="/products" className="block py-2 text-gray-700 font-medium">
              Produits
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 font-medium">
              À propos
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 font-medium">
              Contact
            </Link>
            {isAdmin && (
              <Link to="/admin" className="block py-2 text-gray-700 font-medium">
                Admin
              </Link>
            )}
            {isAuthenticated ? (
              <button onClick={logout} className="flex items-center py-2 text-gray-700 font-medium">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Déconnexion</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center py-2 text-gray-700 font-medium">
                <User className="w-4 h-4 mr-2" />
                <span>Connexion</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
