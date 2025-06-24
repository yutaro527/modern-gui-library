import React, { useState, useEffect, useCallback } from 'react';
import './Slideshow.css';

export interface SlideItem {
  id: string | number;
  image?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
}

export interface SlideshowProps {
  slides: SlideItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
}

export const Slideshow: React.FC<SlideshowProps> = ({
  slides,
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
  infinite = true,
  className = '',
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    onSlideChange?.(index);
    
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, onSlideChange]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    const nextIndex = infinite 
      ? (currentIndex + 1) % slides.length
      : Math.min(currentIndex + 1, slides.length - 1);
    
    goToSlide(nextIndex);
  }, [currentIndex, slides.length, infinite, isTransitioning, goToSlide]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    const prevIndex = infinite
      ? currentIndex === 0 ? slides.length - 1 : currentIndex - 1
      : Math.max(currentIndex - 1, 0);
    
    goToSlide(prevIndex);
  }, [currentIndex, slides.length, infinite, isTransitioning, goToSlide]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  if (!slides.length) return null;

  const baseClass = 'modern-slideshow';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={`${baseClass}__container`}>
        <div 
          className={`${baseClass}__track`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${baseClass}__slide ${
                index === currentIndex ? `${baseClass}__slide--active` : ''
              }`}
            >
              {slide.content ? (
                slide.content
              ) : (
                <>
                  {slide.image && (
                    <img
                      src={slide.image}
                      alt={slide.title || `Slide ${index + 1}`}
                      className={`${baseClass}__image`}
                    />
                  )}
                  {(slide.title || slide.description) && (
                    <div className={`${baseClass}__content`}>
                      {slide.title && (
                        <h3 className={`${baseClass}__title`}>{slide.title}</h3>
                      )}
                      {slide.description && (
                        <p className={`${baseClass}__description`}>{slide.description}</p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {showArrows && slides.length > 1 && (
          <>
            <button
              className={`${baseClass}__arrow ${baseClass}__arrow--prev`}
              onClick={prevSlide}
              disabled={!infinite && currentIndex === 0}
              aria-label="Previous slide"
            >
              &#8249;
            </button>
            <button
              className={`${baseClass}__arrow ${baseClass}__arrow--next`}
              onClick={nextSlide}
              disabled={!infinite && currentIndex === slides.length - 1}
              aria-label="Next slide"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {showDots && slides.length > 1 && (
        <div className={`${baseClass}__dots`}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${baseClass}__dot ${
                index === currentIndex ? `${baseClass}__dot--active` : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};