import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Specialisations', href: '#specialisations' },
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
];

export function Navbar({ onBookClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#C77D8A]/15 bg-[#FFFCF8]/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-16 lg:px-8">
          <a
            href="#home"
            className="font-serif text-lg font-medium tracking-tight text-[#353035] whitespace-nowrap shrink-0 transition-colors hover:text-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D8A] sm:text-xl"
          >
            {BRAND_CONFIG.professionalName}
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-medium text-[#88747D] whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#353035] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D8A] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C77D8A] after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onBookClick}
              className="btn-luxe-hover hidden cursor-pointer items-center justify-center rounded-full bg-[#C77D8A] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 shadow-xs hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A] sm:inline-flex"
            >
              Book Consultation
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[#353035] transition-colors hover:bg-[#F8E9EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A] lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#C77D8A]/15 bg-[#FFFCF8] px-4 py-4 lg:hidden"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-[#353035] transition-colors hover:bg-[#F8E9EB]/70 hover:text-[#A85E6C]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onBookClick();
                  }}
                  className="btn-luxe-hover flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-full bg-[#C77D8A] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#A85E6C]"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Slim mobile fixed bottom CTA bar — kept under 48px to respect mobile sticky height cap */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C77D8A]/20 bg-[#FFFCF8]/95 px-4 py-2 backdrop-blur-md sm:hidden">
        <button
          type="button"
          onClick={onBookClick}
          className="cta-hero-primary flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C77D8A] px-5 text-xs font-semibold tracking-[0.06em] text-white uppercase hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
        >
          <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Book Your Consultation</span>
        </button>
      </div>
    </>
  );
}
