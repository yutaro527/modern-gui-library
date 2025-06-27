import type { Story } from '@ladle/react';
import { Card, CardProps } from './Card';
import { Button } from '../Button';

export const Default: Story<CardProps> = () => (
  <Card>
    <h3 style={{ margin: '0 0 8px 0' }}>デフォルトカード</h3>
    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>シンプルで美しいカードコンポーネントです。</p>
  </Card>
);

export const AllVariants: Story = () => (
  <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
    <Card variant="default">
      <h4 style={{ margin: '0 0 8px 0' }}>デフォルト</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>標準的なカードスタイル</p>
    </Card>
    
    <Card variant="elevated">
      <h4 style={{ margin: '0 0 8px 0' }}>エレベーテッド</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>浮き上がったようなシャドウ</p>
    </Card>
    
    <Card variant="outlined">
      <h4 style={{ margin: '0 0 8px 0' }}>アウトライン</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>枠線のあるカード</p>
    </Card>
    
    <Card variant="glass">
      <h4 style={{ margin: '0 0 8px 0' }}>グラス</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>透明感のあるガラス風</p>
    </Card>
    
    <Card variant="gradient">
      <h4 style={{ margin: '0 0 8px 0' }}>グラデーション</h4>
      <p style={{ margin: 0 }}>美しいグラデーション背景</p>
    </Card>
    
    <Card variant="premium">
      <h4 style={{ margin: '0 0 8px 0' }}>プレミアム</h4>
      <p style={{ margin: 0 }}>ゴールドで豪華なカード</p>
    </Card>
  </div>
);

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <Card size="small" variant="elevated">
      <h4 style={{ margin: '0 0 8px 0' }}>スモール</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>コンパクトサイズ</p>
    </Card>
    
    <Card size="medium" variant="elevated">
      <h4 style={{ margin: '0 0 8px 0' }}>ミディアム</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>標準サイズ</p>
    </Card>
    
    <Card size="large" variant="elevated">
      <h4 style={{ margin: '0 0 8px 0' }}>ラージ</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>大きなサイズ</p>
    </Card>
  </div>
);

export const WithImages: Story = () => (
  <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
    <Card 
      variant="elevated" 
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
      imageAlt="美しい山の風景"
      imagePosition="top"
    >
      <h4 style={{ margin: '0 0 8px 0' }}>画像トップ</h4>
      <p style={{ margin: '0 0 16px 0', color: 'var(--text-secondary)' }}>カードの上部に画像を配置</p>
      <Button size="small">詳細を見る</Button>
    </Card>
    
    <Card 
      variant="outlined" 
      image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=120&h=120&fit=crop"
      imageAlt="森の風景"
      imagePosition="left"
      size="medium"
    >
      <h4 style={{ margin: '0 0 8px 0' }}>画像左</h4>
      <p style={{ margin: '0 0 16px 0', color: 'var(--text-secondary)' }}>左側に画像を配置した横レイアウト</p>
      <Button size="small" variant="outline">アクション</Button>
    </Card>
    
    <Card 
      variant="glass" 
      image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop"
      imageAlt="湖の風景"
      imagePosition="background"
      size="medium"
    >
      <h4 style={{ margin: '0 0 8px 0', color: 'white' }}>背景画像</h4>
      <p style={{ margin: '0 0 16px 0', color: 'rgba(255,255,255,0.9)' }}>背景に画像を使用したオーバーレイスタイル</p>
      <Button variant="outline">探索する</Button>
    </Card>
  </div>
);

export const WithHeaderFooter: Story = () => (
  <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
    <Card 
      variant="elevated"
      header={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>ユーザーアクティビティ</h3>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>今日</span>
        </div>
      }
      footer={
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button size="small">編集</Button>
          <Button size="small" variant="outline">詳細</Button>
        </div>
      }
    >
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        今日のアクティビティサマリーを表示しています。
        ヘッダーとフッターが付いたカードの例です。
      </p>
    </Card>
    
    <Card 
      variant="gradient"
      header={<h3 style={{ margin: 0 }}>🎉 特別オファー</h3>}
      footer={
        <Button variant="outline" size="small">
          今すぐ申し込む
        </Button>
      }
    >
      <p style={{ margin: 0 }}>
        限定キャンペーン実施中！
        この機会をお見逃しなく。
      </p>
    </Card>
  </div>
);

