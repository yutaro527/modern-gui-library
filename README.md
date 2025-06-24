# Modern GUI Library

TypeScriptで構築された再利用可能なReactコンポーネントライブラリです。モダンなUIを簡単に実装できます。

## 特徴

- **Buttonコンポーネント**: 複数のバリエーション、サイズ、ローディング状態を持つモダンなボタン
- **Slideshowコンポーネント**: 自動再生、ナビゲーション、キーボード操作に対応した高機能スライドショー
- **TypeScript完全対応**: 完全な型定義が含まれており、型安全な開発が可能
- **モダンCSS**: 美しくレスポンシブなスタイリング
- **軽量・高速**: 最小限の依存関係で高いパフォーマンス

## インストール

```bash
npm install modern-gui-library
```

## 使い方

### Buttonコンポーネント

```tsx
import { Button } from 'modern-gui-library';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        クリックしてください
      </Button>
      <Button variant="secondary" loading>
        読み込み中...
      </Button>
    </div>
  );
}
```

**プロパティ:**
- `variant`: ボタンの種類 ('primary' | 'secondary' | 'danger' | 'outline')
- `size`: サイズ ('small' | 'medium' | 'large')
- `disabled`: 無効状態 (boolean)
- `loading`: ローディング状態 (boolean)
- `onClick`: クリックハンドラー
- `type`: ボタンタイプ ('button' | 'submit' | 'reset')

### Slideshowコンポーネント

```tsx
import { Slideshow } from 'modern-gui-library';

const slides = [
  {
    id: 1,
    image: '/image1.jpg',
    title: 'スライド 1',
    description: 'スライド1の説明文です'
  },
  {
    id: 2,
    content: <div>カスタムコンテンツ</div>
  }
];

function App() {
  return (
    <Slideshow
      slides={slides}
      autoPlay={true}
      interval={3000}
      showDots={true}
      showArrows={true}
    />
  );
}
```

**プロパティ:**
- `slides`: スライドオブジェクトの配列
- `autoPlay`: 自動再生を有効にする (デフォルト: false)
- `interval`: 自動再生の間隔（ミリ秒） (デフォルト: 3000)
- `showDots`: ナビゲーションドットを表示 (デフォルト: true)
- `showArrows`: ナビゲーション矢印を表示 (デフォルト: true)
- `infinite`: 無限ループを有効にする (デフォルト: true)
- `onSlideChange`: スライド変更時のコールバック

## コンポーネントの確認・開発

このライブラリではLadleを使用してコンポーネントを一元管理・表示できます。

### Ladleとは

LadleはStorybookの軽量・高速な代替ツールです。Viteベースで動作し、コンポーネントの開発・テスト・ドキュメント化を効率的に行えます。

### Ladleのセットアップ

既にセットアップ済みです。以下のコマンドで開始できます：

```bash
# 依存関係をインストール
npm install

# Ladleを起動（開発サーバー）
npm run ladle
```

ブラウザで `http://localhost:61000` にアクセスすると、全てのコンポーネントを確認できます。

**オンラインでも確認可能**: [https://yutaro527.github.io/modern-gui-library/](https://yutaro527.github.io/modern-gui-library/)

### Ladleのコマンド

```bash
# 開発モードでLadleを起動
npm run ladle

# 本番用ビルド（静的ファイル生成）
npm run ladle:build
```

### ストーリーの作成方法

各コンポーネントに対して `.stories.tsx` ファイルを作成します：

```tsx
// src/components/YourComponent/YourComponent.stories.tsx
import type { Story } from '@ladle/react';
import { YourComponent, YourComponentProps } from './YourComponent';

export const Default: Story<YourComponentProps> = () => (
  <YourComponent>デフォルト</YourComponent>
);

export const Variant: Story<YourComponentProps> = () => (
  <YourComponent variant="special">特別なバリエーション</YourComponent>
);
```

### Ladleの特徴

- **高速**: Viteベースで瞬時にリロード
- **軽量**: Storybookより軽量で設定が簡単
- **TypeScript完全サポート**: 型安全なストーリー作成
- **直感的なUI**: シンプルで使いやすいインターフェース

## 開発者向け情報

### 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/yutaro527/modern-gui-library.git
cd modern-gui-library

# 依存関係をインストール
npm install
```

### 利用可能なコマンド

```bash
# TypeScriptライブラリをビルド
npm run build

# TypeScript開発モード（ファイル監視でリアルタイムビルド）
npm run dev

# Ladleでコンポーネントを確認・開発
npm run ladle

# Ladle本番用ビルド（静的ファイル生成）
npm run ladle:build

# テスト実行
npm run test

# ESLintでコードの品質チェック
npm run lint

# TypeScriptの型チェック
npm run typecheck
```

### コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

### サポート

- バグ報告: [GitHub Issues](https://github.com/yutaro527/modern-gui-library/issues)
- 機能リクエスト: [GitHub Issues](https://github.com/yutaro527/modern-gui-library/issues)
- ドキュメント: [README](README.md)