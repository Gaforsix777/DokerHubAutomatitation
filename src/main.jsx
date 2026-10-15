import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app">
      <section className="card">
        <p className="eyebrow">DokerHub Automatitation</p>
        <h1>Hola desde React</h1>
        <p>La aplicación está ejecutándose dentro de Docker en Oracle VM.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
