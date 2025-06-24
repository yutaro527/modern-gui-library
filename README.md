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

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Development mode with watch
npm run dev

# Run tests
npm run test

# Lint code
npm run lint

# Type check
npm run typecheck
```

## License

MIT