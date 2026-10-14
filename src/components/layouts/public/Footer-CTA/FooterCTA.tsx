import Link from 'next/link';
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="my-10">
      <div className="relative isolate overflow-hidden  border border-[#D4AF37]/25 bg-[#03071e] px-5 py-8 shadow-[0_12px_35px_rgba(3,7,30,0.12)] sm:px-8 md:px-10 md:py-10">
        {/* Luxury Gold Decorations */}
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-52 w-52 rounded-full bg-[#B8860B]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-[#D4AF37]/70 to-transparent" />

        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#E5C76B]">
              <Heart className="h-3.5 w-3.5 fill-current" />
              Made for your everyday shopping
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Find Something{' '}
              <span className="bg-gradient-to-r from-[#F5DF91] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                You’ll Love
              </span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Explore our latest collection and discover beautiful designs,
              quality products, and a delightful shopping experience.
            </p>

            <Link
              href="/products"
              className="group mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#F5DF91] via-[#D4AF37] to-[#B8860B] px-5 py-3 text-sm font-bold text-[#03071e] shadow-[0_5px_20px_rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,175,55,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03071e]"
            >
              Start Shopping
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Feature Cards */}
          <div className="grid w-full grid-cols-3 gap-2.5 sm:gap-3 md:max-w-md">
            {/* Wide Choice */}
            <div className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.06] sm:p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <ShoppingBag className="h-5 w-5 text-[#E5C76B]" />
              </div>

              <p className="text-xs font-semibold text-white sm:text-sm">
                Wide Choice
              </p>

              <p className="mt-1 hidden text-[11px] leading-5 text-slate-400 sm:block">
                More to explore
              </p>
            </div>

            {/* Fast Delivery */}
            <div className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.06] sm:p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <Truck className="h-5 w-5 text-[#E5C76B]" />
              </div>

              <p className="text-xs font-semibold text-white sm:text-sm">
                Fast Delivery
              </p>

              <p className="mt-1 hidden text-[11px] leading-5 text-slate-400 sm:block">
                Across Bangladesh
              </p>
            </div>

            {/* Safe Shopping */}
            <div className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.06] sm:p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]/20">
                <ShieldCheck className="h-5 w-5 text-[#E5C76B]" />
              </div>

              <p className="text-xs font-semibold text-white sm:text-sm">
                Shop Safely
              </p>

              <p className="mt-1 hidden text-[11px] leading-5 text-slate-400 sm:block">
                Trusted shopping
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gold Accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
      </div>
    </section>
  );
};

export default FooterCTA;
