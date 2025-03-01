'use client';
import React, { useEffect, useState } from 'react';
import logo from '@/public/image/logo.svg';
import Image from 'next/image';
import { Button } from '../utils/Button';

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        scroll ? 'bg-gray-200 shadow-md' : 'bg-white'
      }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://www.elemesgroup.com/"
          target="_blank"
          className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" className="h-8 w-auto" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <Button
            text="Masuk"
            type="button"
            onClick={() => console.log('test')}
            className="hover:text-white md:flex duration-300 hover:bg-lime-600 text-[#333333] hidden"
          />
          <Button
            text="Daftar Sekarang"
            type="button"
            onClick={() => console.log('test')}
            className="md:flex duration-300 hover:bg-lime-600 text-white bg-[#8BAC3E]"
          />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 duration-300 text-gray-400 hover:text-black focus:text-black rounded-sm md:bg-transparent md:p-0"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 duration-300 text-gray-400 hover:text-black focus:text-black rounded-sm md:bg-transparent md:p-0">
                About
              </a>
            </li>
            <li className="relative">
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-[8px] px-2 py-1 rounded-xl">
                HOT
              </span>
              <a
                href="#"
                className="block py-2 px-3 duration-300 text-gray-400 hover:text-black focus:text-black rounded-sm md:bg-transparent md:p-0">
                Promotions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 duration-300 text-gray-400 hover:text-black focus:text-black rounded-sm md:bg-transparent md:p-0">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 duration-300 text-gray-400 hover:text-black focus:text-black rounded-sm md:bg-transparent md:p-0">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
