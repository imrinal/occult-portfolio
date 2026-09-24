import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, className = '' }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Once revealed, we don't need to observe anymore (keeps it lightweight)
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`animate-on-scroll ${delay > 0 ? `reveal-delay-${delay}` : ''} ${isRevealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};