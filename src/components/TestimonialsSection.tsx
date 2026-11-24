import { useState, useEffect, useMemo } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { CLIENT_REVIEWS, type ClientReview } from '../data/content';
import { SectionHeadingBox } from './HeadingBox';
import { Reveal } from './Reveal';

const EXCERPT_CHAR_LIMIT = 148;

function renderHighlightedReview(text: string, phrases: string[], expanded: boolean) {
  let displayText = text;
  const isLong = text.length > EXCERPT_CHAR_LIMIT;

  if (!expanded && isLong) {
    const sliced = text.slice(0, EXCERPT_CHAR_LIMIT);
    const lastSpace = sliced.lastIndexOf(' ');
    displayText = `${lastSpace > 90 ? sliced.slice(0, lastSpace) : sliced}…`;
  }

  if (!phrases.length) {
    return displayText;
  }

  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = displayText.split(pattern);

  return parts.map((part, idx) => {
    const isMatch = phrases.some((p) => p.toLowerCase() === part.toLowerCase());
    if (isMatch) {
      return (
        <mark
          key={`${part}-${idx}`}
          className="rounded-sm bg-[#F8E9EB] px-1 py-0.5 font-medium text-[#353035]"
        >
          {part}
        </mark>
      );
    }
    return <span key={`${idx}-${part.slice(0, 8)}`}>{part}</span>;
  });
}

interface ReviewCardProps {
  review: ClientReview;
  isBlushSurface: boolean;
}

function ReviewCard({ review, isBlushSurface }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.review.length > EXCERPT_CHAR_LIMIT;

  return (
    <article
      className={`flex h-full flex-col justify-between rounded-3xl border border-[#C77D8A]/20 p-7 shadow-[0_8px_24px_-14px_rgba(168,94,108,0.2)] transition-all duration-200 hover:-translate-y-1 hover:border-[#C6A36B]/50 hover:shadow-[0_14px_30px_-14px_rgba(168,94,108,0.28)] ${
        isBlushSurface
          ? 'bg-gradient-to-br from-[#FFFCF8] via-[#F8E9EB]/65 to-[#F8E9EB]'
          : 'bg-white'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <Quote
            className="h-7 w-7 shrink-0 text-[#C6A36B]/80"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <div
            className="flex items-center gap-0.5"
            aria-label={`${review.rating} out of 5 stars`}
          >
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[#C6A36B] text-[#C6A36B]"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-[#5A4F54]">
          “{renderHighlightedReview(review.review, review.highlightedPhrases, expanded)}”
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="mt-2.5 inline-flex cursor-pointer items-center text-xs font-medium text-[#A85E6C] underline-offset-4 hover:text-[#353035] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      <div className="mt-6 border-t border-[#C77D8A]/15 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-serif text-base font-medium text-[#353035]">
            {review.reviewer}
          </p>
          {review.verified && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#A85E6C]">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Verified Google Review</span>
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-[#88747D]">
          <span>{review.sourceAttribution}</span>
          {review.date && (
            <>
              <span aria-hidden="true" className="text-[#C6A36B]">·</span>
              <span>{review.date}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [googleUrlNote, setGoogleUrlNote] = useState<boolean>(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalPages = Math.ceil(CLIENT_REVIEWS.length / cardsPerView);

  useEffect(() => {
    setCurrentPage((prev) => (prev >= totalPages ? 0 : prev));
  }, [totalPages]);

  const visibleReviews = useMemo(() => {
    const start = currentPage * cardsPerView;
    const slice = CLIENT_REVIEWS.slice(start, start + cardsPerView);
    // Pad the final desktop/tablet page cleanly so 3-card or 2-card view stays balanced
    if (slice.length < cardsPerView && CLIENT_REVIEWS.length >= cardsPerView) {
      return CLIENT_REVIEWS.slice(CLIENT_REVIEWS.length - cardsPerView);
    }
    return slice;
  }, [currentPage, cardsPerView]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const hasGoogleReviewsUrl = Boolean(BRAND_CONFIG.GOOGLE_REVIEWS_URL.trim());

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-[#C77D8A]/12 bg-[#F8E9EB]/35 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeadingBox eyebrow="Real Client Experiences" tone="on-blush">
              <h2
                id="testimonials-heading"
                className="font-serif text-3xl leading-tight font-bold text-[#353035] sm:text-4xl"
              >
                Real People. Real Experiences. Healthier Journeys.
              </h2>
            </SectionHeadingBox>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5A4F54]">
              Discover how personalised nutrition guidance has helped clients build healthier habits
              and work towards their wellness goals.
            </p>
          </div>
        </Reveal>

        {/* Carousel Grid */}
        <div
          className="mt-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <div key={`${currentPage}-${review.id}`} className="h-full">
                <ReviewCard
                  review={review}
                  isBlushSurface={index % 2 === 1}
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls: Arrows + Pagination Dots */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="btn-luxe-hover inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#C77D8A]/35 bg-white text-[#353035] shadow-2xs hover:border-[#C77D8A] hover:bg-[#F8E9EB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const isActive = idx === currentPage;
                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show testimonial group ${idx + 1} of ${totalPages}`}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-2.5 cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A] ${
                      isActive
                        ? 'w-7 bg-[#C77D8A]'
                        : 'w-2.5 bg-[#C77D8A]/30 hover:bg-[#C77D8A]/55'
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="btn-luxe-hover inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#C77D8A]/35 bg-white text-[#353035] shadow-2xs hover:border-[#C77D8A] hover:bg-[#F8E9EB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Google Reviews Button with Editable URL */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl border border-[#C6A36B]/35 bg-white/95 px-6 py-5 text-center shadow-xs sm:flex-row sm:text-left">
            <div>
              <p className="font-serif text-lg font-medium text-[#353035]">
                Google Reviews
              </p>
              <p className="mt-0.5 text-sm text-[#88747D]">
                {hasGoogleReviewsUrl
                  ? 'Read published Google reviews on our Google Business Profile.'
                  : googleUrlNote
                    ? 'Set BRAND_CONFIG.GOOGLE_REVIEWS_URL in src/config/brand.ts to link directly to your Google Business Profile.'
                    : 'Connect an editable Google Business Profile URL to view published reviews.'}
              </p>
            </div>

            {hasGoogleReviewsUrl ? (
              <a
                href={BRAND_CONFIG.GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxe-hover inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-[#C77D8A] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#A85E6C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setGoogleUrlNote((prev) => !prev)}
                className="btn-luxe-hover inline-flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2 rounded-full border border-[#C77D8A]/40 bg-[#FFFCF8] px-5 py-2 text-sm font-medium text-[#353035] hover:border-[#C77D8A] hover:bg-[#F8E9EB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C77D8A]"
              >
                <span>Google Reviews</span>
                <ExternalLink className="h-4 w-4 text-[#A85E6C]" aria-hidden="true" />
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
