import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";
import TabProvider from "./contexts/Tab/TabContext.jsx";
import ContextProvider from "./contexts/Auth/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <TabProvider>
          <App />
        </TabProvider>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
