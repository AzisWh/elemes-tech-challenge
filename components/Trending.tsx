import React from 'react';
import { TrendingShow } from './utils/TrendingShow';

export const Trending = () => {
  return (
    <section className="px-6 lg:px-16 md:py-5" data-aos="fade-up">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">
          Browser Our Trending <br />{' '}
          <span className="text-[#8BAC3E]">Receipt</span>
        </h1>
      </div>
      <TrendingShow />
    </section>
  );
};
