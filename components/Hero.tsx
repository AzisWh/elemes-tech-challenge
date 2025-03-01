'use client';
import React from 'react';
import heropizza from '@/public/image/hero-circle.svg';
import Image from 'next/image';
import logo from '@/public/image/logo.svg';
import { Button } from './utils/Button';

export const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[url('../public/image/herobg.png')] bg-cover bg-center opacity-5 z-0"></div>
      <section
        className=" relative  dark:text-gray-800 py-12"
        data-aos="fade-up">
        <div className="relative container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center px-6 lg:px-16">
          {/* Konten Teks */}
          <div className="text-left  space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#8BAC3E]">
              Good Food Us <br />
              <span className="text-[#8BAC3E]">Good Mood</span>
            </h1>
            <p className="text-gray-600 text-lg ">
              I would think that conserving our natural resources should be a
              conservative position. Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <div className="flex flex-row sm:justify-center lg:justify-start gap-2 md:gap-4">
              <Button
                text="Daftar Sekarang"
                type="button"
                onClick={() => console.log('test')}
                className="md:flex duration-300 hover:bg-lime-600 text-white bg-[#8BAC3E]"
              />
              <Button
                text="About Us"
                type="button"
                onClick={() => console.log('test')}
                className="hover:bg-gray-200 bg-[#F2F2F2] md:flex text-[#333333] duration-300"
              />
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row items-start sm:justify-center w-full py-16 md:py-0">
            <div className="absolute w-54 h-54 md:w-110 md:h-110 bg-gray-200 rounded-full -z-10"></div>

            <Image
              src={heropizza}
              alt="Hero pizza"
              className=" w-[198px] h-[199px] md:w-[412px] md:h-[414px] md:mt-3 md:ml-0 ml-2 mt-2 object-contain"
            />

            <div className="absolute bottom-10 sm:bottom-8 md:left-0 left-35 md:w-[50%] opacity-75 bg-white shadow-lg rounded-xl p-3 flex items-center space-x-3">
              <Image
                src={heropizza}
                alt="Green Salad"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  Green Salad Tomato
                </h3>
                <p className="text-xs text-gray-500">Tomato</p>
                <div className="flex text-yellow-500 text-xs">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
