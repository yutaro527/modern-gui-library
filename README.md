# Modern GUI Library

A modern GUI library with reusable React components built with TypeScript.

## Features

- **Button Component**: Modern button with multiple variants, sizes, and loading states
- **Slideshow Component**: Fully-featured slideshow with auto-play, navigation, and keyboard support
- **TypeScript Support**: Full type definitions included
- **Modern CSS**: Clean, responsive styling

## Installation

```bash
npm install modern-gui-library
```

## Usage

### Button Component

```tsx
import { Button } from 'modern-gui-library';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
      <Button variant="secondary" loading>
        Loading...
      </Button>
    </div>
  );
}
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean
- `onClick`: click handler
- `type`: 'button' | 'submit' | 'reset'

### Slideshow Component

```tsx
import { Slideshow } from 'modern-gui-library';

const slides = [
  {
    id: 1,
    image: '/image1.jpg',
    title: 'Slide 1',
    description: 'Description for slide 1'
  },
  {
    id: 2,
    content: <div>Custom content</div>
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

**Props:**
- `slides`: Array of slide objects
- `autoPlay`: Enable auto-play (default: false)
- `interval`: Auto-play interval in ms (default: 3000)
- `showDots`: Show navigation dots (default: true)
- `showArrows`: Show navigation arrows (default: true)
- `infinite`: Enable infinite loop (default: true)
- `onSlideChange`: Callback when slide changes

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

## 開発コマンド

```bash
# 依存関係をインストール
npm install

# TypeScriptライブラリをビルド
npm run build

# TypeScript開発モード（ファイル監視）
npm run dev

# Ladleでコンポーネントを確認
npm run ladle

# テスト実行
npm run test

# コードリント
npm run lint

# 型チェック
npm run typecheck
```

## License

MIT