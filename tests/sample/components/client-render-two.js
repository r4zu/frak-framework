import { html, FrakComponent, FrakRouter } from 'frak';

const routes = [
  {
    path: '/client-render',
    template: '<nested-component></nested-component>',
  },
  {
    path: '/page',
    template: '<navigated-component></navigated-component>',
  },
];

export class ClientRender extends FrakComponent {
  static properties = {};

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.router = new FrakRouter('client-render', routes, this.shadowRoot);
  }

  render() {
    return html``;
  }
}

customElements.define('client-render-two', ClientRender);
