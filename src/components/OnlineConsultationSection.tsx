import { Check, ArrowRight } from 'lucide-react';
import { GENERATED_IMAGES } from '../config/brand';
import { ONLINE_FEATURES } from '../data/content';
import { EditorialImage } from './EditorialImage';
import { SectionHeadingBox } from './HeadingBox';
import { PolaroidFrame, TornPaperEdge } from './JournalArt';
import { Reveal } from './Reveal';

interface OnlineConsultationSectionProps {
  onBookClick: () => void;
}

export function OnlineConsultationSection({
  onBookClick,
}: OnlineConsultationSectionProps) {
  return (
    <section
      aria-labelledby="online-consultation-heading"
      className="relative overflow-hidden border-t border-[#C77D8A]/12 bg-[#F8E9EB]/32 pt-4 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="-mt-4 mb-12">
        <TornPaperEdge fill="#FFFCF8" flip />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal className="h-full">
              <PolaroidFrame caption="Guided from home" tilt="left" tapeTone="sage">
                <EditorialImage
                  src={GENERATED_IMAGES.onlineSession}
                  alt="Adult woman participating in an online nutrition consultation from her bright home dining room"
                  className="h-full w-full object-cover object-center lg:h-full"
                  aspectClass="aspect-[4/3]"
                />
              </PolaroidFrame>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6">
            <Reveal>
              <SectionHeadingBox eyebrow="100% Online Care" align="left" tone="on-blush">
                <h2
                  id="online-consultation-heading"
                  className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
                >
                  Expert Nutrition Guidance, Wherever You Are.
                </h2>
              </SectionHeadingBox>
              <p className="mt-4 text-base leading-relaxed text-[#5A4F54] sm:text-[17px]">
                Connect online from the comfort of your home. Get personalised nutrition guidance
                without travelling or rearranging your entire day.
              </p>

              <ul className="mt-7 space-y-3 border-y border-[#C77D8A]/18 py-6">
                {ONLINE_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[15px] text-[#353035]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#A85E6C] shadow-2xs">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="btn-luxe-hover group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C77D8A] px-8 py-3.5 text-sm font-medium text-white whitespace-nowrap shrink-0 shadow-sm hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
                >
                  <span>Schedule Your Online Consultation</span>
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
