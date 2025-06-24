# 命名規則

Modern GUI Libraryでは、一貫性のあるコードベースを維持するために、以下の命名規則に従います。

## ブランチ名

### 形式
```
<type>/<short-description>
```

### タイプ

| タイプ | 説明 | 例 |
|--------|------|-----|
| `feature` | 新機能の追加 | `feature/add-tooltip-component` |
| `fix` | バグ修正 | `fix/button-loading-state` |
| `docs` | ドキュメントの更新 | `docs/update-contributing-guide` |
| `refactor` | リファクタリング | `refactor/slideshow-hooks` |
| `test` | テストの追加・修正 | `test/add-button-unit-tests` |
| `chore` | ビルド・設定等の変更 | `chore/update-dependencies` |
| `style` | フォーマット・スタイルの修正 | `style/fix-eslint-warnings` |
| `perf` | パフォーマンス改善 | `perf/optimize-slideshow-rendering` |

### 例
```bash
feature/add-modal-component
fix/slideshow-infinite-loop-bug
docs/add-api-documentation
refactor/extract-common-hooks
test/improve-button-coverage
chore/upgrade-typescript
style/format-all-files
perf/reduce-bundle-size
```

## コミットメッセージ

### 形式
```
<type>: <summary>

<body>
```

### タイプ（ブランチと同じ）

| タイプ | 説明 |
|--------|------|
| `feat` | 新機能 |
| `fix` | バグ修正 |
| `docs` | ドキュメント |
| `refactor` | リファクタリング |
| `test` | テスト |
| `chore` | ビルド・設定 |
| `style` | フォーマット |
| `perf` | パフォーマンス |

### 規則

1. **要約行（1行目）**
   - 50文字以内
   - 動詞は現在形（「追加する」ではなく「追加」）
   - 末尾にピリオドは不要

2. **本文（3行目以降）**
   - 72文字で改行
   - 何を変更したかではなく、なぜ変更したかを説明
   - 必要に応じて複数の段落に分ける

### 例

```
feat: Modalコンポーネントを追加

- アクセシビリティ対応（ESCキー、フォーカストラップ）
- アニメーション付きの開閉
- カスタマイズ可能なサイズとポジション

closes #45
```

```
fix: Buttonコンポーネントのローディング状態を修正

ローディング時にonClickが実行される問題を修正。
disabledプロパティとloadingプロパティの競合状態を解決。

Before: ローディング中でもクリックイベントが発火
After: ローディング中はクリックイベントが無効化

fixes #123
```

## ディレクトリ構造

### プロジェクトルート
```
modern-gui-library/
├── src/                    # ソースコード
├── docs/                   # ドキュメント
├── .ladle/                 # Ladle設定
├── dist/                   # ビルド成果物
└── build/                  # Ladle成果物
```

### ソースコード構造
```
src/
├── components/             # Reactコンポーネント
│   ├── Button/
│   │   ├── Button.tsx      # メインコンポーネント
│   │   ├── Button.css      # スタイル
│   │   ├── Button.stories.tsx # Ladleストーリー
│   │   └── index.ts        # エクスポート
│   └── ComponentName/      # 同様の構造
├── hooks/                  # カスタムフック
├── utils/                  # ユーティリティ関数
├── types/                  # 型定義
├── styles/                 # グローバルスタイル
└── index.ts               # ライブラリエントリーポイント
```

## ファイル命名規則

### React コンポーネント

| ファイルタイプ | 命名規則 | 例 |
|----------------|----------|-----|
| コンポーネント | PascalCase.tsx | `Button.tsx`, `Slideshow.tsx` |
| スタイル | PascalCase.css | `Button.css`, `Slideshow.css` |
| ストーリー | PascalCase.stories.tsx | `Button.stories.tsx` |
| テスト | PascalCase.test.tsx | `Button.test.tsx` |
| フック | use + PascalCase.ts | `useSlideshow.ts` |

### その他のファイル

| ファイルタイプ | 命名規則 | 例 |
|----------------|----------|-----|
| ユーティリティ | camelCase.ts | `formatDate.ts`, `debounce.ts` |
| 型定義 | camelCase.ts | `commonTypes.ts`, `apiTypes.ts` |
| 設定ファイル | kebab-case | `vite.config.ts`, `tsconfig.json` |
| ドキュメント | kebab-case.md | `naming-conventions.md` |

