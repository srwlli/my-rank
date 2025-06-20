'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { User, Home, BarChart3, Grid3X3, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { 
      id: 'home', 
      label: 'Vote', 
      icon: <Home className="w-5 h-5" />, 
      href: '/' 
    },
    { 
      id: 'rankings', 
      label: 'Rankings', 
      icon: <BarChart3 className="w-5 h-5" />, 
      href: '/rankings' 
    },
    { 
      id: 'categories', 
      label: 'Categories', 
      icon: <Grid3X3 className="w-5 h-5" />, 
      href: '/categories' 
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: <Info className="w-5 h-5" />, 
      href: '/about' 
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: <User className="w-5 h-5" />, 
      href: '/profile' 
    },
  ];

  return (
    <>
      {/* Mobile: Fixed footer navigation */}
      <footer className="fixed lg:hidden bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md border-t border-border z-40">
        <div className="grid grid-cols-5 h-16 max-w-sm mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center justify-center"
            >
              <Button
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center justify-center h-14 w-full rounded-none text-xs gap-1 ${
                  pathname === item.href 
                    ? 'text-foreground bg-accent/50' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/30'
                }`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </footer>

      {/* Desktop: Simple footer with links */}
      <footer className="hidden lg:block bg-background border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2025 RankApp. Vote and rank your favorites.
              </p>
            </div>
            <nav className="flex space-x-6">
              <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                About
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}