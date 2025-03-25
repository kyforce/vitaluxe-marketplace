
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  useEffect(() => {
    let result = products;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);
  
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-vitaGreen-light/30 to-vitaYellow-light/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Nos Produits</h1>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Découvrez notre gamme complète de compléments alimentaires naturels pour améliorer votre bien-être
          </p>
        </div>
      </div>
      
      {/* Filters Section */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-vitaGreen focus:border-vitaGreen"
              placeholder="Rechercher des produits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 text-base border border-gray-200 rounded-md focus:ring-vitaGreen focus:border-vitaGreen appearance-none"
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">Toutes les catégories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Clear Filters */}
          {(searchTerm || selectedCategory) && (
            <button
              onClick={handleClearFilters}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors md:flex-shrink-0"
            >
              <X className="h-4 w-4 mr-2" />
              Effacer les filtres
            </button>
          )}
        </div>
        
        {/* Active Filters */}
        {(searchTerm || selectedCategory) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {searchTerm && (
              <div className="bg-vitaGreen/10 text-vitaGreen px-3 py-1 rounded-full text-sm flex items-center">
                <span>Recherche: {searchTerm}</span>
                <button 
                  className="ml-2"
                  onClick={() => setSearchTerm('')}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            
            {selectedCategory && (
              <div className="bg-vitaYellow/10 text-vitaYellow-dark px-3 py-1 rounded-full text-sm flex items-center">
                <span>Catégorie: {selectedCategory}</span>
                <button 
                  className="ml-2"
                  onClick={() => setSelectedCategory(null)}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-600">
              Essayez de modifier vos critères de recherche ou de filtrage
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
