'use client';
import React, { useState } from 'react';
import { CardTrending } from './CardTrending';
import { TrendingContent } from './CardContent';

export const TrendingShow = () => {
  const [show, setShow] = useState(false);
  const displayedItems = show ? TrendingContent : TrendingContent.slice(0, 8);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {displayedItems.map((item) => (
          <CardTrending
            key={item.id}
            image={item.image}
            title={item.title}
            alias={item.alias}
            color={item.color}
            stars={item.stars}
          />
        ))}
      </div>

      <button
        onClick={() => setShow(!show)}
        className="mt-10 mb-10 px-6 py-3 text-lg font-semibold text-white bg-[#8BAC3E] rounded-full drop-shadow-xl hover:bg-lime-700 transition hidden md:flex">
        {show ? 'Less Receipt' : 'All Receipt'}
      </button>
    </div>
  );
};
