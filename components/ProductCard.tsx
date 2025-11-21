import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, category, price, inStock, image, rating } = product;

  // Determine status styles based on stock availability
  const statusColor = inStock 
    ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
    : 'bg-rose-100 text-rose-800 border-rose-200';

  const statusLabel = inStock ? 'In Stock' : 'Out of Stock';

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${!inStock ? 'opacity-60 grayscale' : ''}`}
          loading="lazy"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-bold tracking-wide text-white bg-black/50 backdrop-blur-md rounded-full uppercase">
            {category}
          </span>
        </div>

        {/* Stock Overlay (if out of stock) */}
        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px]">
            <span className="px-4 py-2 bg-rose-600 text-white text-sm font-bold rounded-md shadow-lg transform -rotate-6">
              SOLD OUT
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
            {name}
          </h3>
          <span className="flex-shrink-0 font-bold text-lg text-slate-800">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center mb-3 space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-slate-400 ml-1">({Math.floor(Math.random() * 100) + 10})</span>
        </div>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColor}`}>
            {statusLabel}
          </span>
          
          <button 
            disabled={!inStock}
            className={`
              p-2 rounded-full transition-colors duration-200
              ${inStock 
                ? 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
