import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Anti-copy & privacy protection
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "u" || e.key === "s" || e.key === "a")) {
    e.preventDefault();
  }
  if (e.key === "F12") e.preventDefault();
});

createRoot(document.getElementById("root")!).render(<App />);
