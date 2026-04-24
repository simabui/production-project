import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider } from "app/providers/StoreProvider";
import "shared/config/i18n/i18n";
import { PageError } from "widgets/PageError/index";
import App from "./app/App";
import { ThemeProvider } from "./app/providers/themeProvider/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
