import { HOW_IT_WORKS_STEPS } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import { Reveal } from './Reveal';

export function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="border-t border-[#C77D8A]/12 bg-[#F8E9EB]/38 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeadingBox eyebrow="Simple Process" tone="on-blush">
              <h2
                id="how-it-works-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                Your Journey, Made Simple
              </h2>
            </SectionHeadingBox>
          </div>
        </Reveal>

        {/* Horizontal Timeline on Desktop / Vertical Timeline on Mobile */}
        <div className="relative mt-14">
          {/* Desktop horizontal connector line */}
          <div
            aria-hidden="true"
            className="absolute top-7 right-[16.5%] left-[16.5%] hidden h-[1px] bg-[#C6A36B]/45 lg:block"
          />

          <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <Reveal key={step.stepNumber} delay={index * 0.06}>
                <li className="relative flex flex-row gap-5 lg:flex-col lg:items-center lg:text-center">
                  {/* Mobile vertical connector */}
                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-14 left-7 h-[calc(100%-1rem)] w-[1px] bg-[#C6A36B]/45 lg:hidden"
                    />
                  )}

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C6A36B]/55 bg-[#FFFCF8] font-serif text-lg font-medium text-[#A85E6C] tabular-nums shadow-xs">
                    {step.stepNumber}
                  </div>

                  <div className="rounded-2xl border border-[#C77D8A]/18 bg-white p-6 lg:mt-2 lg:w-full">
                    <h3 className="font-serif text-xl font-medium text-[#353035]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#5A4F54]">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
