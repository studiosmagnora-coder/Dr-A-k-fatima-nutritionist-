import { ArrowRight, Check } from 'lucide-react';
import { BRAND_CONFIG, GENERATED_IMAGES } from '../config/brand';
import { SOLUTION_PILLARS } from '../data/content';
import { EditorialImage } from './EditorialImage';
import { SectionHeadingBox } from './HeadingBox';
import { FoodDoodleAvocadoSVG, PolaroidFrame } from './JournalArt';
import { Reveal } from './Reveal';

interface SolutionSectionProps {
  onBookClick: () => void;
}

export function SolutionSection({ onBookClick }: SolutionSectionProps) {
  return (
    <section
      aria-labelledby="solution-heading"
      className="journal-paper-surface relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <FoodDoodleAvocadoSVG className="doodle-float-slow pointer-events-none absolute right-6 bottom-10 hidden h-20 w-20 opacity-40 xl:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Polaroid-inspired Portrait Image */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <PolaroidFrame caption="Made with care" tilt="left" tapeTone="blush">
                <EditorialImage
                  src={GENERATED_IMAGES.dietitianPortrait}
                  alt={`${BRAND_CONFIG.professionalName}, ${BRAND_CONFIG.positioning}`}
                  className="h-full w-full object-cover object-top lg:h-full"
                  aspectClass="aspect-[3/4]"
                />
              </PolaroidFrame>
            </Reveal>
          </div>

          {/* Solution Narrative */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <SectionHeadingBox
                eyebrow="The Clinical Nutrition Difference"
                align="left"
                tone="on-ivory"
              >
                <h2
                  id="solution-heading"
                  className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
                >
                  A Personalised Nutrition Approach That Starts With YOU.
                </h2>
              </SectionHeadingBox>
              <p className="mt-5 text-base leading-relaxed text-[#5A4F54] sm:text-[17px]">
                {BRAND_CONFIG.professionalName} believes that every woman’s health journey is
                different. Instead of following restrictive, one-size-fits-all diets, she focuses on
                personalised nutrition planning based on your goals, food preferences, lifestyle and
                relevant health information.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3.5 border-y border-[#C77D8A]/18 py-6 sm:grid-cols-2">
                {SOLUTION_PILLARS.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3 text-[15px] text-[#353035]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8E9EB] text-[#A85E6C]">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="btn-luxe-hover group inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C77D8A] px-7 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 shadow-sm hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
                >
                  <span>Start Your Personalised Journey</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
