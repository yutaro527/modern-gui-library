import type { Story } from '@ladle/react';
import { Slideshow, SlideshowProps } from './Slideshow';

const sampleSlides = [
  {
    id: 1,
    image: 'https://via.placeholder.com/800x400/4F46E5/white?text=スライド1',
    title: 'スライド 1',
    description: 'これは最初のスライドです。美しい画像と説明文が表示されます。'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/800x400/7C3AED/white?text=スライド2',
    title: 'スライド 2',
    description: 'これは2番目のスライドです。異なる色とコンテンツが表示されます。'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/800x400/DC2626/white?text=スライド3',
    title: 'スライド 3',
    description: 'これは3番目のスライドです。赤い背景で目立つデザインです。'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/800x400/059669/white?text=スライド4',
    title: 'スライド 4',
    description: 'これは最後のスライドです。緑色で爽やかな印象を与えます。'
  }
];

const customContentSlides = [
  {
    id: 1,
    content: (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2>カスタムコンテンツ 1</h2>
        <p>HTMLコンテンツを直接埋め込むことができます</p>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: 'white',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2>カスタムコンテンツ 2</h2>
        <button style={{ padding: '10px 20px', margin: '10px', border: 'none', borderRadius: '5px' }}>
          ボタンも配置できます
        </button>
      </div>
    )
  }
];

export const Default: Story<SlideshowProps> = () => (
  <Slideshow slides={sampleSlides} />
);

export const AutoPlay: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides} 
    autoPlay={true}
    interval={2000}
  />
);

export const WithoutDots: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides} 
    showDots={false}
  />
);

export const WithoutArrows: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides} 
    showArrows={false}
  />
);

export const NonInfinite: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides} 
    infinite={false}
  />
);

export const MinimalControls: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides} 
    showDots={false}
    showArrows={false}
    autoPlay={true}
    interval={3000}
  />
);

export const CustomContent: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={customContentSlides}
    autoPlay={true}
    interval={4000}
  />
);

export const SingleSlide: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={[sampleSlides[0]]}
  />
);

export const TwoSlides: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides.slice(0, 2)}
    autoPlay={true}
    interval={2500}
  />
);

export const WithCallback: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides}
    onSlideChange={(index) => console.log(`スライドが ${index + 1} に変更されました`)}
  />
);

export const FastAutoPlay: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides}
    autoPlay={true}
    interval={1000}
  />
);

export const SlowAutoPlay: Story<SlideshowProps> = () => (
  <Slideshow 
    slides={sampleSlides}
    autoPlay={true}
    interval={5000}
  />
);