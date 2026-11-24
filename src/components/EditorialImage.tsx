import { useState } from 'react';
import { Leaf } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[3/4]',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8E9EB] via-[#FFFCF8] to-[#F3DDE1] p-8 text-center ${aspectClass} ${className}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#C77D8A]/30 bg-white/80 text-[#C77D8A]">
          <Leaf className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="font-serif text-base text-[#353035]">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
