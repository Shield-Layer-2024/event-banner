import { styles } from "./styles.js";

const btn_close_svg=`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.09012 2.09012C2.21028 1.96996 2.4051 1.96996 2.52526 2.09012L6 5.56486L9.47474 2.09012C9.5949 1.96996 9.78972 1.96996 9.90988 2.09012C10.03 2.21028 10.03 2.4051 9.90988 2.52526L6.43514 6L9.90988 9.47474C10.03 9.5949 10.03 9.78972 9.90988 9.90988C9.78972 10.03 9.5949 10.03 9.47474 9.90988L6 6.43514L2.52526 9.90988C2.4051 10.03 2.21028 10.03 2.09012 9.90988C1.96996 9.78972 1.96996 9.5949 2.09012 9.47474L5.56486 6L2.09012 2.52526C1.96996 2.4051 1.96996 2.21028 2.09012 2.09012Z" fill="#9397EB"/>
</svg>
`
class EventBanner extends HTMLElement {
  static get observedAttributes() {
    return ["position", "width", "fixed"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // 获取属性，设置默认值
  get position() {
    // 默认位于50%的位置（中间）
    return this.getAttribute("position") || "50%";
  }

  get width() {
    return this.getAttribute("width") || "386px";
  }

  get fixed() {
    return this.getAttribute("fixed") !== "false";
  }

  // 验证并格式化position值
  validatePosition(position) {
    // 如果是数字，加上百分号
    if (!isNaN(position)) {
      return `${position}%`;
    }
    // 如果已经带有百分号，直接返回
    if (position.endsWith("%")) {
      return position;
    }
    // 其他情况返回默认值50%
    return "50%";
  }

  connectedCallback() {
    this.render();
    this.setupCloseButton();
    this.updateStyles();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.updateStyles();
    }
  }

  setupCloseButton() {
    const closeBanner = this.shadowRoot.querySelector(".banner-close");

    closeBanner.addEventListener("click", () => {
      // 添加关闭动画类
      this.classList.add("closing");

      // 等待动画完成后移除元素
      this.addEventListener(
        "transitionend",
        () => {
          this.remove();
        },
        { once: true }
      );
    });
  }

  updateStyles() {
    // 设置宽度
    this.style.width = this.width;

    // 设置定位
    if (this.fixed) {
      this.style.position = "fixed";
      this.style.left = "50%";
      this.style.transform = "translateX(-50%)";

      // 设置垂直位置
      const position = this.validatePosition(this.position);

      this.style.top = position;
      this.style.transform = "translate(-50%, -50%)";
    } else {
      this.style.position = "static";
      this.style.transform = "none";
    }
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>${styles}</style>
      <div class="banner-icon-container" part="icon-container">
          <slot name="icon"></slot>
      </div>
      <div class="banner-link" part="link-container">
        <slot name="link"></slot>
      </div>
      <div class="banner-close" part="close-container">
        <slot name="close">
            ${btn_close_svg}
        </slot>
      </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

}

customElements.define("event-banner", EventBanner);
