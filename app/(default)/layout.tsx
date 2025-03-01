'use client';
import { useEffect } from 'react';
import { Footer } from '@/components/ui/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      disable: 'phone',
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <>
      <div className="mt-10 md:mt-0 md:p-[80px]">
        {children}
        <Footer />
      </div>
    </>
  );
}
