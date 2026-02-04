import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-20 pb-32 lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="flex flex-col items-center">

          <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-xl p-2 flex items-center justify-center">
            <img
              src="/assignment_(Logo).png"
              alt="Assignment Assistant Logo"
              className="w-full h-full object-contain rounded-full" />

          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl max-w-4xl">
            Your Trusted Partner for <br className="hidden md:block" />
            <span className="text-blue-600">
              Academic & Technology Solutions
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
            Delivering high-quality web development, mobile apps, and academic
            excellence with speed, accuracy, and professional integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="https://wa.me/94750937116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-500 rounded-full hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">

              <MessageCircle className="w-5 h-5 mr-2" />
              Contact on WhatsApp
            </a>
          
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden opacity-30">
        <div className="absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-200 blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-purple-200 blur-[100px]" />
      </div>
    </section>);

}