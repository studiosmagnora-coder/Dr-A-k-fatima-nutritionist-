import {
  Compass,
  Utensils,
  BookOpen,
  HeartHandshake,
  CalendarCheck,
  Laptop,
  ShoppingBag,
  Sprout,
} from 'lucide-react';
import { BENEFIT_ITEMS, type BenefitItem } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import { BotanicalSprigSVG, TinyHeartSVG } from './JournalArt';
import { Reveal } from './Reveal';

const ICON_MAP: Record<BenefitItem['iconName'], typeof Compass> = {
  compass: Compass,
  utensils: Utensils,
  bookOpen: BookOpen,
  heartHandshake: HeartHandshake,
  calendarCheck: CalendarCheck,
  laptop: Laptop,
  shoppingBag: ShoppingBag,
  sprout: Sprout,
};

export function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="journal-paper-surface relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <BotanicalSprigSVG className="pointer-events-none absolute top-10 right-6 hidden h-40 w-40 opacity-[0.14] lg:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeadingBox eyebrow="Sustainable Care Philosophy" tone="on-ivory">
              <h2
                id="benefits-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                More Than Weight Loss. A Healthier Relationship With Food.
              </h2>
            </SectionHeadingBox>
            <div className="mt-4 inline-flex items-center gap-1.5">
              <span className="font-script text-2xl text-[#49343C]">
                Healthy looks different on everyone
              </span>
              <TinyHeartSVG className="h-4 w-4" />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFIT_ITEMS.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <Reveal key={item.id} delay={idx * 0.03}>
                <div className="journal-card flex h-full flex-col rounded-2xl border border-[#C6A36B]/25 p-6 transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#C77D8A]/25 bg-[#F8E9EB]/70 text-[#A85E6C]">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg leading-snug font-medium text-[#353035]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A4F54]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
