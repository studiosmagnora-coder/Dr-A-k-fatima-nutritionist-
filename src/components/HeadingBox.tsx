import type { ReactNode } from 'react';
import { FloralBloomSVG, HandDrawnUnderlineSVG } from './JournalArt';

interface SectionHeadingBoxProps {
  eyebrow?: string;
  children: ReactNode;
  align?: 'center' | 'left';
  tone?: 'on-ivory' | 'on-blush';
  className?: string;
}

export function SectionHeadingBox({
  eyebrow,
  children,
  align = 'center',
  tone = 'on-ivory',
  className = '',
}: SectionHeadingBoxProps) {
  const isCentered = align === 'center';
  const surfaceClass =
    tone === 'on-ivory'
      ? 'bg-gradient-to-br from-[#F8E9EB]/90 via-[#F8E9EB]/75 to-[#F2D9DE]/70'
      : 'bg-gradient-to-br from-[#F2D8DD]/75 via-[#F6E3E7]/80 to-[#FFFCF8]/85';

  return (
    <div
      className={`relative rounded-2xl border border-[#C6A36B]/35 px-5 py-4 shadow-[0_8px_24px_-12px_rgba(168,94,108,0.22)] ring-1 ring-inset ring-white/55 sm:px-7 sm:py-5 ${surfaceClass} ${
        isCentered ? 'inline-block text-center' : 'block text-left'
      } ${className}`}
    >
      <FloralBloomSVG
        className="pointer-events-none absolute -top-4 -right-4 h-10 w-10 opacity-45 sm:-top-5 sm:-right-5 sm:h-12 sm:w-12"
      />
      {eyebrow && (
        <p className="mb-2 text-xs font-medium tracking-[0.14em] text-[#A85E6C]">
          {eyebrow}
        </p>
      )}
      {children}
      <div
        aria-hidden="true"
        className={`mt-3 flex items-center ${isCentered ? 'justify-center' : 'justify-start'}`}
      >
        <HandDrawnUnderlineSVG className="h-3 w-28 opacity-85" />
      </div>
    </div>
  );
}
