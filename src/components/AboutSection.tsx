import { ArrowRight, GraduationCap } from 'lucide-react';
import { BRAND_CONFIG, GENERATED_IMAGES } from '../config/brand';
import { EditorialImage } from './EditorialImage';
import { SectionHeadingBox } from './HeadingBox';
import { BotanicalSprigSVG, PolaroidFrame, WashiTape } from './JournalArt';
import { Reveal } from './Reveal';

interface AboutSectionProps {
  onBookClick: () => void;
}

export function AboutSection({ onBookClick }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="journal-paper-surface relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <BotanicalSprigSVG className="pointer-events-none absolute -bottom-6 left-4 hidden h-40 w-40 opacity-[0.14] lg:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-7">
            <Reveal>
              <SectionHeadingBox
                eyebrow={BRAND_CONFIG.subtitle}
                align="left"
                tone="on-ivory"
              >
                <h2
                  id="about-heading"
                  className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
                >
                  Meet {BRAND_CONFIG.professionalName}
                </h2>
              </SectionHeadingBox>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#A85E6C]">
                <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>B.Sc. &amp; M.Sc. in Dietetics</span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-[#5A4F54] sm:text-[17px]">
                {BRAND_CONFIG.professionalName} holds B.Sc. and M.Sc. qualifications in Dietetics
                and focuses on personalised nutrition guidance for women’s health, weight
                management and clinical dietary needs. Her approach centres on understanding
                individual concerns and creating practical nutrition strategies that fit real life.
              </p>

              <blockquote className="journal-card relative mt-8 rounded-2xl border border-[#C6A36B]/30 p-6">
                <WashiTape tone="blush" className="absolute -top-2.5 left-6 -rotate-2" />
                <p className="font-serif text-xl italic leading-relaxed text-[#49343C]">
                  “Every woman deserves a nutrition plan that respects her body, health needs and
                  lifestyle.”
                </p>
              </blockquote>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="btn-luxe-hover group inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C77D8A] px-7 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 shadow-sm hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
                >
                  <span>Book an Online Consultation</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <Reveal className="h-full">
              <PolaroidFrame
                caption={BRAND_CONFIG.professionalName}
                tilt="right"
                tapeTone="gold"
              >
                <EditorialImage
                  src={GENERATED_IMAGES.dietitianPortrait}
                  alt={`Portrait of ${BRAND_CONFIG.professionalName}, ${BRAND_CONFIG.qualification}`}
                  className="h-full w-full object-cover object-top lg:h-full"
                  aspectClass="aspect-[3/4]"
                />
              </PolaroidFrame>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
