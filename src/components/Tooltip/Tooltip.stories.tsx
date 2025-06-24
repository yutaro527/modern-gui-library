import type { Story } from '@ladle/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

export const Default: Story = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <Tooltip content="これはツールチップです">
      <Button>ホバーしてください</Button>
    </Tooltip>
  </div>
);

export const Positions: Story = () => (
  <div style={{ padding: '100px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '50px', placeItems: 'center' }}>
    <Tooltip content="上に表示" position="top">
      <Button>上</Button>
    </Tooltip>
    <Tooltip content="下に表示" position="bottom">
      <Button>下</Button>
    </Tooltip>
    <Tooltip content="左に表示" position="left">
      <Button>左</Button>
    </Tooltip>
    <Tooltip content="右に表示" position="right">
      <Button>右</Button>
    </Tooltip>
  </div>
);