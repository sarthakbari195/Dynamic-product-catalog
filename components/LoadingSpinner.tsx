import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full animate-fade-in">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 border-dashed rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-600 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-slate-500 font-medium animate-pulse">Loading catalog...</p>
    </div>
  );
};
