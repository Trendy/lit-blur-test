import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('just-inputs')
export class JustInputs extends LitElement {
  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('blur', (event) => {
      console.log('Component Blur', event);
      alert('Component blurred!');
    });
  }
  override render() {
    return html`
      <input type="text" />
      <input type="text" />
      <div>This isn't an input...</div>
      <span>Another, not input element</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'just-inputs': JustInputs;
  }
}
