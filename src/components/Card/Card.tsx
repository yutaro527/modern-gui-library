import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'elevation' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  clickable?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevation',
  padding = 'medium',
  clickable = false,
  hover = true,
  className = '',
  onClick,
  ...props
}) => {
  const baseClass = 'modern-card';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--padding-${padding}`,
    clickable && `${baseClass}--clickable`,
    hover && `${baseClass}--hover`,
    className
  ].filter(Boolean).join(' ');

  const Component = clickable ? 'button' : 'div';

  return (
    <Component
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};