export const InteractiveCards: Story = () => (
  <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
    <Card 
      variant="outlined"
      hoverable
      clickable
      onClick={() => alert('カードがクリックされました!')}
    >
      <h4 style={{ margin: '0 0 8px 0' }}>クリック可能</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        このカードはクリックできます。
        ホバーエフェクトもあります。
      </p>
    </Card>
    
    <Card 
      variant="elevated"
      hoverable
    >
      <h4 style={{ margin: '0 0 8px 0' }}>ホバー効果</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        マウスを乗せると浮き上がります。
      </p>
    </Card>
    
    <Card 
      variant="glass"
      disabled
    >
      <h4 style={{ margin: '0 0 8px 0' }}>無効状態</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        無効化されたカードです。
      </p>
    </Card>
    
    <Card 
      variant="default"
      loading
    >
      <h4 style={{ margin: '0 0 8px 0' }}>ローディング</h4>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        読み込み中の表示例です。
      </p>
    </Card>
  </div>
);

export const BorderRadiusVariations: Story = () => (
  <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
    <Card variant="elevated" borderRadius="none" size="small">
      <h5 style={{ margin: '0 0 4px 0' }}>角なし</h5>
      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>シャープなエッジ</p>
    </Card>
    
    <Card variant="elevated" borderRadius="small" size="small">
      <h5 style={{ margin: '0 0 4px 0' }}>小さな角丸</h5>
      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>わずかに丸い</p>
    </Card>
    
    <Card variant="elevated" borderRadius="medium" size="small">
      <h5 style={{ margin: '0 0 4px 0' }}>中程度</h5>
      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>標準的な丸み</p>
    </Card>
    
    <Card variant="elevated" borderRadius="large" size="small">
      <h5 style={{ margin: '0 0 4px 0' }}>大きな角丸</h5>
      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>とても丸い</p>
    </Card>
  </div>
);

export const RealWorldExamples: Story = () => (
  <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
    {/* 商品カード */}
    <Card 
      variant="elevated"
      image="https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop"
      imageAlt="ワイヤレスイヤホン"
      imagePosition="top"
      hoverable
      clickable
      onClick={() => alert('商品ページへ移動')}
      padding="large"
    >
      <h4 style={{ margin: '0 0 8px 0' }}>ワイヤレスイヤホン Pro</h4>
      <p style={{ margin: '0 0 12px 0', color: 'var(--text-secondary)' }}>
        高音質・長時間バッテリー・ノイズキャンセリング機能付き
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-500)' }}>¥12,800</span>
        <Button size="small">カートに追加</Button>
      </div>
    </Card>
    
    {/* プロフィールカード */}
    <Card 
      variant="glass"
      header={
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '50%', 
            background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            田中
          </div>
          <div>
            <h4 style={{ margin: 0 }}>田中太郎</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>フロントエンド開発者</p>
          </div>
        </div>
      }
      footer={
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button size="small" variant="outline">フォロー</Button>
          <Button size="small" variant="outline">メッセージ</Button>
        </div>
      }
    >
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        React/TypeScript専門のエンジニア。
        モダンなWebアプリケーション開発に従事。
      </p>
    </Card>
    
    {/* 統計カード */}
    <Card variant="premium" size="medium">
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '2.5rem' }}>98.5%</h2>
        <h4 style={{ margin: '0 0 16px 0' }}>成功率</h4>
        <p style={{ margin: 0, opacity: 0.8 }}>
          過去30日間のプロジェクト成功率
        </p>
      </div>
    </Card>
  </div>
);

export const ShowcaseDemo: Story = () => (
  <div style={{ display: 'grid', gap: '32px', padding: '20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2 style={{ margin: '0 0 8px 0' }}>🎨 モダンCardコンポーネント</h2>
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        豊富なバリエーションと美しいアニメーション
      </p>
    </div>
    
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      <Card 
        variant="gradient" 
        hoverable
        header={<h3 style={{ margin: 0 }}>✨ 特徴</h3>}
      >
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>6つの美しいvariant</li>
          <li>画像サポート（4つの配置パターン）</li>
          <li>ホバー・クリック・ローディング状態</li>
          <li>完全レスポンシブ対応</li>
        </ul>
      </Card>
      
      <Card 
        variant="glass" 
        image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop"
        imagePosition="background"
        hoverable
      >
        <h3 style={{ margin: '0 0 8px 0', color: 'white' }}>🌟 用途</h3>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>
          商品カード、プロフィール、
          統計表示、コンテンツ整理など
        </p>
      </Card>
      
      <Card 
        variant="premium" 
        hoverable
        clickable
        onClick={() => alert('Premiumカードの威力！')}
      >
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>👑 プレミアム</h3>
          <p style={{ margin: 0 }}>
            特別なゴールドスタイルで
            重要なコンテンツを強調
          </p>
        </div>
      </Card>
    </div>
  </div>
);