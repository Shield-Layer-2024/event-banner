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
    transform: translateY(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  @media screen and (max-width: 768px) {
    :host {
      width: 90.4%;
      min-width: 350px;
    }
  }
  
  :host(.closing) {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .banner-icon-container {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
  }

  .banner-link {
    flex: 1;
    font-weight: 500;
    font-family: Inter;
    font-size: 12px;
    padding: 12px 0;
    white-space: normal;
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
    margin: 0 0.75rem;
  }

  .banner-close:hover {
    opacity: 0.8;
  }
`; 