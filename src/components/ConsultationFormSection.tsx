import { useState, useEffect, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, MessageCircle, Send } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brand';
import { CONCERN_OPTIONS, CONSULTATION_TYPE_OPTIONS } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import { TinyHeartSVG, WashiTape } from './JournalArt';
import { Reveal } from './Reveal';

interface ConsultationFormSectionProps {
  preselectedConcern?: string;
  preselectedConsultationType?: string;
}

interface FormValues {
  fullName: string;
  whatsappNumber: string;
  email: string;
  age: string;
  primaryConcern: string;
  consultationType: string;
  goals: string;
  preferredTime: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

function normalizeIndianMobile(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

function isValidIndianMobile(raw: string): boolean {
  const tenDigits = normalizeIndianMobile(raw);
  return /^[6-9]\d{9}$/.test(tenDigits);
}

export function ConsultationFormSection({
  preselectedConcern,
  preselectedConsultationType,
}: ConsultationFormSectionProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    age: '',
    primaryConcern: preselectedConcern || CONCERN_OPTIONS[0],
    consultationType: preselectedConsultationType || CONSULTATION_TYPE_OPTIONS[0],
    goals: '',
    preferredTime: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
    whatsappHref?: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedConcern && CONCERN_OPTIONS.includes(preselectedConcern)) {
      setValues((prev) => ({ ...prev, primaryConcern: preselectedConcern }));
    }
  }, [preselectedConcern]);

  useEffect(() => {
    if (
      preselectedConsultationType &&
      CONSULTATION_TYPE_OPTIONS.includes(preselectedConsultationType)
    ) {
      setValues((prev) => ({ ...prev, consultationType: preselectedConsultationType }));
    }
  }, [preselectedConsultationType]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!values.whatsappNumber.trim()) {
      nextErrors.whatsappNumber = 'Please enter your 10-digit WhatsApp mobile number.';
    } else if (!isValidIndianMobile(values.whatsappNumber)) {
      nextErrors.whatsappNumber =
        'Please enter a valid 10-digit Indian mobile number (starting with 6–9, with or without +91).';
    }

    if (values.email.trim()) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
      if (!emailOk) {
        nextErrors.email = 'Please enter a valid email address or leave this field blank.';
      }
    }

    const numericAge = Number(values.age);
    if (!values.age.trim() || Number.isNaN(numericAge) || numericAge < 16 || numericAge > 95) {
      nextErrors.age = 'Please enter a valid age between 16 and 95.';
    }

    if (!values.primaryConcern) {
      nextErrors.primaryConcern = 'Please select your primary concern.';
    }

    if (!values.consultationType) {
      nextErrors.consultationType = 'Please select a preferred consultation type.';
    }

    if (!values.consent) {
      nextErrors.consent = 'Please confirm your consent so we may contact you regarding your enquiry.';
    }

    return nextErrors;
  };

  const buildWhatsappSummaryUrl = () => {
    const cleanPhone = normalizeIndianMobile(values.whatsappNumber);
    const lines = [
      `Hello, I would like to enquire about an online nutrition consultation with ${BRAND_CONFIG.professionalName}.`,
      '',
      `Name: ${values.fullName.trim()}`,
      `WhatsApp: +91 ${cleanPhone}`,
      values.email.trim() ? `Email: ${values.email.trim()}` : null,
      `Age: ${values.age.trim()}`,
      `Primary Concern: ${values.primaryConcern}`,
      `Preferred Option: ${values.consultationType}`,
      values.preferredTime.trim() ? `Preferred Time: ${values.preferredTime.trim()}` : null,
      values.goals.trim() ? `Goals: ${values.goals.trim()}` : null,
    ].filter(Boolean);

    return getWhatsAppUrl(lines.join('\n'));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const whatsappHref = buildWhatsappSummaryUrl();

    if (BRAND_CONFIG.CONSULTATION_WEBHOOK_URL) {
      setSubmitting(true);
      try {
        const response = await fetch(BRAND_CONFIG.CONSULTATION_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: values.fullName.trim(),
            whatsappNumber: `+91${normalizeIndianMobile(values.whatsappNumber)}`,
            email: values.email.trim() || undefined,
            age: Number(values.age),
            primaryConcern: values.primaryConcern,
            consultationType: values.consultationType,
            goals: values.goals.trim() || undefined,
            preferredTime: values.preferredTime.trim() || undefined,
            consent: values.consent,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error('Submission request failed');
        }

        setSubmitStatus({
          type: 'success',
          message:
            'Thank you. Your consultation enquiry has been received. Our team will contact you shortly to share available slots and next steps.',
          whatsappHref,
        });
      } catch {
        setSubmitStatus({
          type: 'error',
          message:
            'We could not submit the form automatically right now. Please continue with your pre-filled WhatsApp enquiry below.',
          whatsappHref,
        });
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // No backend configured: WhatsApp enquiry fallback (honest — does not claim instant auto-booking)
    setSubmitStatus({
      type: 'success',
      message:
        'Your enquiry details are validated and ready. Click the button below to send your consultation enquiry via WhatsApp, and our team will respond with available online slots and consultation details.',
      whatsappHref,
    });
  };

  return (
    <section
      id="consultation-form"
      aria-labelledby="form-heading"
      className="border-t border-[#C77D8A]/12 bg-[#F8E9EB]/42 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <SectionHeadingBox eyebrow="Consultation Enquiry" tone="on-blush">
              <h2
                id="form-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                Let’s Understand Your Health Goals.
              </h2>
            </SectionHeadingBox>
            <p className="mt-4 text-base text-[#5A4F54]">
              Take the first step towards a more personalised nutrition journey.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="journal-card relative mt-10 rounded-3xl border border-[#C77D8A]/22 p-6 pt-8 sm:p-10"
          >
            <WashiTape
              tone="blush"
              className="absolute -top-2.5 left-1/2 -translate-x-1/2 -rotate-1"
            />
            <div className="mb-5 flex items-center justify-end gap-1.5">
              <span className="font-script text-xl text-[#A85E6C]">Made with care</span>
              <TinyHeartSVG className="h-4 w-4" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-[#353035]"
                >
                  Full Name <span className="text-[#A85E6C]">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.fullName}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, fullName: e.target.value }));
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                  }}
                  placeholder="Enter your full name"
                  aria-invalid={Boolean(errors.fullName)}
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] placeholder:text-[#88747D]/70 focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                />
                {errors.fullName && (
                  <p role="alert" className="mt-1.5 text-xs text-[#A8384B]">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label
                  htmlFor="whatsappNumber"
                  className="block text-sm font-medium text-[#353035]"
                >
                  WhatsApp Number <span className="text-[#A85E6C]">*</span>
                </label>
                <input
                  id="whatsappNumber"
                  name="whatsappNumber"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  value={values.whatsappNumber}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, whatsappNumber: e.target.value }));
                    if (errors.whatsappNumber) {
                      setErrors((prev) => ({ ...prev, whatsappNumber: undefined }));
                    }
                  }}
                  placeholder="+91 98765 43210"
                  aria-invalid={Boolean(errors.whatsappNumber)}
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] tabular-nums placeholder:text-[#88747D]/70 focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                />
                {errors.whatsappNumber && (
                  <p role="alert" className="mt-1.5 text-xs text-[#A8384B]">
                    {errors.whatsappNumber}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#353035]">
                  Email Address <span className="font-normal text-[#88747D]">(optional)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] placeholder:text-[#88747D]/70 focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 text-xs text-[#A8384B]">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-[#353035]">
                  Age <span className="text-[#A85E6C]">*</span>
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min={16}
                  max={95}
                  required
                  value={values.age}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, age: e.target.value }));
                    if (errors.age) setErrors((prev) => ({ ...prev, age: undefined }));
                  }}
                  placeholder="e.g. 32"
                  aria-invalid={Boolean(errors.age)}
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] tabular-nums placeholder:text-[#88747D]/70 focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                />
                {errors.age && (
                  <p role="alert" className="mt-1.5 text-xs text-[#A8384B]">
                    {errors.age}
                  </p>
                )}
              </div>

              {/* Primary Concern */}
              <div>
                <label
                  htmlFor="primaryConcern"
                  className="block text-sm font-medium text-[#353035]"
                >
                  Primary Concern <span className="text-[#A85E6C]">*</span>
                </label>
                <select
                  id="primaryConcern"
                  name="primaryConcern"
                  value={values.primaryConcern}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, primaryConcern: e.target.value }))
                  }
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                >
                  {CONCERN_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Consultation Type */}
              <div>
                <label
                  htmlFor="consultationType"
                  className="block text-sm font-medium text-[#353035]"
                >
                  Preferred Consultation Type <span className="text-[#A85E6C]">*</span>
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={values.consultationType}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, consultationType: e.target.value }))
                  }
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                >
                  {CONSULTATION_TYPE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Consultation Time */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-medium text-[#353035]"
                >
                  Preferred Consultation Time{' '}
                  <span className="font-normal text-[#88747D]">(optional)</span>
                </label>
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="text"
                  value={values.preferredTime}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, preferredTime: e.target.value }))
                  }
                  placeholder="e.g. Weekday mornings, 11 AM – 1 PM IST, or Evening after 6 PM"
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] placeholder:text-[#88747D]/70 focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                />
              </div>

              {/* Briefly Tell Us About Your Goals */}
              <div className="sm:col-span-2">
                <label htmlFor="goals" className="block text-sm font-medium text-[#353035]">
                  Briefly Tell Us About Your Goals{' '}
                  <span className="font-normal text-[#88747D]">(optional)</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={3}
                  value={values.goals}
                  onChange={(e) => setValues((prev) => ({ ...prev, goals: e.target.value }))}
                  placeholder="Share any relevant health focus, daily routine notes, or nutrition goals..."
                  className="mt-2 block w-full rounded-xl border border-[#C77D8A]/30 bg-[#FFFCF8] px-4 py-3 text-sm text-[#353035] placeholder:text-[#88747D]/70 focus:border-[#C77D8A] focus:ring-2 focus:ring-[#C77D8A]/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="mt-6">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, consent: e.target.checked }));
                    if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
                  }}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#C77D8A]/50 text-[#C77D8A] accent-[#C77D8A] focus:ring-[#C77D8A]"
                />
                <span className="text-sm text-[#5A4F54]">
                  I agree to be contacted regarding my consultation enquiry.{' '}
                  <span className="text-[#A85E6C]">*</span>
                </span>
              </label>
              {errors.consent && (
                <p role="alert" className="mt-1.5 text-xs text-[#A8384B]">
                  {errors.consent}
                </p>
              )}
            </div>

            {/* Submit & Secondary WhatsApp Option */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={submitting}
                className="btn-luxe-hover inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C77D8A] px-7 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>{submitting ? 'Submitting Enquiry...' : 'Request My Consultation'}</span>
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxe-hover inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#C77D8A]/35 bg-[#FFFCF8] px-6 py-3.5 text-sm font-medium text-[#353035] whitespace-nowrap hover:bg-[#F8E9EB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
              >
                <MessageCircle className="h-4 w-4 text-[#A85E6C]" aria-hidden="true" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {submitStatus && (
              <div
                role="status"
                className={`mt-6 rounded-2xl border p-5 ${
                  submitStatus.type === 'success'
                    ? 'border-[#C6A36B]/45 bg-[#F8E9EB]/55 text-[#353035]'
                    : 'border-[#A8384B]/30 bg-[#FFF5F6] text-[#5C1E29]'
                }`}
              >
                <div className="flex items-start gap-3">
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#A85E6C]"
                      aria-hidden="true"
                    />
                  ) : (
                    <AlertCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#A8384B]"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                    {submitStatus.whatsappHref && (
                      <div className="mt-4">
                        <a
                          href={submitStatus.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-[#353035] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#4A434A]"
                        >
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          <span>Send Enquiry on WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
