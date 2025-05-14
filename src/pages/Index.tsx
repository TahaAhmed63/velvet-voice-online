import React from 'react';
import Hero from '@/components/home/Hero';
import AboutMe from '@/components/home/AboutMe';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Testimonials />
      {/* Other homepage sections will go here */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-gold mb-4">More Content Coming Soon!</h2>
        <p className="text-lg text-brand-light-purple">
          This is just the beginning. We're working on adding sections for videos, a detailed bio page, more testimonials, and ways to contact us.
        </p>
      </div>
    </div>
  );
};

export default Index;
