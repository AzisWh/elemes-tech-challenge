'use client';
import React from 'react';
import CardCategory from './CardCategory';
import { CardContent } from './CardContent';
import leftarrow from '@/public/image/leftarrow.png';
import rightarrow from '@/public/image/rightarrow.png';
import Image from 'next/image';

export const CategoryCarousels = () => {
  const scrollLeft = () => {
    const content = document.getElementById('content') as HTMLDivElement | null;
    if (content) {
      content.scrollLeft -= 500;
    }
  };

  const scrollRight = () => {
    const content = document.getElementById('content') as HTMLDivElement | null;
    if (content) {
      content.scrollLeft += 500;
    }
  };
  return (
    <section className="relative">
      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scrollbar-hide ">
        <div className="flex">
          {CardContent.map((content: any) => (
            <CardCategory
              key={content.id}
              image={content.image}
              title={content.title}
              items={content.items}
              color={content.color}
            />
          ))}
        </div>
      </div>

      <div className="md:flex md:justify-end hidden gap-2 ">
        <button
          onClick={scrollLeft}
          className="px-3 py-3 text-lg pr-4 text-white bg-[#8BAC3E] text-[16px] rounded-full drop-shadow-xl hover:bg-lime-700 transition flex items-center justify-center gap-2">
          <Image src={leftarrow} alt="/" className="w-[33px] h-[33px]" />
          Prev
        </button>
        <button
          onClick={scrollRight}
          className="px-3 py-3 text-lg pr-4 text-white bg-[#8BAC3E] text-[16px] rounded-full drop-shadow-xl hover:bg-lime-700 transition flex items-center justify-center gap-2">
          Prev
          <Image src={rightarrow} alt="/" className="w-[33px] h-[33px]" />
        </button>
      </div>
    </section>
  );
};
