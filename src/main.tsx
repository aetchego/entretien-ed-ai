import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversation from "./pages/ai-conversation/index.tsx";
import Evaluation from "./pages/evaluation/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <div className="flex items-center h-full w-full">coucou</div>
            }
          ></Route>
          <Route path="conversation" element={<Conversation />} />
          <Route path="evaluations/:studentId" element={<Evaluation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
