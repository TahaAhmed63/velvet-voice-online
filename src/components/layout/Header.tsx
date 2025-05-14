
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music2 } from 'lucide-react'; // Example Icon

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Videos', path: '/videos' },
  { name: 'About', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-serif font-bold text-brand-gold hover:text-brand-light-purple transition-colors">
          <Music2 size={28} />
          <span>Artist Name</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-lg ${
                    location.pathname === item.path ? 'text-brand-gold font-semibold border-b-2 border-brand-gold' : 'text-brand-light-purple hover:text-brand-gold'
                  } transition-colors pb-1`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
