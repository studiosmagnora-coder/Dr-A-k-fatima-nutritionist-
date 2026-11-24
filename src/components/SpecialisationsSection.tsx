import {
  Scale,
  Flower2,
  Activity,
  HeartPulse,
  Baby,
  Droplets,
  Flame,
  ClipboardList,
  ArrowUpRight,
} from 'lucide-react';
import { SPECIALISATION_ITEMS, type SpecialisationItem } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import {
  BotanicalSprigSVG,
  FoodDoodleCitrusSVG,
  FoodDoodleStrawberrySVG,
} from './JournalArt';
import { Reveal } from './Reveal';

const ICON_MAP: Record<SpecialisationItem['iconName'], typeof Scale> = {
  scale: Scale,
  flower: Flower2,
  activity: Activity,
  heartPulse: HeartPulse,
  baby: Baby,
  droplets: Droplets,
  flame: Flame,
  clipboardList: ClipboardList,
};

interface SpecialisationsSectionProps {
  onSelectSpecialisation: (item: SpecialisationItem) => void;
}

export function SpecialisationsSection({
  onSelectSpecialisation,
}: SpecialisationsSectionProps) {
  return (
    <section
      id="specialisations"
      aria-labelledby="specialisations-heading"
      className="relative overflow-hidden border-t border-[#C77D8A]/12 bg-[#F8E9EB]/32 py-16 sm:py-20 lg:py-24"
    >
      <FoodDoodleStrawberrySVG className="doodle-float-slow pointer-events-none absolute top-14 left-6 hidden h-16 w-16 opacity-40 lg:block" />
      <FoodDoodleCitrusSVG className="pointer-events-none absolute top-20 right-8 hidden h-16 w-16 opacity-40 lg:block" />
      <BotanicalSprigSVG className="pointer-events-none absolute -bottom-6 left-10 hidden h-36 w-36 opacity-[0.14] lg:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeadingBox eyebrow="Core Clinical Focus" tone="on-blush">
              <h2
                id="specialisations-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                Specialised Nutrition Support for Every Stage of a Woman’s Health Journey
              </h2>
            </SectionHeadingBox>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALISATION_ITEMS.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <Reveal key={item.id} delay={idx * 0.03}>
                <article className="journal-card flex h-full flex-col justify-between rounded-2xl border border-[#C77D8A]/18 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C77D8A]/40">
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8E9EB] text-[#A85E6C]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#353035]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[#5A4F54]">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#C77D8A]/12 pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectSpecialisation(item)}
                      className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[#A85E6C] transition-colors hover:text-[#353035] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
