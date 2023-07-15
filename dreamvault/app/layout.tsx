"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Providers } from './providers';
import '@rainbow-me/rainbowkit/styles.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <html lang="en">
      <body className="bg-black">
        <Providers>
          <nav className="fixed top-0  bg-black  text-white  font-semibold w-screen z-10">
            <div className=''>
            <div className="max-w-6xl mx-auto px-3">
              <div className="flex justify-between">
                <div id="desktopMenu" className="hidden md:flex items-center space-x-3">
                  <a href="/" className="block p-3  hover:bg-white hover:text-black ">Home</a>
                  <a href="/about" className="block p-3  hover:bg-white hover:text-black"> About</a>
                </div>

                <div id="logo" className="flex items-center space-x-3 ">
                  <a href="/" className=" block p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </a>
                  DreamVault
                </div>

                <div id="auth" className="hidden md:flex items-center space-x-3">
                <ConnectButton />
                <a href="/addevent" className="block p-3  hover:bg-white hover:text-black">Raise Fund</a>

                </div>

                <button id="mobileBurger" className="md:hidden flex items-center" onClick={toggleMobileMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

              </div>
            </div>
            </div>
            <div id="mobileMenu" className={`md:hidden text-sm ${isMobileMenuOpen ? '' : 'hidden'}`}>
              <div className="flex justify-center ">
                <a href="/" className="block p-2   hover:bg-white hover:text-black">Home</a>
              </div>
              <div className="flex justify-center ">

                <a href="/about" className=" block p-2  hover:bg-white hover:text-black">About</a>
              </div>
              <ConnectButton />
              <div className="mt-2 mb-4">
                <div className="flex justify-center">
                  <a href="/addevent" className=" block p-2  hover:bg-white hover:text-black">Raise Fund</a>
                </div>
              </div>
            </div>



          </nav>

          {children}
          <footer className=" bg-black text-white py-4">
            <div className="max-w-screen mx-10 px-4">
              <div className="flex items-center justify-between">
                <div className="">© 2023 DreamVault. All rights reserved.</div>
                <div className="flex space-x-4">
                  <a href="#" className=" hover:text-gray-300">
                    Terms of Service
                  </a>
                  <a href="#" className=" hover:text-gray-300">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              function toggleMobileMenu() {
                var mobileMenu = document.getElementById("mobileMenu");
                mobileMenu?.classList.toggle("hidden");
              }
            `,
            }}
          ></script>
        </Providers>
      </body>
    </html>
  )
}
