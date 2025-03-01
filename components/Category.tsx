import React from 'react';
import { CategoryCarousels } from './utils/CategoryCarousels';

export const Category = () => {
  return (
    <section className="px-6 lg:px-16 md:py-5" data-aos="fade-up">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">
          Browser Our Category <br />{' '}
          <span className="text-[#8BAC3E]">Receipt</span>
        </h1>
      </div>
      <CategoryCarousels />
    </section>
  );
};
