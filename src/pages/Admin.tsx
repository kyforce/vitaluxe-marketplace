
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Edit, Save, X, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import products, { Product } from '@/data/products';

const Admin = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [productPrices, setProductPrices] = useState<{ [key: number]: number }>({});
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newPrice, setNewPrice] = useState<string>('');
  
  useEffect(() => {
    // Initialize product prices
    const prices: { [key: number]: number } = {};
    products.forEach(product => {
      prices[product.id] = product.price;
    });
    setProductPrices(prices);
  }, []);
  
  useEffect(() => {
    // Si l'utilisateur n'est pas authentifié ou n'est pas administrateur, rediriger vers la page de connexion
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);
  
  // Protection additionnelle: si l'utilisateur n'est pas authentifié ou n'est pas administrateur, rediriger immédiatement
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />;
  }
  
  const handleEditPrice = (id: number) => {
    setEditingId(id);
    setNewPrice(productPrices[id].toString());
  };
  
  const handleSavePrice = (id: number, product: Product) => {
    const price = parseInt(newPrice);
    
    if (isNaN(price) || price <= 0) {
      toast.error('Veuillez entrer un prix valide');
      return;
    }
    
    setProductPrices({ ...productPrices, [id]: price });
    setEditingId(null);
    toast.success(`Prix mis à jour pour ${product.name}`);
  };
  
  const handleCancelEdit = () => {
    setEditingId(null);
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
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Panneau d'administration</h1>
                <p className="text-gray-600">Gérez les prix des produits</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Produit</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Catégorie</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Prix</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-3 bg-gray-50 rounded-md overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        {editingId === product.id ? (
                          <input
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            className="w-24 px-2 py-1 text-right border border-gray-300 rounded-md focus:ring-vitaGreen focus:border-vitaGreen"
                            min="1"
                          />
                        ) : (
                          <span className="font-medium">{formatPrice(productPrices[product.id] || product.price)}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right">
                        {editingId === product.id ? (
                          <div className="flex space-x-2 justify-end">
                            <button
                              onClick={() => handleSavePrice(product.id, product)}
                              className="text-white bg-vitaGreen hover:bg-vitaGreen-dark p-1 rounded"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="text-white bg-gray-400 hover:bg-gray-500 p-1 rounded"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEditPrice(product.id)}
                            className="text-gray-500 hover:text-vitaGreen"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
