import type { Story } from '@ladle/react';
import { ThemeSelector, ThemeSelectorProps } from './ThemeSelector';
import { ThemeProvider } from '../../theme/ThemeProvider';

export const Default: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px' }}>
      <ThemeSelector />
    </div>
  </ThemeProvider>
);

export const Dropdown: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px' }}>
      <ThemeSelector variant="dropdown" />
    </div>
  </ThemeProvider>
);

export const Tabs: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px' }}>
      <ThemeSelector variant="tabs" />
    </div>
  </ThemeProvider>
);

export const Buttons: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px' }}>
      <ThemeSelector variant="buttons" />
    </div>
  </ThemeProvider>
);

export const Sizes: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3>Small</h3>
        <ThemeSelector variant="tabs" size="small" />
      </div>
      <div>
        <h3>Medium (Default)</h3>
        <ThemeSelector variant="tabs" size="medium" />
      </div>
      <div>
        <h3>Large</h3>
        <ThemeSelector variant="tabs" size="large" />
      </div>
    </div>
  </ThemeProvider>
);

export const WithoutLabel: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px' }}>
      <ThemeSelector variant="tabs" showLabel={false} />
    </div>
  </ThemeProvider>
);

export const WithoutPreview: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px' }}>
      <ThemeSelector variant="buttons" showPreview={false} />
    </div>
  </ThemeProvider>
);

export const AllVariants: Story<ThemeSelectorProps> = () => (
  <ThemeProvider>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3>Dropdown</h3>
        <ThemeSelector variant="dropdown" />
      </div>
      <div>
        <h3>Tabs</h3>
        <ThemeSelector variant="tabs" />
      </div>
      <div>
        <h3>Buttons</h3>
        <ThemeSelector variant="buttons" />
      </div>
    </div>
  </ThemeProvider>
);