import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        モーダルを開く
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="デフォルトモーダル"
      >
        <p>これはデフォルトのモーダルです。</p>
        <p>ESCキーまたは背景をクリックして閉じることができます。</p>
      </Modal>
    </div>
  );
};

export const SmallModal: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        小さいモーダル
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="小さいモーダル"
        size="small"
      >
        <p>小さいサイズのモーダルです。</p>
      </Modal>
    </div>
  );
};

export const LargeModal: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        大きいモーダル
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="大きいモーダル"
        size="large"
      >
        <div>
          <p>大きいサイズのモーダルです。長いコンテンツを表示するのに適しています。</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </Modal>
    </div>
  );
};

export const FullscreenModal: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        フルスクリーンモーダル
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="フルスクリーンモーダル"
        size="fullscreen"
      >
        <div>
          <p>フルスクリーンサイズのモーダルです。</p>
          <p>大量のコンテンツや複雑なレイアウトに適しています。</p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>セクション 1</h3>
            <p>コンテンツが続きます...</p>
            
            <h3>セクション 2</h3>
            <p>さらにコンテンツ...</p>
            
            <h3>セクション 3</h3>
            <p>まだまだコンテンツがあります...</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const NoTitle: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        タイトルなしモーダル
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <h3 style={{ marginTop: 0 }}>カスタムタイトル</h3>
        <p>ヘッダーにタイトルがないモーダルです。</p>
        <p>コンテンツ内で自由にタイトルを配置できます。</p>
      </Modal>
    </div>
  );
};

export const NoCloseButton: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        閉じるボタンなし
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="閉じるボタンなし"
        showCloseButton={false}
      >
        <p>右上の×ボタンがないモーダルです。</p>
        <p>ESCキーまたは背景クリックで閉じることができます。</p>
        <div style={{ marginTop: '1rem' }}>
          <Button onClick={() => setIsOpen(false)}>
            手動で閉じる
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export const PreventCloseOnOverlay: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        背景クリック無効
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="背景クリックで閉じない"
        closeOnOverlayClick={false}
      >
        <p>背景をクリックしても閉じないモーダルです。</p>
        <p>×ボタンまたはESCキーで閉じてください。</p>
      </Modal>
    </div>
  );
};

export const PreventCloseOnEscape: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        ESCキー無効
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="ESCキーで閉じない"
        closeOnEscape={false}
      >
        <p>ESCキーを押しても閉じないモーダルです。</p>
        <p>×ボタンまたは背景クリックで閉じてください。</p>
      </Modal>
    </div>
  );
};

export const WithForm: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('フォーム送信:', formData);
    setIsOpen(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        フォーム付きモーダル
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="お問い合わせフォーム"
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
              お名前
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              required
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              required
            />
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              キャンセル
            </Button>
            <Button type="submit">
              送信
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const ScrollableContent: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        スクロール可能なコンテンツ
      </Button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="長いコンテンツ"
      >
        <div>
          <p>このモーダルには長いコンテンツが含まれており、スクロールが可能です。</p>
          
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} style={{ margin: '1rem 0', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
              <h4>セクション {i + 1}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          ))}
          
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Button onClick={() => setIsOpen(false)}>
              完了
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};