import { Check, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import { FoodDoodleBowlSVG } from './JournalArt';
import { Reveal } from './Reveal';

interface ProgramsSectionProps {
  onSelectProgram: (consultationType: string) => void;
}

export function ProgramsSection({ onSelectProgram }: ProgramsSectionProps) {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="journal-paper-surface relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <FoodDoodleBowlSVG className="doodle-float-slow pointer-events-none absolute top-16 left-6 hidden h-18 w-18 opacity-40 lg:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeadingBox eyebrow="Consultation Options" tone="on-ivory">
              <h2
                id="programs-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                Choose the Support That Fits Your Journey
              </h2>
            </SectionHeadingBox>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-3">
          {PROGRAMS.map((program, idx) => (
            <Reveal key={program.id} delay={idx * 0.05} className="h-full">
              <article
                className={`flex h-full flex-col justify-between rounded-3xl p-8 transition-transform duration-200 hover:-translate-y-0.5 ${
                  program.featuredBorder
                    ? 'border border-[#C6A36B]/55 bg-[#F8E9EB]/35 shadow-sm'
                    : 'border border-[#C77D8A]/20 bg-white'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium tracking-[0.12em] text-[#88747D]">
                    <span>{program.cadenceNote}</span>
                    {program.tierLabel && (
                      <>
                        <span aria-hidden="true" className="text-[#C6A36B]">·</span>
                        <span className="text-[#A85E6C] uppercase">{program.tierLabel}</span>
                      </>
                    )}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-[#353035]">
                    {program.name}
                  </h3>

                  <div className="mt-5 border-b border-[#C77D8A]/15 pb-5">
                    <p className="font-serif text-2xl font-medium text-[#A85E6C] tabular-nums sm:text-3xl">
                      {program.pricePlaceholder}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] text-[#5A4F54]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8E9EB] text-[#A85E6C]">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(program.consultationTypeValue)}
                    className={`btn-luxe-hover group inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A] ${
                      program.featuredBorder
                        ? 'bg-[#C77D8A] text-white hover:bg-[#A85E6C]'
                        : 'border border-[#C77D8A]/40 bg-[#FFFCF8] text-[#353035] hover:border-[#C77D8A] hover:bg-[#F8E9EB]/60'
                    }`}
                  >
                    <span>{program.ctaLabel}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-8 text-center text-sm text-[#88747D]">
            Program duration, inclusions and pricing will be confirmed during consultation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
