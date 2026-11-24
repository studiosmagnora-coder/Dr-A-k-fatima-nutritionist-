import { ArrowRight, MessageCircle } from 'lucide-react';
import { GENERATED_IMAGES, getWhatsAppUrl } from '../config/brand';
import { EditorialImage } from './EditorialImage';
import { SectionHeadingBox } from './HeadingBox';
import { Reveal } from './Reveal';

interface FinalCtaSectionProps {
  onBookClick: () => void;
}

export function FinalCtaSection({ onBookClick }: FinalCtaSectionProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[#F8E9EB] py-16 sm:py-20 lg:py-24"
    >
      {/* Background luxury still-life image with measured contrast scrim */}
      <div aria-hidden="true" className="absolute inset-0">
        <EditorialImage
          src={GENERATED_IMAGES.ctaBackdrop}
          alt=""
          className="h-full w-full object-cover object-center opacity-35"
          aspectClass="aspect-[16/9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8E9EB]/95 via-[#F8E9EB]/88 to-[#F8E9EB]/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-[#C77D8A]/20 bg-[#FFFCF8]/92 px-6 py-12 shadow-sm backdrop-blur-xs sm:px-12 sm:py-16">
            <SectionHeadingBox eyebrow="Begin Gently & Thoughtfully" tone="on-ivory">
              <h2
                id="final-cta-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl lg:text-[42px]"
              >
                Your Health Journey Deserves a Personalised Plan.
              </h2>
            </SectionHeadingBox>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5A4F54] sm:text-lg">
              Start with one conversation. Discover nutrition guidance that understands your body,
              your goals and your everyday life.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="btn-luxe-hover group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C77D8A] px-7 py-3.5 text-sm font-medium text-white whitespace-nowrap shrink-0 shadow-sm hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
              >
                <span>Book Your Online Consultation</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxe-hover inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#C77D8A]/40 bg-white px-7 py-3.5 text-sm font-medium text-[#353035] whitespace-nowrap shrink-0 hover:bg-[#F8E9EB]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
              >
                <MessageCircle className="h-4 w-4 text-[#A85E6C]" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
