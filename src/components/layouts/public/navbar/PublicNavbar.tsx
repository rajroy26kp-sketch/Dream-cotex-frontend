'use client';

import { Search, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import Link from 'next/link';
import SearchBar from './SearchBar';
import { useCartStore } from '@/store/cart.store';
import { getUser } from '@/utils/auth';
import Image from 'next/image';
import UserDropdown from './UserDropdown';
import DesktopNav from './DesktopNav';
import RightDesktopNev from './RightDesktopNev';
import MobileSidebar from './MobileSidebar';
import { IUser } from '@/types/auth';

const PublicNavbar = ({ className }: { className?: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Get cart items from Zustand
  const cartItems = useCartStore(state => state.items);

  // Total quantity
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const currentUser = getUser();

    if (currentUser) {
      queueMicrotask(() => setUser(currentUser));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={cn(
        'sticky top-0 z-50 w-full border-b border-[#d4af37]/20 bg-[#17130c] text-[#f3e7c4]  md:text-inherit',
        className,
      )}
    >
      {/* Promo Banner */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-[100px] opacity-100'
        }`}
      >
        {/* <PromoBanner1 /> */}
      </div>

      <div className="container mx-auto px-3 sm:px-4">
        {/* Top Navbar */}
        <div className="flex flex-col gap-0 py-3 md:flex-row md:items-center md:justify-between md:gap-3">
          {/* LEFT */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2">
              {/* mobile navbar  open + onOpenChange make this a controlled Sheet */}
              <MobileSidebar user={user}></MobileSidebar>

              {/* mobile Logo */}
              <Link className=" md:hidden items-center mr-20 shrink-0" href="/">
                <div className="flex items-center">
                  <Image
                    src="/images/Dream Cottage BD logo.png"
                    alt="Logo"
                    width={110}
                    height={110}
                  />
                </div>
              </Link>
              {/* desktop Logo */}
              <Link
                className="hidden md:flex flex items-center mr-20 shrink-0"
                href="/"
              >
                <div className="flex items-center">
                  <Image
                    src="/images/Dream Cottage BD logo.png"
                    alt="Logo"
                    width={170}
                    height={170}
                  />
                </div>
              </Link>
            </div>

            {/* Mobile: profile + cart (right side) */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                aria-label="Toggle search"
                aria-expanded={mobileSearchOpen}
                aria-controls="mobile-search"
                onClick={() => setMobileSearchOpen(open => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/30 bg-white/5 text-[#e7c873] transition-colors hover:bg-[#d4af37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60"
              >
                <Search className="h-5 w-5" />
              </button>
              {user && <UserDropdown user={user} />}
              <div className="relative">
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5 text-[#f3e7c4]" />
                  <span className="absolute -top-4 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Center: Search bar */}
          <SearchBar mobileOpen={mobileSearchOpen} />

          {/* RIGHT DESKTOP */}
          <RightDesktopNev></RightDesktopNev>
        </div>

        {/* DESKTOP NAV */}
        {/* <DesktopNav /> */}

        {/* MOBILE SCROLL LINKS */}
        {/* <div className="flex lg:hidden gap-4 py-2 text-xs text-gray-600 overflow-x-auto whitespace-nowrap border-t scrollbar-hide">
          <a className="hover:text-orange-500">Order protections</a>
          <a className="hover:text-orange-500">Tax exemption</a>
          <a className="hover:text-orange-500">Buyer Central</a>
        </div> */}
      </div>
    </section>
  );
};

export { PublicNavbar };
