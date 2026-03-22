import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "shared/config/i18n/i18n";
import App from "./app/App";
import { ThemeProvider } from "./app/providers/themeProvider/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
