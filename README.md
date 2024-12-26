# Event Banner Component

A customizable web component for displaying event banners on your website. Easy to integrate and fully responsive.

[Demo](https://shield-layer-2024.github.io/event-banner/)

## Installation

```bash
# Using npm
npm install event-banner

# Using yarn
yarn add event-banner

# Using pnpm
pnpm add event-banner
```

## Usage

### Using ES modules
```js
// Import the component
import 'event-banner';

// Use in your HTML
<event-banner>
  <img slot="icon" src="icon.svg" alt="Icon">
  <a slot="link">Your message here</a>
</event-banner>
```

### Using CDN
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/event-banner"></script>
```

## Attributes

| Attribute | Description | Default | Example |
|-----------|-------------|---------|---------|
| `position` | Percentage from top (for fixed position) | `"50%"` | `"30%"`, `"70%"` |
| `width` | Banner width | `"386px"` | `"100%"`, `"500px"` |
| `fixed` | Fixed positioning | `true` | `"false"` |

## Slots

The component provides three slots for content customization:

- `icon`: For the banner icon (usually an image)
- `link`: For the main content/message
- `close`: For the close button (has a default implementation)

## Styling

### Using ::part

The component exposes several parts that can be styled from the outside:

```css
/* Style the icon container */
event-banner::part(icon-container) {
  background: rgba(255, 255, 255, 0.1);
  padding: 4px;
  border-radius: 4px;
}

/* Style the link container */
event-banner::part(link-container) {
  padding: 0 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

/* Style the close button container */
event-banner::part(close-container) {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
```

## Examples

### Default Banner (Center Position)
```html
<event-banner>
  <img slot="icon" src="icon.svg" alt="Icon">
  <a slot="link">Your message here</a>
</event-banner>
```

### Custom Position (30% from top)
```html
<event-banner position="30">
  <img slot="icon" src="icon.svg" alt="Icon">
  <a slot="link">Your message here</a>
</event-banner>
```

### Static Banner (Full Width)
```html
<event-banner fixed="false" width="100%">
  <img slot="icon" src="icon.svg" alt="Icon">
  <a slot="link">Your message here</a>
</event-banner>
```

### Custom Close Button
```html
<event-banner>
  <img slot="icon" src="icon.svg" alt="Icon">
  <a slot="link">Your message here</a>
  <button slot="close" class="custom-close">✕</button>
</event-banner>
```

## Default Styles

The banner comes with a default dark theme:
- Dark background
- White text
- Responsive layout
- Smooth close animation
- Flexible width
- Optional fixed positioning 