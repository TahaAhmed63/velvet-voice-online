
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button'; // Using shadcn button

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null); // Wrap button for animation

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (heroRef.current) {
      // Animate background (if it were an element, or simply fade in content)
      gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
    if (headlineRef.current) {
      tl.fromTo(headlineRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 });
    }
    if (taglineRef.current) {
      tl.fromTo(taglineRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    }
  }, []);

  // Placeholder image URL for the singer performing
  const heroBgImageUrl = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";


  return (
    <div
      ref={heroRef}
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url(${heroBgImageUrl})` }}
    >
      <div className="text-center p-8 max-w-3xl mx-auto">
        <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold text-brand-off-white mb-6 leading-tight opacity-0">
          The Voice That Moves Souls
        </h1>
        <p ref={taglineRef} className="text-xl md:text-2xl text-brand-light-purple mb-10 opacity-0">
          Experience captivating performances and timeless melodies.
        </p>
        <div ref={ctaRef} className="opacity-0">
          <Button 
            size="lg" 
            className="bg-brand-gold text-brand-dark-purple hover:bg-yellow-500 font-semibold text-lg px-10 py-6 transition-all duration-300 transform hover:scale-105"
            onClick={() => console.log('CTA Clicked')} // Replace with actual navigation or action
          >
            Watch My Work
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
