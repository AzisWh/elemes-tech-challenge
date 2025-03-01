import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardTrenProps {
  image: StaticImageData;
  title: string;
  alias: string;
  color: string;
  stars: string;
}

export const CardTrending: React.FC<CardTrenProps> = ({
  image,
  title,
  alias,
  color,
  stars,
}) => {
  return (
    <section
      className={`card w-[382px] h-[242px] shadow-lg md:w-[287px] md:h-[306px] flex flex-col justify-start items-start rounded-xl transition-transform duration-300 ease-in-out hover:scale-105`}
      style={{ backgroundColor: color }}>
      <div className="flex flex-col items-start p-5">
        <Image
          className=" h-[114px] md:h-[120px] w-[118px] object-cover rounded-lg"
          src={image}
          alt={'/'}
        />
        <div className="title font-semibold mt-4 text-[22px] md:text-[26px]">
          {title}
        </div>
        <div className="paragraph font-semibold text-[16px] md:text-[18px] text-[#8BAC3E]">
          {alias} Items
        </div>
        <div className="paragraph font-light text-[14px]">{stars}</div>
      </div>
    </section>
  );
};
