import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp with Dr. Amtaul Kareem Fatima"
      className="whatsapp-pulse-btn fixed right-4 bottom-16 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-[#C6A36B]/40 bg-[#353035] px-4 text-sm font-medium text-white hover:bg-[#494249] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A] sm:right-6 sm:bottom-6 sm:h-13 sm:px-5"
    >
      <MessageCircle className="h-5 w-5 text-[#F8E9EB]" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Enquiry</span>
    </a>
  );
}
