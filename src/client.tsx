import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Landing from "@/components/Landing";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Landing />
    </LanguageProvider>
  </React.StrictMode>
);
