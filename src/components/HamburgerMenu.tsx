'use client';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  // Only show on mobile - desktop uses horizontal navigation
  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Overlay - full screen touch target for closing */}
      <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Slide-out menu - mobile optimized width */}
      <Card className="fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] shadow-xl animate-in slide-in-from-left duration-200">
        <CardContent className="p-0 h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Menu</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-lg"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Navigation items - large touch targets */}
          <nav className="p-4 space-y-2">
            <Link href="/" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                Vote
              </Button>
            </Link>
            
            <Link href="/rankings" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                Rankings
              </Button>
            </Link>
            
            <Link href="/categories" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                Categories
              </Button>
            </Link>
            
            <Link href="/profile" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                Profile
              </Button>
            </Link>

            {/* Divider */}
            <div className="border-t border-border my-4" />
            
            {/* Secondary items */}
            <Link href="/about" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                About
              </Button>
            </Link>
            
            <Link href="/settings" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                Settings
              </Button>
            </Link>
            
            <Link href="/feedback" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                Feedback
              </Button>
            </Link>
            
            <Link href="/help" onClick={onClose}>
              <Button 
                variant="ghost" 
                className="w-full justify-start h-12 px-4 text-left font-normal"
              >
                Help
              </Button>
            </Link>
          </nav>
        </CardContent>
      </Card>
    </div>
  );
}