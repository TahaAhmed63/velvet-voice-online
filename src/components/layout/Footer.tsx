
import React from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react'; // Using available icons

const Footer = () => {
  return (
    <footer className="bg-brand-dark-purple/50 border-t border-border py-8 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-light-purple hover:text-brand-gold transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-light-purple hover:text-brand-gold transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-light-purple hover:text-brand-gold transition-colors">
            <Twitter size={24} />
          </a>
          {/* Add other social media icons like TikTok if available or requested */}
        </div>
        <p className="text-brand-light-purple text-sm">
          &copy; {new Date().getFullYear()} Artist Name. All rights reserved.
        </p>
         <p className="text-xs text-muted-foreground mt-2">Site by Lovable</p>
      </div>
    </footer>
  );
};

export default Footer;
