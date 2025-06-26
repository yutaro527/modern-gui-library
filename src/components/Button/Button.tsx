import React from 'react';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'gradient' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const baseClass = 'modern-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    loading && `${baseClass}--loading`,
    disabled && `${baseClass}--disabled`,
    fullWidth && `${baseClass}--full-width`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className={`${baseClass}__spinner`} />}
      <span className={`${baseClass}__content`} style={{ opacity: loading ? 0 : 1 }}>
        {leftIcon && <span className={`${baseClass}__icon ${baseClass}__icon--left`}>{leftIcon}</span>}
        <span className={`${baseClass}__text`}>{children}</span>
        {rightIcon && <span className={`${baseClass}__icon ${baseClass}__icon--right`}>{rightIcon}</span>}
      </span>
    </button>
  );
};