import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardCategoryProps {
  image: StaticImageData;
  title: string;
  items: number;
  color: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  image,
  title,
  items,
  color,
}) => {
  return (
    <section
      className={`card m-2 w-[250px] h-[250px] shadow-lg md:w-[230px] md:h-[172px] flex flex-col justify-center items-center rounded-xl transition-transform duration-300 ease-in-out hover:scale-105`}
      style={{ backgroundColor: color }}>
      <div className="flex flex-col text-center items-center">
        <Image className="w-full h-[52px] md:w-[47px]" src={image} alt={'/'} />
        <div id="title" className="title font-semibold my-1 text-[16px]">
          {title}
        </div>
        <div className="paragraph font-light my-1 text-[14px]">
          {items} Items
        </div>
      </div>
    </section>
  );
};

export default CardCategory;
