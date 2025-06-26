# Claude Code 設定

このファイルには、開発タスクを支援するためのClaude Codeの設定とコンテキスト情報が含まれています。

## プロジェクト概要

Modern GUI Library - TypeScriptサポート付きのReactコンポーネントライブラリ

## 開発コマンド

- `npm run dev` - 開発サーバーを起動
- `npm run build` - ライブラリをビルド
- `npm run lint` - ESLintを実行
- `npm run typecheck` - TypeScriptの型チェックを実行
- `npm test` - テストを実行

## プロジェクト構造

- `/src` - ソースコード
- `/stories` - Storybookストーリー
- `/dist` - ビルド出力
- `/public` - パブリックアセット

## 主要技術

- React
- TypeScript
- Storybook/Ladle
- ESLint
- Vite

## 開発ガイドライン

### 言語とドキュメント
- **日本語優先**: すべてのドキュメント、コメント、コミットメッセージは日本語で作成
- **必須確認ドキュメント**: 作業開始前に必ず以下を確認
  - `docs/naming-conventions.md` - 命名規則とブランチ運用ルール
  - `docs/components.md` - コンポーネント設計ガイドライン
  - `docs/README.md` - プロジェクト全体のドキュメント構造
  - `README.md` - プロジェクト概要と使用方法
  - `CONTRIBUTING.md` - 貢献ガイドライン
- **既存パターンの確認**:
  - `src/components/` 内の既存コンポーネントの構造
  - `package.json` のscriptsとdependencies
  - 既存のTypeScript型定義とProps定義

### コーディング規約
- 既存のコードスタイルに従う
- TypeScript型定義を必ず使用
- ESLintルールを遵守
- コンポーネントにはPropsの型定義を必須とする
- `docs/naming-conventions.md`の命名規則を厳密に遵守

### Git ブランチ運用（docs/naming-conventions.mdに準拠）
- **🚫 重要**: mainブランチへの直接プッシュは絶対禁止
- **必須フロー**: 必ずプルリクエスト経由でのマージ
- **ブランチ命名**: `<type>/<short-description>` 形式
  - feature/, fix/, docs/, refactor/, test/, chore/, style/, perf/
- **コミットメッセージ**: `<type>: <summary>` 形式（日本語）
- **mainブランチ**: 常にリリース可能な状態を維持
- **PRマージ前**: 必ずlint/typecheckを実行
- **開発時**: 新しいブランチ作成 → 実装 → PR作成 → レビュー → マージ

### ドキュメント作成
- README.mdやその他のドキュメントは日本語で作成
- Storybookストーリーには日本語の説明を追加
- APIドキュメントは使用例とともに日本語で記述
- 新規コンポーネント作成時は対応するドキュメントも更新

## 注意事項

- コンポーネントライブラリはGitHub Pagesで公開
- テーマシステムが実装済み
- 複数のUIコンポーネントが利用可能