
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Music, Star, Users } from 'lucide-react';

const AboutMe = () => {
  // Placeholder data - this can be updated later
  const artistNameInitial = "AN";
  const artistImageUrl = "https://images.unsplash.com/photo-1507202345400-8c3c91b68159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"; // Placeholder artist photo

  return (
    <section id="about-me" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-gold mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex-shrink-0 md:w-1/3 flex justify-center">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-brand-gold shadow-lg">
              <AvatarImage src={artistImageUrl} alt="Artist Photo" />
              <AvatarFallback className="text-4xl bg-brand-dark-purple text-brand-gold">{artistNameInitial}</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-brand-light-purple mb-6 leading-relaxed">
              Welcome! I'm a passionate singer and performer dedicated to creating unforgettable musical experiences. My journey in music has been driven by a love for melody and a desire to connect with audiences through the power of song. From intimate acoustic sets to vibrant stage shows, I pour my heart into every note.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-gold mb-2 flex items-center"><Music className="mr-2" /> Musical Influences</h3>
                <ul className="list-disc list-inside text-brand-light-purple/90 ml-4">
                  <li>Etta James</li>
                  <li>Aretha Franklin</li>
                  <li>Stevie Wonder</li>
                  <li>Beyoncé</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-gold mb-2 flex items-center"><Star className="mr-2" /> Genres</h3>
                <ul className="list-disc list-inside text-brand-light-purple/90 ml-4">
                  <li>Soul / R&B</li>
                  <li>Jazz</li>
                  <li>Pop</li>
                  <li>Funk</li>
                </ul>
              </div>
            </div>
             <div className="mb-8">
                <h3 className="text-xl font-semibold text-brand-gold mb-2 flex items-center"><Users className="mr-2" /> Achievements</h3>
                <ul className="list-disc list-inside text-brand-light-purple/90 ml-4">
                  <li>Performed at the City Music Festival 2024</li>
                  <li>Released debut EP "Soulful Echoes"</li>
                  <li>Winner of "Best New Artist" at Local Music Awards</li>
                </ul>
              </div>
            <Button variant="outline" size="lg" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-purple group">
              Download Press Kit <Download className="ml-2 h-5 w-5 group-hover:text-brand-dark-purple transition-colors" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
