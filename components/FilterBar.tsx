import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';

interface FilterBarProps {
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
}) => {
  return (
    <div className="sticky top-4 z-30 w-full max-w-7xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200"
              placeholder="Search products..."
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="h-5 w-5 text-slate-400 hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            <div className="flex space-x-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`
                    whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                    ${selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 transform scale-105'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
