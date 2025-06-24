import type { Story } from '@ladle/react';
import { Card, CardProps } from './Card';
import { Button } from '../Button';

export const Default: Story<CardProps> = () => (
  <Card>
    <h3 style={{ margin: '0 0 8px 0' }}>デフォルトカード</h3>
    <p style={{ margin: 0, color: '#6b7280' }}>これは基本的なカードコンポーネントです。</p>
  </Card>
);

export const Outlined: Story<CardProps> = () => (
  <Card variant="outlined">
    <h3 style={{ margin: '0 0 8px 0' }}>アウトラインカード</h3>
    <p style={{ margin: 0, color: '#6b7280' }}>枠線があるカードです。</p>
  </Card>
);

export const Clickable: Story<CardProps> = () => (
  <Card clickable onClick={() => alert('カードがクリックされました!')}>
    <h3 style={{ margin: '0 0 8px 0' }}>クリック可能なカード</h3>
    <p style={{ margin: 0, color: '#6b7280' }}>このカードはクリックできます。</p>
  </Card>
);

export const WithContent: Story = () => (
  <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
    <Card>
      <img src="https://via.placeholder.com/300x200" alt="サンプル画像" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} />
      <h3 style={{ margin: '0 0 8px 0' }}>画像付きカード</h3>
      <p style={{ margin: '0 0 16px 0', color: '#6b7280' }}>画像とテキストを含むカードです。</p>
      <Button>詳細を見る</Button>
    </Card>
    
    <Card variant="outlined">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h3 style={{ margin: 0 }}>アクション付きカード</h3>
        <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>2分前</span>
      </div>
      <p style={{ margin: '0 0 16px 0', color: '#6b7280' }}>複数のアクションボタンがあるカードです。</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="small">編集</Button>
        <Button size="small" variant="outline">削除</Button>
      </div>
    </Card>
  </div>
);