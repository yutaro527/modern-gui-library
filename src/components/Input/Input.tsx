import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorText?: string;
  variant?: 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  errorText,
  variant = 'outlined',
  size = 'medium',
  fullWidth = false,
  startIcon,
  endIcon,
  loading = false,
  className = '',
  disabled,
  required,
  id,
  ...props
}, ref) => {
  const hasError = Boolean(errorText);
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const baseClass = 'modern-input';
  const wrapperClasses = [
    `${baseClass}__wrapper`,
    fullWidth && `${baseClass}__wrapper--full-width`,
    className
  ].filter(Boolean).join(' ');

  const fieldClasses = [
    `${baseClass}__field`,
    `${baseClass}__field--${variant}`,
    `${baseClass}__field--${size}`,
    hasError && `${baseClass}__field--error`,
    disabled && `${baseClass}__field--disabled`,
    loading && `${baseClass}__field--loading`,
    (startIcon || endIcon) && `${baseClass}__field--with-icons`,
    startIcon && `${baseClass}__field--with-start-icon`,
    endIcon && `${baseClass}__field--with-end-icon`
  ].filter(Boolean).join(' ');

  const inputClasses = [
    `${baseClass}__input`
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label 
          htmlFor={inputId} 
          className={`${baseClass}__label ${required ? `${baseClass}__label--required` : ''}`}
        >
          {label}
        </label>
      )}
      
      <div className={fieldClasses}>
        {startIcon && (
          <div className={`${baseClass}__icon ${baseClass}__icon--start`}>
            {startIcon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          disabled={disabled || loading}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            [
              helperText && `${inputId}-helper`,
              errorText && `${inputId}-error`
            ].filter(Boolean).join(' ') || undefined
          }
          {...props}
        />
        
        {loading && (
          <div className={`${baseClass}__icon ${baseClass}__icon--end`}>
            <div className={`${baseClass}__spinner`} />
          </div>
        )}
        
        {!loading && endIcon && (
          <div className={`${baseClass}__icon ${baseClass}__icon--end`}>
            {endIcon}
          </div>
        )}
      </div>
      
      {(helperText || errorText) && (
        <div className={`${baseClass}__text`}>
          {errorText ? (
            <div 
              id={`${inputId}-error`}
              className={`${baseClass}__error`}
              role="alert"
            >
              {errorText}
            </div>
          ) : (
            helperText && (
              <div 
                id={`${inputId}-helper`}
                className={`${baseClass}__helper`}
              >
                {helperText}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
});