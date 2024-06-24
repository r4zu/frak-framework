import { html, FrakComponent } from 'frak';

export class FrakSample extends FrakComponent {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h1>Frak Sample</h1>
      </div>
    `;
  }
}

customElements.define('frak-sample', FrakSample);
