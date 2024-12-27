export const styles = `
  :host {
    display: flex;
    align-items: center;
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
    font-weight: 500;
    font-family: Inter;
    font-size: 12px;
    padding: 12px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  ::slotted([slot="link"]) {
    color: #FFF;
    text-decoration: none;
  }

  .banner-close {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    padding: 2px;
    margin-right: 0.75rem;
  }

  .banner-close:hover {
    opacity: 0.8;
  }
`; 