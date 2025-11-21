import React from 'react';

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-center px-4">
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">No products found</h3>
      <p className="text-slate-500 max-w-md mb-8">
        We couldn't find any items matching your current search or filters. 
        Try adjusting your criteria.
      </p>
      <button 
        onClick={onReset}
        className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:transform active:scale-95"
      >
        Clear all filters
      </button>
    </div>
  );
};