## クラス名規則（CSS）

### BEM記法

```css
/* Block */
.modern-component {}

/* Element */
.modern-component__element {}

/* Modifier */
.modern-component--modifier {}
.modern-component__element--modifier {}
```

### 例

```css
/* Button コンポーネント */
.modern-button {}
.modern-button__content {}
.modern-button__spinner {}
.modern-button--primary {}
.modern-button--large {}
.modern-button--loading {}

/* Slideshow コンポーネント */
.modern-slideshow {}
.modern-slideshow__container {}
.modern-slideshow__track {}
.modern-slideshow__slide {}
.modern-slideshow__slide--active {}
.modern-slideshow__arrow {}
.modern-slideshow__arrow--prev {}
.modern-slideshow__dots {}
.modern-slideshow__dot {}
.modern-slideshow__dot--active {}
```

## 変数・関数命名規則

### TypeScript/JavaScript

| 種類 | 命名規則 | 例 |
|------|----------|-----|
| 変数 | camelCase | `currentIndex`, `isLoading` |
| 関数 | camelCase | `handleClick`, `validateInput` |
| 定数 | SCREAMING_SNAKE_CASE | `DEFAULT_INTERVAL`, `MAX_SLIDES` |
| インターface | PascalCase + Props/Options | `ButtonProps`, `SlideshowOptions` |
| Type | PascalCase | `SlideItem`, `ButtonVariant` |
| Enum | PascalCase | `ButtonSize`, `AnimationType` |

### 例

```typescript
// 定数
const DEFAULT_SLIDE_INTERVAL = 3000;
const MAX_SLIDE_COUNT = 100;

// インターface
interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

// Type
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline';

// Enum
enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

// 関数
const handleSlideChange = (index: number) => {
  // 実装
};

// イベントハンドラー
const handleButtonClick = (event: MouseEvent) => {
  // 実装
};
```

## Props命名規則

### Boolean Props

```typescript
// ✅ 良い例
interface Props {
  disabled?: boolean;
  loading?: boolean;
  autoPlay?: boolean;
  showDots?: boolean;
  infinite?: boolean;
}

// ❌ 悪い例
interface Props {
  isDisabled?: boolean;  // isプレフィックス不要
  canClick?: boolean;    // canプレフィックス不要
  hasError?: boolean;    // hasプレフィックス不要
}
```

### イベントハンドラー Props

```typescript
// ✅ 良い例
interface Props {
  onClick?: (event: MouseEvent) => void;
  onSlideChange?: (index: number) => void;
  onAnimationEnd?: () => void;
}

// ❌ 悪い例
interface Props {
  clickHandler?: (event: MouseEvent) => void;
  slideChangeCallback?: (index: number) => void;
}
```

## Git関連の規則

### ブランチ運用

1. **mainブランチ**: 常にリリース可能な状態
2. **featureブランチ**: mainから分岐、mainにマージ
3. **hotfixブランチ**: 緊急修正用、mainから分岐

### コミット規則

1. **1コミット1変更**: 論理的に関連する変更のみを含める
2. **動作する状態でコミット**: ビルドエラーがない状態でコミット
3. **適切なサイズ**: 大きすぎず小さすぎないコミット

### タグ規則

```
v<major>.<minor>.<patch>
```

例: `v1.0.0`, `v1.2.3`, `v2.0.0-beta.1`

## 例外・特別なケース

### レガシーファイル
既存のファイルを修正する場合は、ファイル全体を新しい規則に従って変更する必要はありません。新しく追加する部分のみ新しい規則に従ってください。

### サードパーティライブラリ
サードパーティライブラリの命名規則に合わせる必要がある場合は、それに従ってください。

### 設定ファイル
ツールが要求する特定の命名規則がある場合は、それに従ってください（例: `package.json`, `.gitignore`）。

---

この命名規則についてご質問がある場合は、[GitHub Discussions](https://github.com/yutaro527/modern-gui-library/discussions)でお気軽にお尋ねください。