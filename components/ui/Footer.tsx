'use client';
import React from 'react';
import logo from '@/public/image/logo.svg';
import Image from 'next/image';
import email from '@/public/image/icon-mail.svg';
import insta from '@/public/image/icon-insta.svg';
import phone from '@/public/image/icon-telf.svg';
import hamburger from '@/public/image/hamburger.svg';

export const Footer = () => {
  return (
    <section data-aos="fade-up">
      <div className="block md:hidden px-6 pt-16 pb-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
            <Image
              src={hamburger}
              alt="/"
              width={39}
              height={39}
              className="transition duration-300 hover:invert hover:brightness-0"
            />
            <h1 className="text-[#757575] text-[14px]">Home</h1>
          </div>
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
            <Image
              src={hamburger}
              alt="/"
              width={39}
              height={39}
              className="transition duration-300 hover:invert hover:brightness-0"
            />
            <h1 className="text-[#757575] text-[14px]">Promotion</h1>
          </div>
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
            <Image
              src={hamburger}
              alt="/"
              width={39}
              height={39}
              className="transition duration-300 hover:invert hover:brightness-0"
            />
            <h1 className="text-[#757575] text-[14px]">Other</h1>
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        <footer className="bg-[#F9FFF6] py-10 rounded-2xl">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <a
                  href="https://www.elemesgroup.com/"
                  target="_blank"
                  className="flex items-center">
                  <Image src={logo} alt="Logo" width={150} height={40} />
                </a>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br />
                  Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
                  Daerah Khusus Ibukota Jakarta 12950
                </p>
                <div className="flex flex-row space-x-3 mt-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
                    <Image
                      src={email}
                      alt="/"
                      width={24}
                      height={24}
                      className="transition duration-300 hover:invert hover:brightness-0"
                    />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
                    <Image
                      src={phone}
                      alt="/"
                      width={24}
                      height={24}
                      className="transition duration-300 hover:invert hover:brightness-0"
                    />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
                    <Image
                      src={insta}
                      alt="/"
                      width={24}
                      height={24}
                      className="transition duration-300 hover:invert hover:brightness-0"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>Cupcake</li>
                  <li>Pizza</li>
                  <li>Kebab</li>
                  <li>Salmon</li>
                  <li>Doughnut</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Report Problem</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get now free 50% discount for all products on your first order
                </p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 flex-1 text-sm focus:outline-none"
                  />
                  <button className="bg-[#8BAC3E] text-white px-4 py-2">
                    SEND
                  </button>
                </div>
                <div className="mt-8 flex flex-col items-start space-x-6 space-y-6">
                  <div className="flex flex-row gap-2">
                    <Image src={email} alt="/" width={24} height={24} />
                    <span className="text-black text-sm">
                      elemesid@gmail.com
                    </span>
                  </div>

                  <div className="flex flex-row gap-2">
                    <Image src={phone} alt="/" width={24} height={24} />
                    <span className="text-black text-sm">0888 111 2222</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="md:flex hidden justify-center md:pt-8">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2021{' '}
          <a
            href="https://www.elemesgroup.com/"
            target="_blank"
            className="hover:underline duration-200">
            Elemes id.
          </a>
          All rights reserved.
        </span>
      </div>
    </section>
  );
};
