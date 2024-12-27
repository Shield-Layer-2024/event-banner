# Event Banner Component

A customizable web component for displaying event banners on your website. Easy to integrate and fully responsive.

![event-banner](https://cdn.jsdelivr.net/gh/Shield-Layer-2024/event-banner@main/screenshot/event-banner.png)

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
<script type="module" src="https://cdn.jsdelivr.net/npm/event-banner@latest/src/event-banner.js"></script>
```

## Attributes

| Attribute  | Description                              | Default   | Example             |
| ---------- | ---------------------------------------- | --------- | ------------------- |
| `position` | Percentage from top (for fixed position) | `"50%"`   | `"30%"`, `"70%"`    |
| `width`    | Banner width                             | `"386px"` | `"100%"`, `"500px"` |
| `fixed`    | Fixed positioning                        | `true`    | `"false"`           |

## Slots

The component provides three slots for content customization:

- `icon`: For the banner icon (usually an image)
- `link`: For the main content/message
- `close`: For the close button (has a default implementation)

## Styling

### Using :host
```html
<event-banner style="background: sandybrown;">
  <img src="./banner.svg" alt="Info icon" slot="icon" />
  <a slot="link">
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam...
  </a>
</event-banner>
```

### Using ::part

The component exposes several parts that can be styled from the outside:

```css
/* Style the icon container */
#custom-parts-banner::part(icon-container) {
  background: sandybrown;
  padding: 4px;
  border-radius: 4px;
}

/* Style the link container */

#custom-parts-banner::part(link-container) {
  border: 2px solid salmon;
}

/* Style the close button container */
#custom-parts-banner::part(close-container) {
  background: rgba(255, 255, 255, 0.1);
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
```

```html
<event-banner id="custom-parts-banner">
  <img src="./banner.svg" alt="Info icon" slot="icon" />
  <a slot="link">
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam...
  </a>
</event-banner>
```

## Examples

### Default Banner (Center Position)

```html
<event-banner>
  <img src="./banner.svg" alt="Info icon" slot="icon" />
  <a slot="link">Your message here</a>
</event-banner>
```

### Custom Position (30% from top)

```html
<event-banner position="30">
  <img src="./banner.svg" alt="Info icon" slot="icon" />
  <a slot="link">Your message here</a>
</event-banner>
```

### Static Banner (Full Width)

```html
<event-banner fixed="false" width="100%">
  <img src="./banner.svg" alt="Info icon" slot="icon" />
  <a slot="link">
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam...
  </a>
</event-banner>
```

### Custom Close Button

```html
<event-banner>
  <img src="./banner.svg" alt="Info icon" slot="icon" />
  <a slot="link">
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam...
  </a>
  <button slot="close" class="close-button">
    <img src="./btn_close.svg" alt="close" style="width: 30px;height: 30px;" />
  </button>
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
