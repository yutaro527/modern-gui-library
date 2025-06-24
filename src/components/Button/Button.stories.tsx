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
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button variant="primary">プライマリ</Button>
    <Button variant="secondary">セカンダリ</Button>
    <Button variant="danger">危険</Button>
    <Button variant="outline">アウトライン</Button>
  </div>
);

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button size="small">小</Button>
    <Button size="medium">中</Button>
    <Button size="large">大</Button>
  </div>
);