import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>);

}