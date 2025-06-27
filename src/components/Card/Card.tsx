import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'gradient' | 'premium';
  size?: 'small' | 'medium' | 'large';
  padding?: 'none' | 'small' | 'medium' | 'large';
  hoverable?: boolean;
  clickable?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'top' | 'left' | 'right' | 'background';
  loading?: boolean;
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  padding = 'medium',
  hoverable = true,
  clickable = false,
  disabled = false,
  className = '',
  onClick,
  header,
  footer,
  image,
  imageAlt = '',
  imagePosition = 'top',
  loading = false,
  borderRadius = 'medium',
  ...props
}) => {
  const baseClass = 'modern-card';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    `${baseClass}--padding-${padding}`,
    `${baseClass}--radius-${borderRadius}`,
    hoverable && `${baseClass}--hoverable`,
    clickable && `${baseClass}--clickable`,
    disabled && `${baseClass}--disabled`,
    loading && `${baseClass}--loading`,
    image && `${baseClass}--with-image`,
    image && `${baseClass}--image-${imagePosition}`,
    className
  ].filter(Boolean).join(' ');

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || loading) return;
    onClick?.(event);
  };

  const cardContent = (
    <>
      {image && imagePosition === 'top' && (
        <div className={`${baseClass}__image-container ${baseClass}__image-container--top`}>
          <img 
            src={image} 
            alt={imageAlt} 
            className={`${baseClass}__image`}
          />
        </div>
      )}
      
      <div className={`${baseClass}__content`}>
        {image && imagePosition === 'left' && (
          <div className={`${baseClass}__image-container ${baseClass}__image-container--left`}>
            <img 
              src={image} 
              alt={imageAlt} 
              className={`${baseClass}__image`}
            />
          </div>
        )}
        
        <div className={`${baseClass}__body`}>
          {header && (
            <div className={`${baseClass}__header`}>
              {header}
            </div>
          )}
          
          <div className={`${baseClass}__main`}>
            {children}
          </div>
          
          {footer && (
            <div className={`${baseClass}__footer`}>
              {footer}
            </div>
          )}
        </div>
        
        {image && imagePosition === 'right' && (
          <div className={`${baseClass}__image-container ${baseClass}__image-container--right`}>
            <img 
              src={image} 
              alt={imageAlt} 
              className={`${baseClass}__image`}
            />
          </div>
        )}
      </div>
      
      {loading && (
        <div className={`${baseClass}__loading-overlay`}>
          <div className={`${baseClass}__spinner`}></div>
        </div>
      )}
    </>
  );

  if (image && imagePosition === 'background') {
    return (
      <div
        className={classes}
        onClick={clickable ? handleClick : undefined}
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        {...props}
      >
        <div className={`${baseClass}__overlay`}>
          {cardContent}
        </div>
      </div>
    );
  }

  return (
    <div
      className={classes}
      onClick={clickable ? handleClick : undefined}
      {...props}
    >
      {cardContent}
    </div>
  );
};