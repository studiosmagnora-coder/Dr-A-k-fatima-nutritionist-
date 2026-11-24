import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import { Reveal } from './Reveal';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-[#FFFCF8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <SectionHeadingBox eyebrow="Common Questions" tone="on-ivory">
              <h2
                id="faq-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                Frequently Asked Questions
              </h2>
            </SectionHeadingBox>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-[#C77D8A]/18 rounded-3xl border border-[#C77D8A]/18 bg-white px-6 sm:px-8">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-1">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    id={`${item.id}-trigger`}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-serif text-lg font-medium text-[#353035] transition-colors hover:text-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A] sm:text-xl"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#A85E6C] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`${item.id}-panel`}
                    role="region"
                    aria-labelledby={`${item.id}-trigger`}
                    className="pb-5 text-[15px] leading-relaxed text-[#5A4F54]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
