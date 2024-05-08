// src/index.tsx

import PdfCardWebComponent from "./web-component";
import DocumentButtonComponent from "./web-component-button"

customElements.define("document-card", PdfCardWebComponent);
customElements.define("document-button", DocumentButtonComponent);