import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

export const Default: Story = () => {
  const [checked, setChecked] = useState(false);
  return <Toggle checked={checked} onChange={setChecked} />;
};

export const WithLabel: Story = () => {
  const [checked, setChecked] = useState(true);
  return <Toggle checked={checked} onChange={setChecked} label="通知を有効にする" />;
};

export const Sizes: Story = () => {
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(true);
  const [large, setLarge] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle checked={small} onChange={setSmall} size="small" label="小サイズ" />
      <Toggle checked={medium} onChange={setMedium} size="medium" label="中サイズ（デフォルト）" />
      <Toggle checked={large} onChange={setLarge} size="large" label="大サイズ" />
    </div>
  );
};

export const Disabled: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Toggle checked={false} onChange={() => {}} disabled label="無効（OFF）" />
    <Toggle checked={true} onChange={() => {}} disabled label="無効（ON）" />
  </div>
);

export const SettingsExample: Story = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    soundEffects: false
  });
  
  const updateSetting = (key: keyof typeof settings) => (value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };
  
  return (
    <div style={{ maxWidth: '300px', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>設定</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Toggle 
          checked={settings.notifications} 
          onChange={updateSetting('notifications')} 
          label="プッシュ通知"
        />
        <Toggle 
          checked={settings.darkMode} 
          onChange={updateSetting('darkMode')} 
          label="ダークモード"
        />
        <Toggle 
          checked={settings.autoSave} 
          onChange={updateSetting('autoSave')} 
          label="自動保存"
        />
        <Toggle 
          checked={settings.soundEffects} 
          onChange={updateSetting('soundEffects')} 
          label="効果音"
        />
      </div>
    </div>
  );
};