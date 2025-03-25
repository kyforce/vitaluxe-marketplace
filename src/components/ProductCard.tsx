
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  product: Product;
  featured?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <div 
        className={cn(
          "group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg",
          featured ? "md:col-span-2" : ""
        )}
      >
        {/* Badge de promotion si prix réduit */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 z-10 bg-vitaYellow text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
            Promo
          </div>
        )}
        
        {/* Bouton favoris */}
        <button 
          className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        
        {/* Image container */}
        <div 
          className={cn(
            "relative overflow-hidden",
            featured ? "aspect-[16/9] md:aspect-[2/1]" : "aspect-square"
          )}
          style={{ backgroundColor: `${product.color}15` }}
        >
          <img
            src={product.image}
            alt={product.name}
            className={cn(
              "object-contain w-full h-full transition-transform duration-300 group-hover:scale-105",
              featured ? "p-8" : "p-4"
            )}
          />
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-vitaGreen transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              {product.originalPrice && (
                <p className="text-xs text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
              <p className="text-sm font-semibold text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
          
          {featured && (
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          )}
          
          <button
            onClick={handleAddToCart}
            className="w-full mt-2 bg-vitaGreen text-white rounded-md py-2 text-sm font-medium transition-colors hover:bg-vitaGreen-dark flex items-center justify-center"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            <span>Ajouter au panier</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
