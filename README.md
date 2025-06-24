# Modern GUI Library

TypeScriptで構築された再利用可能なReactコンポーネントライブラリです。モダンなUIを簡単に実装できます。

## 特徴

### 🎯 豊富なコンポーネント
- **Button**: 複数のバリエーション、サイズ、ローディング状態
- **Modal**: アクセシビリティ対応の高機能モーダルダイアログ
- **Input**: バリデーション・アイコン対応の入力フィールド
- **Card**: 汎用的なコンテナコンポーネント
- **Toggle**: モダンなスイッチ・トグルボタン
- **Slideshow**: 自動再生、ナビゲーション、キーボード操作対応
- **Tooltip**: 4方向対応のツールチップ

### 💎 開発体験
- **TypeScript完全対応**: 完全な型定義で型安全な開発
- **アクセシビリティ準拠**: ARIA属性とキーボード操作に対応
- **レスポンシブデザイン**: 全デバイスで美しく表示
- **ダークモード対応**: 自動でダークテーマに対応
- **軽量・高速**: 最小限の依存関係で高いパフォーマンス

## インストール

```bash
npm install modern-gui-library
```

## クイックスタート

```tsx
import { Button, Modal, Input, Card } from 'modern-gui-library';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Card>
        <h2>Modern GUI Library</h2>
        <p>美しく使いやすいコンポーネントライブラリ</p>
        
        <Button onClick={() => setIsModalOpen(true)}>
          モーダルを開く
        </Button>
      </Card>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="お問い合わせ"
      >
        <Input 
          label="お名前" 
          placeholder="名前を入力してください"
          required 
        />
        <Input 
          label="メールアドレス"
          type="email" 
          placeholder="example@email.com"
          required 
        />
      </Modal>
    </div>
  );
}
```

## 📚 ドキュメント

- **[コンポーネントガイド](docs/components.md)** - 各コンポーネントの詳細な使用方法
- **[開発ガイド](CONTRIBUTING.md)** - コントリビューション方法
- **[命名規則](docs/naming-conventions.md)** - プロジェクトの規約

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