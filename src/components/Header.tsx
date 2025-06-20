'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HamburgerMenu from './HamburgerMenu';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile: Fixed header, Desktop: Static header */}
      <header className="fixed lg:static top-0 left-0 right-0 z-40 bg-background/80 lg:bg-background backdrop-blur-md lg:backdrop-blur-none border-b border-border supports-[backdrop-filter]:bg-background/60">
        
        {/* Mobile Layout: Hamburger + Logo */}
        <div className="flex items-center justify-between p-4 max-w-sm mx-auto lg:hidden">
          {/* Mobile: Hamburger Menu */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="h-10 w-10 rounded-lg hover:bg-accent"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Mobile: Logo */}
          <Button
            variant="ghost"
            onClick={() => window.location.href = '/'}
            className="text-foreground font-bold text-lg px-3 py-2 rounded-lg hover:bg-accent"
          >
            RankApp
          </Button>
        </div>

        {/* Desktop Layout: Full navigation */}
        <div className="hidden lg:flex items-center justify-between p-4 max-w-6xl mx-auto">
          {/* Desktop: Logo on left */}
          <Link href="/" className="text-foreground font-bold text-xl hover:text-muted-foreground transition-colors">
            RankApp
          </Link>
          
          {/* Desktop: Navigation menu */}
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors">
              Vote
            </Link>
            <Link href="/rankings" className="text-foreground hover:text-muted-foreground transition-colors">
              Rankings
            </Link>
            <Link href="/categories" className="text-foreground hover:text-muted-foreground transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-foreground hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="/profile" className="text-foreground hover:text-muted-foreground transition-colors">
              Profile
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile: Spacer for fixed header, Desktop: No spacer needed */}
      <div className="h-16 lg:h-0" />

      {/* Mobile: Hamburger menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}