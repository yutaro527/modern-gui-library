# コントリビューションガイド

Modern GUI Libraryへのコントリビューションをありがとうございます！このガイドでは、プロジェクトへの貢献方法について説明します。

## 始める前に

- [行動規範](CODE_OF_CONDUCT.md)を読んで理解してください
- [命名規則](docs/naming-conventions.md)を確認してください
- [開発ガイドライン](docs/development-guidelines.md)に従って開発してください

## コントリビューション方法

### 1. Issue の報告

バグを発見した場合や新機能を提案したい場合は、まず[Issues](https://github.com/yutaro527/modern-gui-library/issues)を確認して、同様の報告がないか確認してください。

#### バグ報告

バグ報告には以下の情報を含めてください：

- **再現手順**: 問題を再現するための詳細な手順
- **期待される動作**: 本来どのように動作すべきか
- **実際の動作**: 実際に何が起こったか
- **環境情報**: OS、ブラウザ、Node.js、npmのバージョン
- **スクリーンショット**: 可能であれば問題を示すスクリーンショット

#### 機能提案

新機能の提案には以下を含めてください：

- **機能の説明**: 何を実現したいか
- **使用例**: どのようなシナリオで使用するか
- **実装案**: 可能であれば技術的なアプローチ

### 2. 開発環境のセットアップ

```bash
# リポジトリをフォーク後、クローン
git clone https://github.com/your-username/modern-gui-library.git
cd modern-gui-library

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# 別ターミナルでLadleを起動（コンポーネント確認用）
npm run ladle
```

### 3. 開発ワークフロー

#### ブランチ戦略とブランチ保護

**⚠️ 重要: mainブランチへの直接プッシュは🚫禁止**

- `main`: 安定版のコード（**プルリクエスト経由でのみマージ可能**）
- `feature/*`: 新機能開発
- `fix/*`: バグ修正
- `docs/*`: ドキュメントの更新
- `refactor/*`: リファクタリング

**必須開発フロー:**
1. mainブランチから新しいブランチを作成
2. 機能開発・修正を実装
3. プルリクエストを作成
4. コードレビュー通過後にマージ
5. **直接mainブランチへのpushは絶対禁止**

#### 命名規則

詳細は[命名規則ドキュメント](docs/naming-conventions.md)を参照してください。

**ブランチ名:**
```
feature/add-tooltip-component
fix/button-loading-state-bug
docs/update-readme
refactor/slideshow-component
```

**コミットメッセージ:**
```
feat: Tooltipコンポーネントを追加

- ホバー時の説明表示機能
- 位置調整オプション（top, bottom, left, right）
- アニメーション対応
```

### 4. コードの品質チェック

プルリクエストを送信する前に、以下のチェックを実行してください：

```bash
# 型チェック
npm run typecheck

# リント
npm run lint

# テスト
npm run test

# ビルド確認
npm run build
```

### 5. プルリクエスト

#### プルリクエストの準備

1. 最新のmainブランチとマージ
```bash
git checkout main
git pull upstream main
git checkout your-feature-branch
git rebase main
```

2. コミットをまとめる（必要に応じて）
```bash
git rebase -i HEAD~n  # nは統合したいコミット数
```

#### プルリクエストのテンプレート

プルリクエスト作成時は以下のテンプレートを使用してください：

```markdown
## 概要
何を変更したかの簡潔な説明

## 変更内容
- 変更点1
- 変更点2
- 変更点3

## 関連Issue
Closes #123

## テスト計画
- [ ] 新機能のテスト
- [ ] 既存機能に影響がないことの確認
- [ ] ブラウザでの動作確認

## スクリーンショット
（UI変更がある場合）

## チェックリスト
- [ ] 型チェックが通る (`npm run typecheck`)
- [ ] リントが通る (`npm run lint`) 
- [ ] テストが通る (`npm run test`)
- [ ] ビルドが成功する (`npm run build`)
- [ ] Ladleでコンポーネントが正常に表示される
- [ ] ドキュメントを更新した（必要に応じて）
```

## 開発ガイドライン

### コンポーネント開発

新しいコンポーネントを作成する場合：

1. `src/components/ComponentName/` ディレクトリを作成
2. 以下のファイルを作成：
   - `ComponentName.tsx` - メインコンポーネント
   - `ComponentName.css` - スタイル
   - `ComponentName.stories.tsx` - Ladleストーリー
   - `index.ts` - エクスポート

3. `src/index.ts` にコンポーネントを追加

### Storiesの作成

Ladleストーリーは以下の形式で作成してください：

```tsx
import type { Story } from '@ladle/react';
import { ComponentName, ComponentNameProps } from './ComponentName';

export const Default: Story<ComponentNameProps> = () => (
  <ComponentName>デフォルト</ComponentName>
);

export const Variant: Story<ComponentNameProps> = () => (
  <ComponentName variant="special">特別なバリエーション</ComponentName>
);
```

### CSS規約

- BEM記法を使用
- コンポーネント固有のクラス名プレフィックスを使用
- レスポンシブデザインを考慮

```css
.modern-component {
  /* ベーススタイル */
}

.modern-component--variant {
  /* バリエーション */
}

.modern-component__element {
  /* 要素 */
}
```

## リリースプロセス

メンテナーのみが実行できるプロセスです：

1. バージョン番号の更新
2. CHANGELOG.mdの更新
3. タグの作成
4. npm公開

## 質問・サポート

- 質問は[GitHub Discussions](https://github.com/yutaro527/modern-gui-library/discussions)で
- バグ報告は[Issues](https://github.com/yutaro527/modern-gui-library/issues)で
- 緊急のセキュリティ問題は[セキュリティポリシー](SECURITY.md)に従って報告

## ライセンス

コントリビューションを行うことで、あなたの貢献がMITライセンスの下でライセンスされることに同意したものとみなされます。