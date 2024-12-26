declare class EventBanner extends HTMLElement {
  static get observedAttributes(): string[];
  
  // Properties
  get position(): string;
  get width(): string;
  get fixed(): boolean;

  // Methods
  connectedCallback(): void;
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'event-banner': EventBanner;
  }
} 