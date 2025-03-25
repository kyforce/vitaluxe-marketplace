
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronRight, Plus, Minus, Check, Info, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products, { Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = products.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category or random if none)
        const related = products
          .filter(p => p.id !== productId && p.category === foundProduct.category)
          .slice(0, 3);
          
        if (related.length < 3) {
          const otherProducts = products
            .filter(p => p.id !== productId && p.category !== foundProduct.category)
            .slice(0, 3 - related.length);
            
          setRelatedProducts([...related, ...otherProducts]);
        } else {
          setRelatedProducts(related);
        }
      } else {
        // Product not found
        toast.error("Produit non trouvé");
      }
    }
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        });
      }
    }
  };
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Chargement du produit...</h1>
          <p className="text-gray-600 mt-2">Veuillez patienter</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-vitaGreen">Accueil</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-vitaGreen">Produits</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center rounded-xl p-8" style={{ backgroundColor: `${product.color}15` }}>
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-96 object-contain"
            />
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-vitaGreen/10 px-3 py-1 rounded-full text-sm font-medium text-vitaGreen mb-2">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            </div>
            
            <div className="flex items-baseline">
              {product.originalPrice && (
                <p className="text-gray-500 line-through mr-2">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
              <p className="text-2xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>
            
            <p className="text-gray-700">{product.description}</p>
            
            <div className="space-y-1">
              <h3 className="font-medium text-gray-900">Avantages:</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-vitaGreen mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <div className="flex items-center border border-gray-200 rounded-md">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3 py-2 text-gray-500 hover:text-gray-700"
                  disabled={quantity === 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-12 text-center border-0 focus:ring-0"
                  min="1"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 py-2 text-gray-500 hover:text-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-grow btn-primary inline-flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span>Ajouter au panier</span>
              </button>
              
              <button className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
            </div>
            
            {/* Product Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-md flex items-start">
                <ShieldCheck className="w-5 h-5 text-vitaGreen mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">Qualité garantie</h4>
                  <p className="text-gray-500 text-sm">Produits testés et certifiés</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md flex items-start">
                <Info className="w-5 h-5 text-vitaYellow mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">Conseils personnalisés</h4>
                  <p className="text-gray-500 text-sm">Questions? Contactez-nous</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Produits similaires</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
