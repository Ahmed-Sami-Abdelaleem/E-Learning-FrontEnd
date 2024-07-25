"use client";
import React from 'react'
import { useUser } from "@clerk/nextjs";

function Footer() {
  const { isLoaded } = useUser();

  return (
    <footer className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div className="col-span-3">
          <a href="#" title="Hellonext Home Page" className="flex items-center">
            <svg className="w-auto h-6" width="86" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 93">
              <path
                d="M134.71 45.7599c1.32-1.44 2.67-2.94 4.05-4.5 1.44-1.56 2.82-3.09 4.14-4.59 1.32-1.56 2.55-3.03 3.69-4.41 1.2-1.38 2.22-2.58 3.06-3.6h15.93c-3.18 3.66-6.3 7.17-9.36 10.53-3 3.3-6.3 6.72-9.9 10.26 1.8 1.62 3.66 3.57 5.58 5.85 1.92 2.22 3.78 4.53 5.58 6.93 1.8 2.4 3.45 4.8 4.95 7.2 1.5 2.4 2.76 4.59 3.78 6.57h-15.39c-.96-1.56-2.07-3.27-3.33-5.13-1.2-1.92-2.49-3.81-3.87-5.67-1.38-1.92-2.85-3.75-4.41-5.49-1.5-1.74-3-3.21-4.5-4.41v20.7H121.3V8.31991l13.41-2.16V45.7599zM209.35 74.3799c-2.28.66-5.22 1.26-8.82 1.8-3.6.6-7.38.9-11.34.9-4.02 0-7.38-.54-10.08-1.62-2.64-1.08-4.74-2.58-6.3-4.5-1.56-1.98-2.67-4.32-3.33-7.02-.66-2.7-.99-5.67-.99-8.91v-26.37h13.41v24.75c0 4.32.57 7.44 1.71 9.36 1.14 1.92 3.27 2.88 6.39 2.88.96 0 1.98-.03 3.06-.09 1.08-.12 2.04-.24 2.88-.36v-36.54h13.41v45.72zM217.888 16.8699l13.41-2.16v13.95h16.11v11.16h-16.11v16.65c0 2.82.48 5.07 1.44 6.75 1.02 1.68 3.03 2.52 6.03 2.52 1.44 0 2.91-.12 4.41-.36 1.56-.3 2.97-.69 4.23-1.17l1.89 10.44c-1.62.66-3.42 1.23-5.4 1.71-1.98.48-4.41.72-7.29.72-3.66 0-6.69-.48-9.09-1.44-2.4-1.02-4.32-2.4-5.76-4.14-1.44-1.8-2.46-3.96-3.06-6.48-.54-2.52-.81-5.31-.81-8.37v-39.78z"
                fill="#1A202C"
              />
            </svg>
            <span className="sr-only">Kutty Home Page</span>
          </a>
          <p className="my-4 text-xs leading-normal text-gray-600">
            Hosted in the EU 🇪🇺, with <strong>no user tracking</strong> scripts. Made all over the world by <a href="#" className="underline" target="_blank">17 amazing people</a>.
          </p>
        </div>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Features</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Pricing</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Feedback</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">FAQs</a>
        </nav>
        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Support</p>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Chat</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> Email Support </a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">GDPR</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> Help </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Resources</p>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Blog</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> Twitter </a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Alternatives</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Why feature vote?</a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Company</p>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">About Us</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Privacy</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Terms</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">Status</a>
        </nav>
      </div>
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">Built by Product Managers, for Product Managers.</p>
        <p className="mb-0 text-xs text-left text-gray-600 md:mb-0">Copyright &copy; 2024 Hellonext</p>
      </div>
    </footer>
  )
}

export default Footer