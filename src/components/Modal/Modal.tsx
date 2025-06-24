import React, { useEffect, useRef } from 'react';
import './Modal.css';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // フォーカス管理
  useEffect(() => {
    if (isOpen) {
      // 現在のフォーカス要素を保存
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // モーダル内の最初のフォーカス可能要素にフォーカス
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    } else {
      // モーダルが閉じられたら元の要素にフォーカスを戻す
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  // body のスクロールを制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // フォーカストラップ
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const baseClass = 'modern-modal';
  const overlayClasses = [baseClass, className].filter(Boolean).join(' ');
  const contentClasses = [
    `${baseClass}__content`,
    `${baseClass}__content--${size}`
  ].filter(Boolean).join(' ');

  return (
    <div className={overlayClasses} onClick={handleOverlayClick}>
      <div 
        ref={modalRef}
        className={contentClasses}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${baseClass}__title` : undefined}
      >
        {(title || showCloseButton) && (
          <div className={`${baseClass}__header`}>
            {title && (
              <h2 id={`${baseClass}__title`} className={`${baseClass}__title`}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={`${baseClass}__close`}
                onClick={onClose}
                aria-label="モーダルを閉じる"
                type="button"
              >
                ×
              </button>
            )}
          </div>
        )}
        
        <div className={`${baseClass}__body`}>
          {children}
        </div>
      </div>
    </div>
  );
};