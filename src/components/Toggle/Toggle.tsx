import React from 'react';
import './Toggle.css';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  disabled = false,
  size = 'medium',
  label,
  className = ''
}) => {
  const baseClass = 'modern-toggle';
  const wrapperClasses = [
    `${baseClass}__wrapper`,
    className
  ].filter(Boolean).join(' ');

  const switchClasses = [
    `${baseClass}__switch`,
    `${baseClass}__switch--${size}`,
    checked && `${baseClass}__switch--checked`,
    disabled && `${baseClass}__switch--disabled`
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div className={wrapperClasses}>
      <div
        className={switchClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        <div className={`${baseClass}__thumb`} />
      </div>
      {label && (
        <span className={`${baseClass}__label`}>
          {label}
        </span>
      )}
    </div>
  );
};