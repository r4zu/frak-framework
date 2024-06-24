import { css, html, FrakComponent } from 'frak';

export class NavigatedComponent extends FrakComponent {
  static styles = css`
    div {
      border: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Navigated Component</h2>
      </div>
    `;
  }
}

customElements.define('navigated-component', NavigatedComponent);