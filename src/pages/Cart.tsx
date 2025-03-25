
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { 
    items, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    getTotalPrice
  } = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Votre panier est vide</h1>
          <p className="text-gray-600 mb-6">
            Vous n'avez pas encore ajouté de produits à votre panier.
          </p>
          <Link to="/products" className="btn-primary inline-flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            <span>Commencer vos achats</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Votre Panier</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6 space-y-4">
                {/* Items List */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-100">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-50 rounded-md flex-shrink-0 overflow-hidden mr-4 mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-grow mr-4">
                        <Link to={`/products/${item.id}`} className="text-gray-900 font-medium hover:text-vitaGreen">
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500">
                          Prix unitaire: {formatPrice(item.price)}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mr-4 mt-2 sm:mt-0">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right flex-shrink-0 mt-2 sm:mt-0">
                        <p className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 hover:text-red-700 flex items-center mt-1"
                        >
                          <Trash className="w-4 h-4 mr-1" />
                          <span>Supprimer</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Cart Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                  <Link to="/products" className="inline-flex items-center text-vitaGreen hover:underline">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    <span>Continuer vos achats</span>
                  </Link>
                  
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700"
                  >
                    Vider le panier
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">Récapitulatif</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span className="font-medium">À calculer</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 mt-3"></div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-lg">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
                
                <button className="w-full btn-primary">
                  Passer à la caisse
                </button>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  <p>Livraison gratuite à partir de 50,000 F</p>
                  <p className="mt-1">Paiement sécurisé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
