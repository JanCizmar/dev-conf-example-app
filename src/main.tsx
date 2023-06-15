import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  DevTools,
  FormatSimple,
  Tolgee,
  TolgeePlugin,
  TolgeeProvider,
} from "@tolgee/react";

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use((tolgee, tools) => {
    tolgee.on("language", () => {
      console.log("Language changed to: " + tolgee.getLanguage());
    });
    return tolgee;
  })
  .init({
    language: "en",

    // for development
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,

    // for production
    staticData: {},
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TolgeeProvider tolgee={tolgee} fallback="Loading">
      <App/>
    </TolgeeProvider>
  </React.StrictMode>
);
