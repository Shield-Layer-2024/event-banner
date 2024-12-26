export const styles = `
  :host {
    display: flex;
    align-items: center;
    padding: 12px 8px 12px 22px;
    border-radius: 3px;
    border: 0.5px solid var(--sub_6, #454999);
    background-color: #000;
    color: #fff;
    box-sizing: border-box;
    z-index: 1000;
    opacity: 1;
    gap: 0.75rem;
    transform: translateY(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  :host(.closing) {
    opacity: 0;
    transform: translateY(-20px);
  }
  .banner-icon-container {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .banner-link {
    flex: 1;
    color: #FFF;
    font-weight: 500;
    font-family: Inter;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ::slotted([slot="link"]) {
    cursor: pointer;
    text-decoration: none;
    color: #FFF;
  }

  .banner-link:hover {
    text-decoration: underline;
  }
  .banner-close {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    padding: 2px;
  }

  .banner-close:hover {
    opacity: 0.8;
  }
`; 