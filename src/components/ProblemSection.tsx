import { Scale, Sparkles, Activity, Heart, Baby, ShieldCheck } from 'lucide-react';
import { PROBLEM_ITEMS, type ProblemItem } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import { BotanicalSprigSVG, TinyHeartSVG, TornPaperEdge } from './JournalArt';
import { Reveal } from './Reveal';

const ICON_MAP: Record<ProblemItem['iconName'], typeof Scale> = {
  scale: Scale,
  sparkles: Sparkles,
  activity: Activity,
  heart: Heart,
  baby: Baby,
  shield: ShieldCheck,
};

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problems-heading"
      className="relative overflow-hidden border-t border-[#C77D8A]/12 bg-[#F8E9EB]/38 pt-4 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="-mt-4 mb-12">
        <TornPaperEdge fill="#FFFCF8" flip />
      </div>
      <BotanicalSprigSVG className="pointer-events-none absolute top-14 right-4 hidden h-44 w-44 -rotate-12 opacity-[0.15] lg:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeadingBox tone="on-blush">
              <h2
                id="problems-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                Struggling With Your Weight Despite Trying Everything?
              </h2>
            </SectionHeadingBox>
            <p className="mt-5 text-base leading-relaxed text-[#5A4F54] sm:text-lg">
              Sometimes, weight management is about more than eating less or exercising more.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_ITEMS.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <Reveal key={item.id} delay={idx * 0.04}>
                <article className="journal-card flex h-full flex-col justify-between rounded-2xl border border-[#C77D8A]/18 p-7 transition-transform duration-200 hover:-translate-y-0.5">
                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8E9EB] text-[#A85E6C]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#353035]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#5A4F54]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-2 inline-flex items-center gap-1.5">
              <span className="font-script text-2xl text-[#A85E6C]">One step at a time</span>
              <TinyHeartSVG className="h-4 w-4" />
            </div>
            <p className="font-serif text-xl italic leading-relaxed text-[#49343C] sm:text-2xl">
              “You’re not alone. Your nutrition plan should understand your health needs, daily
              routine and individual challenges.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
