/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'just-inputs': JustInputs;
  }
}
