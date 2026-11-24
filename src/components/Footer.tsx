import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';
import type { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-[#C77D8A]/18 bg-[#FFFCF8] pt-14 pb-24 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-medium text-[#353035]">
              {BRAND_CONFIG.professionalName}
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#A85E6C]">{BRAND_CONFIG.subtitle}</p>
            <p className="mt-1 text-sm text-[#88747D]">
              B.Sc. &amp; M.Sc. in Dietetics · {BRAND_CONFIG.consultationType}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.12em] text-[#88747D]">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-[#5A4F54]">
              <li>
                <a href="#home" className="transition-colors hover:text-[#A85E6C]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-[#A85E6C]">
                  About
                </a>
              </li>
              <li>
                <a href="#specialisations" className="transition-colors hover:text-[#A85E6C]">
                  Specialisations
                </a>
              </li>
              <li>
                <a href="#programs" className="transition-colors hover:text-[#A85E6C]">
                  Programs
                </a>
              </li>
              <li>
                <a href="#faqs" className="transition-colors hover:text-[#A85E6C]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#consultation-form" className="transition-colors hover:text-[#A85E6C]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Legal */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.12em] text-[#88747D]">
              Consultations &amp; Legal
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#5A4F54]">
              <div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-[#353035] transition-colors hover:text-[#A85E6C]"
                >
                  <MessageCircle className="h-4 w-4 text-[#A85E6C]" aria-hidden="true" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="cursor-pointer transition-colors hover:text-[#A85E6C]"
                >
                  Privacy Policy
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="cursor-pointer transition-colors hover:text-[#A85E6C]"
                >
                  Terms &amp; Conditions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 border-t border-[#C77D8A]/15 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-[#88747D]">
            Nutrition consultations provide dietary guidance and do not replace diagnosis, medical
            treatment or advice from your treating healthcare professional. Individual results may
            vary.
          </p>
          <p className="mt-4 text-xs text-[#88747D]">
            © 2026 {BRAND_CONFIG.professionalName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
