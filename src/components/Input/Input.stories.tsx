import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Input, InputProps } from './Input';

// アイコンコンポーネント（実際のプロジェクトではアイコンライブラリを使用）
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const Default: Story<InputProps> = () => (
  <Input placeholder="入力してください" />
);

export const WithLabel: Story<InputProps> = () => (
  <Input 
    label="ユーザー名" 
    placeholder="ユーザー名を入力"
  />
);

export const Required: Story<InputProps> = () => (
  <Input 
    label="メールアドレス" 
    placeholder="example@email.com"
    required
  />
);

export const WithHelperText: Story<InputProps> = () => (
  <Input 
    label="パスワード" 
    type="password"
    placeholder="パスワードを入力"
    helperText="8文字以上で英数字を含めてください"
  />
);

export const WithError: Story<InputProps> = () => (
  <Input 
    label="メールアドレス" 
    placeholder="example@email.com"
    errorText="有効なメールアドレスを入力してください"
    defaultValue="invalid-email"
  />
);

export const Disabled: Story<InputProps> = () => (
  <Input 
    label="無効なフィールド" 
    placeholder="入力できません"
    disabled
    defaultValue="無効な値"
  />
);

export const Loading: Story<InputProps> = () => (
  <Input 
    label="検索中..." 
    placeholder="検索キーワード"
    loading
    defaultValue="検索中"
  />
);

export const Sizes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input 
      label="小サイズ" 
      size="small" 
      placeholder="小サイズの入力欄"
    />
    <Input 
      label="中サイズ（デフォルト）" 
      size="medium" 
      placeholder="中サイズの入力欄"
    />
    <Input 
      label="大サイズ" 
      size="large" 
      placeholder="大サイズの入力欄"
    />
  </div>
);

export const Variants: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input 
      label="アウトライン（デフォルト）" 
      variant="outlined" 
      placeholder="アウトライン形式"
    />
    <Input 
      label="塗りつぶし" 
      variant="filled" 
      placeholder="塗りつぶし形式"
    />
  </div>
);

export const FullWidth: Story = () => (
  <Input 
    label="フル幅の入力欄" 
    placeholder="画面幅いっぱいに表示されます"
    fullWidth
  />
);

export const WithStartIcon: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input 
      label="検索" 
      placeholder="検索キーワードを入力"
      startIcon={<SearchIcon />}
    />
    <Input 
      label="メールアドレス" 
      type="email"
      placeholder="example@email.com"
      startIcon={<EmailIcon />}
    />
  </div>
);

export const WithEndIcon: Story = () => (
  <Input 
    label="パスワード" 
    type="password"
    placeholder="パスワードを入力"
    endIcon={<EyeIcon />}
  />
);

export const WithBothIcons: Story = () => (
  <Input 
    label="検索" 
    placeholder="検索キーワードを入力"
    startIcon={<SearchIcon />}
    endIcon={<EyeIcon />}
  />
);

export const DifferentTypes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input 
      label="テキスト" 
      type="text" 
      placeholder="テキストを入力"
    />
    <Input 
      label="メール" 
      type="email" 
      placeholder="example@email.com"
    />
    <Input 
      label="パスワード" 
      type="password" 
      placeholder="パスワードを入力"
    />
    <Input 
      label="数値" 
      type="number" 
      placeholder="数値を入力"
    />
    <Input 
      label="電話番号" 
      type="tel" 
      placeholder="090-1234-5678"
    />
    <Input 
      label="URL" 
      type="url" 
      placeholder="https://example.com"
    />
    <Input 
      label="日付" 
      type="date"
    />
    <Input 
      label="時間" 
      type="time"
    />
  </div>
);

export const InteractiveExample: Story = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    // バリデーション例
    if (newValue.length > 0 && newValue.length < 3) {
      setError('3文字以上入力してください');
    } else {
      setError('');
    }
  };

  return (
    <Input 
      label="リアルタイムバリデーション" 
      placeholder="3文字以上入力してください"
      value={value}
      onChange={handleChange}
      errorText={error}
      helperText={error ? '' : `入力文字数: ${value.length}文字`}
    />
  );
};

export const FormExample: Story = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    
    // エラーをクリア
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.username) {
      newErrors.username = 'ユーザー名は必須です';
    }
    
    if (!formData.email) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formData.password) {
      newErrors.password = 'パスワードは必須です';
    } else if (formData.password.length < 8) {
      newErrors.password = 'パスワードは8文字以上である必要があります';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'パスワードが一致しません';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // eslint-disable-next-line no-console
      console.log('フォーム送信:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Input 
        label="ユーザー名" 
        placeholder="ユーザー名を入力"
        value={formData.username}
        onChange={handleChange('username')}
        errorText={errors.username}
        required
      />
      
      <Input 
        label="メールアドレス" 
        type="email"
        placeholder="example@email.com"
        value={formData.email}
        onChange={handleChange('email')}
        errorText={errors.email}
        startIcon={<EmailIcon />}
        required
      />
      
      <Input 
        label="パスワード" 
        type="password"
        placeholder="パスワードを入力"
        value={formData.password}
        onChange={handleChange('password')}
        errorText={errors.password}
        helperText="8文字以上で入力してください"
        required
      />
      
      <Input 
        label="パスワード確認" 
        type="password"
        placeholder="パスワードを再入力"
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
        errorText={errors.confirmPassword}
        required
      />
      
      <button 
        type="submit" 
        style={{ 
          padding: '12px 24px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px', 
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        アカウント作成
      </button>
    </form>
  );
};