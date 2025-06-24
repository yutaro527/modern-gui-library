# コンポーネントガイド

このドキュメントでは、Modern GUI Libraryの各コンポーネントの詳細な使用方法について説明します。

## Button

複数のバリエーション、サイズ、状態を持つモダンなボタンコンポーネント。

### 基本的な使用例

```tsx
import { Button } from 'modern-gui-library';

<Button variant="primary" size="medium">
  クリックしてください
</Button>
```

### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'outline'` | `'primary'` | ボタンの種類 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | ボタンのサイズ |
| `disabled` | `boolean` | `false` | 無効状態 |
| `loading` | `boolean` | `false` | ローディング状態 |
| `onClick` | `(event: React.MouseEvent) => void` | - | クリックハンドラー |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | ボタンタイプ |

---

## Modal

アクセシビリティに対応した高機能モーダルダイアログ。

### 基本的な使用例

```tsx
import { Modal } from 'modern-gui-library';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="タイトル"
      >
        <p>モーダルの内容</p>
      </Modal>
    </>
  );
}
```

### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `isOpen` | `boolean` | - | モーダルの表示状態 |
| `onClose` | `() => void` | - | モーダルを閉じる関数 |
| `title` | `string` | - | モーダルのタイトル |
| `size` | `'small' \| 'medium' \| 'large' \| 'fullscreen'` | `'medium'` | モーダルのサイズ |
| `closeOnOverlayClick` | `boolean` | `true` | 背景クリックで閉じるか |
| `closeOnEscape` | `boolean` | `true` | ESCキーで閉じるか |
| `showCloseButton` | `boolean` | `true` | 閉じるボタンを表示するか |

### 特徴

- **アクセシビリティ**: フォーカストラップ、ARIA属性
- **キーボード操作**: ESC・Tab キーサポート
- **アニメーション**: フェードイン・スライドイン効果

---

## Input

バリデーション・アイコン対応の高機能入力フィールド。

### 基本的な使用例

```tsx
import { Input } from 'modern-gui-library';

<Input 
  label="メールアドレス"
  type="email"
  placeholder="example@email.com"
  required
/>
```

### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `label` | `string` | - | ラベルテキスト |
| `helperText` | `string` | - | ヘルプテキスト |
| `errorText` | `string` | - | エラーメッセージ |
| `variant` | `'outlined' \| 'filled'` | `'outlined'` | 入力欄のスタイル |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 入力欄のサイズ |
| `fullWidth` | `boolean` | `false` | 全幅表示 |
| `startIcon` | `React.ReactNode` | - | 開始位置のアイコン |
| `endIcon` | `React.ReactNode` | - | 終了位置のアイコン |
| `loading` | `boolean` | `false` | ローディング状態 |

### バリデーション例

```tsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const validateEmail = (value: string) => {
  if (!value.includes('@')) {
    setError('有効なメールアドレスを入力してください');
  } else {
    setError('');
  }
};

<Input 
  label="メールアドレス"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }}
  errorText={error}
/>
```

---

## Card

汎用的なコンテナコンポーネント。

### 基本的な使用例

```tsx
import { Card } from 'modern-gui-library';

<Card>
  <h3>カードタイトル</h3>
  <p>カードの内容</p>
</Card>
```

### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `variant` | `'elevation' \| 'outlined'` | `'elevation'` | カードのスタイル |
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | 内部パディング |
| `clickable` | `boolean` | `false` | クリック可能にするか |
| `hover` | `boolean` | `true` | ホバーエフェクト |
| `onClick` | `() => void` | - | クリックハンドラー |

### クリック可能なカード

```tsx
<Card 
  clickable
  onClick={() => console.log('カードクリック')}
>
  <h3>クリック可能なカード</h3>
  <p>このカードはクリックできます</p>
</Card>
```

---

## Toggle

モダンなスイッチ・トグルボタン。

### 基本的な使用例

```tsx
import { Toggle } from 'modern-gui-library';
import { useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Toggle 
      checked={enabled}
      onChange={setEnabled}
      label="通知を有効にする"
    />
  );
}
```

### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `checked` | `boolean` | - | チェック状態 |
| `onChange` | `(checked: boolean) => void` | - | 状態変更ハンドラー |
| `disabled` | `boolean` | `false` | 無効状態 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | サイズ |
| `label` | `string` | - | ラベルテキスト |

### 設定フォーム例

```tsx
const [settings, setSettings] = useState({
  notifications: true,
  darkMode: false,
  autoSave: true
});

<div>
  <Toggle 
    checked={settings.notifications}
    onChange={(checked) => 
      setSettings(prev => ({ ...prev, notifications: checked }))
    }
    label="プッシュ通知"
  />
  <Toggle 
    checked={settings.darkMode}
    onChange={(checked) => 
      setSettings(prev => ({ ...prev, darkMode: checked }))
    }
    label="ダークモード"
  />
</div>
```

---

## Tooltip

4方向対応のツールチップ。

### 基本的な使用例

```tsx
import { Tooltip } from 'modern-gui-library';

<Tooltip content="詳細な説明文">
  <button>ホバーしてください</button>
</Tooltip>
```

### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `content` | `string` | - | ツールチップの内容 |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | 表示位置 |
| `delay` | `number` | `500` | 表示遅延（ミリ秒） |

### 使用例

```tsx
<div style={{ display: 'flex', gap: '1rem' }}>
  <Tooltip content="上に表示" position="top">
    <Button>上</Button>
  </Tooltip>
  <Tooltip content="下に表示" position="bottom">
    <Button>下</Button>
  </Tooltip>
  <Tooltip content="即座に表示" delay={0}>
    <Button>遅延なし</Button>
  </Tooltip>
</div>
```

---

## Slideshow

自動再生、ナビゲーション、キーボード操作に対応した高機能スライドショー。

### 基本的な使用例

```tsx
import { Slideshow } from 'modern-gui-library';

const slides = [
  {
    id: 1,
    image: '/image1.jpg',
    title: 'スライド 1',
    description: 'スライド1の説明'
  },
  {
    id: 2,
    content: <div>カスタムコンテンツ</div>
  }
];

<Slideshow
  slides={slides}
  autoPlay={true}
  interval={3000}
/>
```

### プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `slides` | `SlideItem[]` | - | スライドデータ配列 |
| `autoPlay` | `boolean` | `false` | 自動再生 |
| `interval` | `number` | `3000` | 自動再生間隔（ミリ秒） |
| `showDots` | `boolean` | `true` | ドットナビゲーション表示 |
| `showArrows` | `boolean` | `true` | 矢印ナビゲーション表示 |
| `infinite` | `boolean` | `true` | 無限ループ |
| `onSlideChange` | `(index: number) => void` | - | スライド変更コールバック |

### SlideItem型

```tsx
interface SlideItem {
  id: string | number;
  image?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
}
```

---

## 組み合わせ例

### ログインフォーム

```tsx
function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Card>
      <h2>ログイン</h2>
      
      <Input 
        label="メールアドレス"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => 
          ({ ...prev, email: e.target.value })
        )}
        required
      />
      
      <Input 
        label="パスワード"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData(prev => 
          ({ ...prev, password: e.target.value })
        )}
        required
      />
      
      <Toggle 
        checked={rememberMe}
        onChange={setRememberMe}
        label="ログイン状態を保持する"
      />
      
      <Button type="submit" fullWidth>
        ログイン
      </Button>
    </Card>
  );
}
```

### 設定ダイアログ

```tsx
function SettingsModal({ isOpen, onClose }) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="設定">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Toggle 
          checked={settings.notifications}
          onChange={(checked) => 
            setSettings(prev => ({ ...prev, notifications: checked }))
          }
          label="プッシュ通知"
        />
        
        <Toggle 
          checked={settings.darkMode}
          onChange={(checked) => 
            setSettings(prev => ({ ...prev, darkMode: checked }))
          }
          label="ダークモード"
        />
        
        <Toggle 
          checked={settings.autoSave}
          onChange={(checked) => 
            setSettings(prev => ({ ...prev, autoSave: checked }))
          }
          label="自動保存"
        />
        
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <Button variant="outline" onClick={onClose}>
            キャンセル
          </Button>
          <Button onClick={onClose}>
            保存
          </Button>
        </div>
      </div>
    </Modal>
  );
}
```