import { useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import type { SpecialisationItem } from '../data/content';

interface SpecialisationModalProps {
  item: SpecialisationItem | null;
  onClose: () => void;
  onEnquire: (concern: string) => void;
}

export function SpecialisationModal({
  item,
  onClose,
  onEnquire,
}: SpecialisationModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialisation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#353035]/45 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-[#C77D8A]/20 bg-[#FFFCF8] p-7 shadow-xl sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[#88747D] transition-colors hover:bg-[#F8E9EB] hover:text-[#353035] focus-visible:outline-2 focus-visible:outline-[#C77D8A]"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-xs font-medium tracking-[0.14em] text-[#A85E6C]">
          Specialised Nutrition Focus
        </p>

        <h3
          id="specialisation-modal-title"
          className="mt-2 pr-8 font-serif text-2xl font-medium text-[#353035] sm:text-3xl"
        >
          {item.title}
        </h3>

        <p className="mt-4 text-[15px] leading-relaxed text-[#5A4F54]">
          {item.detailedOverview}
        </p>

        <div className="mt-6 rounded-2xl border border-[#C77D8A]/18 bg-[#F8E9EB]/45 p-5">
          <p className="text-sm font-medium text-[#353035]">
            How consultations support your routine:
          </p>
          <ul className="mt-3 space-y-2.5">
            {item.nutritionFocus.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-[#5A4F54]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A85E6C]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-[#88747D]">
          Nutrition consultations offer dietary guidance alongside advice from your treating
          healthcare professional.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const concern = item.concernOption;
              onClose();
              onEnquire(concern);
            }}
            className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C77D8A] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
          >
            <span>Enquire for {item.title}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-full border border-[#C77D8A]/30 px-5 py-2.5 text-sm font-medium text-[#353035] transition-colors hover:bg-[#F8E9EB]/60"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
