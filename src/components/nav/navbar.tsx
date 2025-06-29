import Link from 'next/link';
import { Button } from '../ui/button';
import { Star } from 'lucide-react';

export function Navbar() {
  return (
    <header className="border-b border-gray-600 sticky top-0 bg-white/95 backdrop-blur-sm z-50 w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#2835a0] to-[#4c5fd7] rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Warehouse</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#how-it-works"
            className="text-gray-600 hover:text-[#2835a0] transition-colors">
            Home
          </Link>
          <Link
            href="#benefits"
            className="text-gray-600 hover:text-[#2835a0] transition-colors">
            Contact
          </Link>
          <Link
            href="#process"
            className="text-gray-600 hover:text-[#2835a0] transition-colors">
            Pricing
          </Link>
          <Button className="bg-[#2835a0] hover:bg-[#1e2875] text-white">Sign in</Button>
        </nav>
      </div>
    </header>
  );
}
