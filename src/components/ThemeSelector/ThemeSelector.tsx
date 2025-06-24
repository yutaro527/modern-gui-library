import React from 'react';
import { useTheme, ThemeName } from '../../theme/ThemeProvider';
import './ThemeSelector.css';

export interface ThemeSelectorProps {
  className?: string;
  variant?: 'dropdown' | 'tabs' | 'buttons';
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  showPreview?: boolean;
}

const themeDisplayNames: Record<ThemeName, string> = {
  light: 'ライト',
  dark: 'ダーク',
  blue: 'ブルー',
  green: 'グリーン',
  purple: 'パープル',
  orange: 'オレンジ'
};

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  className = '',
  variant = 'dropdown',
  size = 'medium',
  showLabel = true,
  showPreview = true
}) => {
  const { theme, setTheme, availableThemes } = useTheme();

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };

  const baseClass = `theme-selector theme-selector--${variant} theme-selector--${size}`;
  const classes = `${baseClass} ${className}`.trim();

  if (variant === 'dropdown') {
    return (
      <div className={classes}>
        {showLabel && (
          <label htmlFor="theme-select" className="theme-selector__label">
            テーマ
          </label>
        )}
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => handleThemeChange(e.target.value as ThemeName)}
          className="theme-selector__select"
        >
          {availableThemes.map((themeName) => (
            <option key={themeName} value={themeName}>
              {themeDisplayNames[themeName]}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (variant === 'tabs') {
    return (
      <div className={classes}>
        {showLabel && (
          <div className="theme-selector__label">
            テーマ
          </div>
        )}
        <div className="theme-selector__tabs">
          {availableThemes.map((themeName) => (
            <button
              key={themeName}
              onClick={() => handleThemeChange(themeName)}
              className={`theme-selector__tab ${
                theme === themeName ? 'theme-selector__tab--active' : ''
              }`}
              data-theme={themeName}
            >
              {showPreview && (
                <div className={`theme-selector__preview theme-selector__preview--${themeName}`} />
              )}
              {themeDisplayNames[themeName]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      {showLabel && (
        <div className="theme-selector__label">
          テーマ
        </div>
      )}
      <div className="theme-selector__buttons">
        {availableThemes.map((themeName) => (
          <button
            key={themeName}
            onClick={() => handleThemeChange(themeName)}
            className={`theme-selector__button ${
              theme === themeName ? 'theme-selector__button--active' : ''
            }`}
            data-theme={themeName}
            title={themeDisplayNames[themeName]}
          >
            {showPreview && (
              <div className={`theme-selector__preview theme-selector__preview--${themeName}`} />
            )}
            {themeDisplayNames[themeName]}
          </button>
        ))}
      </div>
    </div>
  );
};