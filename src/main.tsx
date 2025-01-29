import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversation from "./pages/ai-conversation/index.tsx";
import Evaluation from "./pages/evaluation/index.tsx";
import Evaluations from "./pages/evaluations/index.tsx";
import LandingPage from "./pages/landing-page/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="conversation" element={<Conversation />} />
          <Route path="evaluations" element={<Evaluations />}>
            <Route path=":studentId" element={<Evaluation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
