import React, { useState, useEffect, useMemo } from 'react';
import { Product, Category } from './types';
import { SAMPLE_PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { FilterBar } from './components/FilterBar';
import { LoadingSpinner } from './components/LoadingSpinner';
import { EmptyState } from './components/EmptyState';

const App: React.FC = () => {
  // State Management
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(Category.All);

  // Simulate Data Fetching
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      // Simulate network delay (1.5s)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProducts(SAMPLE_PRODUCTS);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === Category.All || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // Handlers
  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory(Category.All);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Lumina<span className="text-indigo-600">Catalog</span>
              </h1>
            </div>
            <div className="text-sm text-slate-500 hidden sm:block">
              {isLoading ? 'Updating...' : `${filteredProducts.length} items`}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow bg-gray-50 relative">
        {/* Hero / Decoration Background */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />

        <div className="pt-8 pb-16">
          
          {/* Filter Controls */}
          <FilterBar 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onSearchChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
          />

          {/* Content Render Logic */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <LoadingSpinner />
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <EmptyState onReset={handleReset} />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Lumina Catalog. Built with React & Tailwind.</p>
        </div>
      </footer>

      {/* Quick Keyframe Styles Injection for animations not in default Tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default App;
