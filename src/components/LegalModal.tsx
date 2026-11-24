import { useEffect } from 'react';
import { X } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export type LegalDocType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ docType, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!docType) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [docType, onClose]);

  if (!docType) return null;

  const isPrivacy = docType === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#353035]/45 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-[#C77D8A]/20 bg-[#FFFCF8] p-7 shadow-xl sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close legal notice"
          className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[#88747D] transition-colors hover:bg-[#F8E9EB] hover:text-[#353035]"
        >
          <X className="h-5 w-5" />
        </button>

        <h3
          id="legal-modal-title"
          className="pr-8 font-serif text-2xl font-medium text-[#353035]"
        >
          {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h3>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#5A4F54]">
          {isPrivacy ? (
            <>
              <p>
                {BRAND_CONFIG.professionalName} ({BRAND_CONFIG.subtitle}) respects your privacy and
                treats consultation enquiry details with care.
              </p>
              <p>
                Information submitted through the consultation enquiry form—such as your name,
                contact number, age, email address, and shared nutrition goals—is used solely to
                respond to your enquiry and coordinate requested online nutrition consultations.
              </p>
              <p>
                Your enquiry details are never sold or shared with third-party marketers. If you
                choose to continue your enquiry via WhatsApp, WhatsApp’s standard privacy terms also
                apply to messages transmitted through their platform.
              </p>
            </>
          ) : (
            <>
              <p>
                All online nutrition consultations offered by {BRAND_CONFIG.professionalName}{' '}
                ({BRAND_CONFIG.qualification}) provide personalised dietary and lifestyle guidance.
              </p>
              <p>
                Nutrition consultations do not replace diagnosis, medical treatment, emergency
                care, or ongoing advice from your treating physician or healthcare specialist.
                Please continue consulting your doctor for medical evaluations, prescriptions, and
                clinical clearance where appropriate.
              </p>
              <p>
                Consultation fees, program durations, and inclusions are confirmed prior to
                enrolment. Individual outcomes vary depending on personal health context, adherence,
                and biological factors.
              </p>
            </>
          )}
        </div>

        <div className="mt-7">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[42px] cursor-pointer items-center justify-center rounded-full bg-[#C77D8A] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#A85E6C]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
