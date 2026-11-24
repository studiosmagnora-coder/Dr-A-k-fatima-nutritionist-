import { ArrowRight } from 'lucide-react';
import { BRAND_CONFIG, GENERATED_IMAGES } from '../config/brand';
import { EditorialImage } from './EditorialImage';
import {
  BotanicalSprigSVG,
  CurvedArrowSVG,
  TinyHeartSVG,
  WashiTape,
} from './JournalArt';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="journal-paper-surface relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24"
    >
      {/* Subtle botanical organic aura & low-opacity line art */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#F8E9EB]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-[#C6A36B]/10 blur-3xl"
      />
      <BotanicalSprigSVG className="doodle-float-slow pointer-events-none absolute top-10 -left-6 h-40 w-40 opacity-[0.16] sm:left-4 sm:h-48 sm:w-48" />
      <BotanicalSprigSVG className="pointer-events-none absolute right-2 bottom-6 hidden h-44 w-44 rotate-12 opacity-[0.14] lg:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Copy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-[0.12em] text-[#88747D]">
              <span className="text-[#A85E6C]">Personalised Nutrition for Women</span>
              <span aria-hidden="true" className="text-[#C6A36B]">·</span>
              <span>{BRAND_CONFIG.subtitle}</span>
              <span aria-hidden="true" className="text-[#C6A36B]">·</span>
              <span>{BRAND_CONFIG.qualificationBadge}</span>
            </div>

            <div className="relative rounded-2xl border border-[#C6A36B]/50 bg-gradient-to-br from-[#E8C1C8] via-[#E8C1C8] to-[#EED0D6] px-6 py-5 shadow-[0_14px_34px_-12px_rgba(168,94,108,0.34)] ring-1 ring-inset ring-white/45 sm:rounded-3xl sm:px-8 sm:py-6">
              <div
                aria-hidden="true"
                className="mb-3.5 flex items-center gap-2.5"
              >
                <span className="h-[1.5px] w-14 bg-gradient-to-r from-[#C6A36B] via-[#DFC291] to-transparent" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#C6A36B]/85" />
              </div>
              <h1 className="font-serif text-[clamp(2rem,3.6vw,3.35rem)] leading-[1.12] font-bold tracking-tight text-[#353035]">
                Your Body Deserves More Than Another Diet.
              </h1>
              <div
                aria-hidden="true"
                className="mt-4 h-[1px] w-24 bg-gradient-to-r from-[#C6A36B]/80 to-transparent"
              />
            </div>

            <p className="mt-5 font-serif text-xl leading-snug text-[#A85E6C] sm:text-2xl">
              Feel Healthier. Balance Your Nutrition. Lose Weight with a Plan Designed Around You.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5A4F54] sm:text-[17px]">
              Get personalised online nutrition guidance for PCOS, insulin resistance,
              thyroid-related concerns, postpartum weight management, diabetes and metabolic health
              — with a plan built around your body, lifestyle and goals.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-7 flex flex-wrap items-end gap-4">
              <div className="flex flex-col items-start">
                <span className="offer-shimmer-label mb-1.5 pl-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Limited-Time Offer
                </span>
                <button
                  type="button"
                  onClick={onBookClick}
                  className="cta-hero-primary group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#C77D8A] px-7 py-3 text-sm font-semibold tracking-[0.05em] text-white uppercase whitespace-nowrap shrink-0 hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
                >
                  <span>Book Your Call Now</span>
                  <ArrowRight
                    className="cta-arrow-move h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <a
                href="#programs"
                className="btn-luxe-hover inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#C77D8A]/35 bg-white px-7 py-3 text-sm font-medium text-[#353035] whitespace-nowrap shrink-0 hover:border-[#C77D8A] hover:bg-[#F8E9EB]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
              >
                Explore Nutrition Programs
              </a>
            </div>

            {/* Clean unboxed trust indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#88747D]">
              <span className="font-medium text-[#353035]">Personalised Diet Plans</span>
              <span aria-hidden="true" className="text-[#C6A36B]">·</span>
              <span className="font-medium text-[#353035]">Women-Focused Nutrition</span>
              <span aria-hidden="true" className="text-[#C6A36B]">·</span>
              <span className="font-medium text-[#353035]">100% Online Consultations</span>
            </div>

            {/* Subtle journal-style highlight note with washi tape & handwritten annotation */}
            <div className="relative mt-9 max-w-xl">
              <div className="mb-1.5 flex items-center gap-1.5 pl-2">
                <span className="font-script text-xl text-[#49343C]">Your journey matters</span>
                <TinyHeartSVG className="h-4 w-4 opacity-80" />
                <CurvedArrowSVG className="-mb-2 h-6 w-9 opacity-80" />
              </div>
              <div className="journal-card relative rounded-2xl border border-[#C77D8A]/24 px-6 py-5">
                <WashiTape
                  tone="gold"
                  className="absolute -top-2.5 right-6 rotate-2"
                />
                <p className="font-serif text-base italic leading-relaxed text-[#49343C] sm:text-[17px]">
                  “Your health journey starts with understanding your body — not restricting it.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Editorial Photography */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-[#C77D8A]/15 bg-[#F8E9EB]/40 shadow-sm lg:min-h-[540px]">
              <EditorialImage
                src={GENERATED_IMAGES.heroWoman}
                alt="Calm adult woman enjoying herbal tea and fresh whole foods in a bright, sunlit wellness space"
                className="h-full w-full object-cover object-center lg:h-full"
                aspectClass="aspect-[3/4]"
                priority
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#353035]/20 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/40 bg-[#FFFCF8]/92 px-5 py-3.5 backdrop-blur-sm">
                <p className="font-serif text-sm font-medium text-[#353035]">
                  {BRAND_CONFIG.professionalName}
                </p>
                <p className="mt-0.5 text-xs text-[#88747D]">
                  {BRAND_CONFIG.positioning} · {BRAND_CONFIG.consultationType}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
