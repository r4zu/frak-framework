import { html, FrakComponent } from 'frak';

export class ClientRender extends FrakComponent {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h1>Client Component!</h1>
      </div>
    `;
  }
}

customElements.define('client-render', ClientRender);
