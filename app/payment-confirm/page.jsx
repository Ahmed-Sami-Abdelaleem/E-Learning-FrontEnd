'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../_context/CartContext';
export default function PaymentConfirm() {
  const [isLoading, setIsLoading] = useState(true);
  const {cart, setCart} = useContext(CartContext);
  const searchParams = useSearchParams();
  useEffect(() => {
    
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {isLoading ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-6">
            <svg className="w-24 h-24 mx-auto mb-4" viewBox="0 0 50 50">
              <motion.circle
                cx="25"
                cy="25"
                r="23"
                stroke="#4CAF50"
                strokeWidth="4"
                fill="none"
                variants={circleVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M14 27l7 7 14-14"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={checkmarkVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800">Payment Confirmed!</h1>
          </motion.div>
          
          <p className="text-gray-600 text-center mb-6">
            Thank you for your purchase. Your payment has been successfully processed.
          </p>
          
          <div className="bg-gray-300 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-800">Order ID: <span className="font-semibold text-gray-800">{searchParams.get('payment_intent')}</span></p>
          </div>
          
          <Link href="/">
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Return to Home
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  )
}