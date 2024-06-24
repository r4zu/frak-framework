// Importing required modules from the 'lit' library and local files.

// Importing `LitElement` and renaming it as `FrakComponent`
// alongside the `html` and `css` tag functions from the "lit" library.
import { LitElement as FrakComponent, html, css } from 'lit';

// `FrakRouter` is a custom router module responsible for managing application routes.
import FrakRouter from './router.js';

/**
 * FrakInternal class represents the core of the Frak application.
 * Currently, it serves as a placeholder with no internal logic.
 */
class FrakInternal {
  /**
   * Constructor for the FrakInternal class.
   */
  constructor() {}
}

/**
 * Frak function provides and instance of the FrakInternal class.
 *
 * @returns {FrakInternal} An instance of the FrakInternal class.
 */
function Frak() {
  return new FrakInternal();
}

// Exporting the main `Frak` function as the default export.
export default Frak;

export { html, css, FrakComponent, FrakRouter };
