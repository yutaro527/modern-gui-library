import type { Story } from '@ladle/react';
import { Button, ButtonProps } from './Button';

export const Default: Story<ButtonProps> = () => (
  <Button>デフォルトボタン</Button>
);

export const Primary: Story<ButtonProps> = () => (
  <Button variant="primary">プライマリボタン</Button>
);

export const Secondary: Story<ButtonProps> = () => (
  <Button variant="secondary">セカンダリボタン</Button>
);

export const Danger: Story<ButtonProps> = () => (
  <Button variant="danger">危険なボタン</Button>
);

export const Outline: Story<ButtonProps> = () => (
  <Button variant="outline">アウトラインボタン</Button>
);

export const Small: Story<ButtonProps> = () => (
  <Button size="small">小さいボタン</Button>
);

export const Medium: Story<ButtonProps> = () => (
  <Button size="medium">中サイズボタン</Button>
);

export const Large: Story<ButtonProps> = () => (
  <Button size="large">大きいボタン</Button>
);

export const Loading: Story<ButtonProps> = () => (
  <Button loading>読み込み中...</Button>
);

export const Disabled: Story<ButtonProps> = () => (
  <Button disabled>無効なボタン</Button>
);

export const WithClickHandler: Story<ButtonProps> = () => (
  <Button onClick={() => alert('ボタンがクリックされました！')}>
    クリックしてみて
  </Button>
);

export const AllVariants: Story = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary">プライマリ</Button>
    <Button variant="secondary">セカンダリ</Button>
    <Button variant="danger">危険</Button>
    <Button variant="outline">アウトライン</Button>
    <Button variant="gradient">グラデーション</Button>
    <Button variant="ghost">ゴースト</Button>
  </div>
);

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button size="small">小</Button>
    <Button size="medium">中</Button>
    <Button size="large">大</Button>
  </div>
);

// 新しいストーリーを追加
export const Gradient: Story<ButtonProps> = () => (
  <Button variant="gradient">グラデーションボタン</Button>
);

export const Ghost: Story<ButtonProps> = () => (
  <Button variant="ghost">ゴーストボタン</Button>
);

export const WithIcons: Story = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
    <Button leftIcon="🏠">ホーム</Button>
    <Button rightIcon="→">次へ</Button>
    <Button leftIcon="💾" rightIcon="✓">保存完了</Button>
    <Button variant="gradient" leftIcon="🚀">開始</Button>
  </div>
);

export const FullWidth: Story<ButtonProps> = () => (
  <div style={{ width: '300px' }}>
    <Button fullWidth>フルワイドボタン</Button>
  </div>
);

export const InteractiveDemo: Story = () => (
  <div style={{ display: 'grid', gap: '16px', maxWidth: '600px' }}>
    <h3>モダンボタンデモ</h3>
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="gradient" leftIcon="✨">
        グラデーション
      </Button>
      <Button variant="primary" rightIcon="🚀">
        プライマリ
      </Button>
      <Button variant="outline" leftIcon="👁️">
        アウトライン
      </Button>
    </div>
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="ghost" size="small">ゴースト（小）</Button>
      <Button variant="secondary" size="medium">セカンダリ（中）</Button>
      <Button variant="danger" size="large">危険（大）</Button>
    </div>
    <Button fullWidth variant="gradient" leftIcon="💎" rightIcon="🎉">
      フルワイド・グラデーション
    </Button>
  </div>
);