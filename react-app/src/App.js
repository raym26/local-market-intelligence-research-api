import React, { useState } from "react";
import "./App.css";
import { analyzeMarket } from "./api/marketIntelligence";
import AnalysisForm from "./components/AnalysisForm";
import LoadingState from "./components/LoadingState";
import ResultsDashboard from "./components/ResultsDashboard";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(businessType, location, additionalContext) {
    setStatus("loading");
    setResult(null);
    setErrorMessage(null);

    try {
      const data = await analyzeMarket(businessType, location, additionalContext);
      setResult(data);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err.message || "An unexpected error occurred.");
      setStatus("error");
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Local Market Intelligence</h1>
        <p className="app-subtitle">
          AI-powered competitive analysis for any business, anywhere.
        </p>
      </header>

      <main className="app-main">
        <AnalysisForm onSubmit={handleSubmit} isLoading={status === "loading"} />

        {status === "loading" && <LoadingState />}
        {status === "error" && <ErrorMessage message={errorMessage} />}
        {status === "success" && result && <ResultsDashboard result={result} />}
      </main>

      <footer className="app-footer">
        <p>
          Powered by{" "}
          <a
            href="https://local-market-intelligence-api-1040656024374.us-central1.run.app/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Local Market Intelligence API
          </a>
        </p>
      </footer>
    </div>
  );
}
