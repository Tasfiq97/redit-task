import React from 'react';

const CardLoading = () => {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center text-white hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-md min-h-[400px] flex flex-col justify-between">
      <div className="flex animate-pulse space-x-4">
        <div className="size-10 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 rounded bg-gray-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
            <div class="h-2 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
