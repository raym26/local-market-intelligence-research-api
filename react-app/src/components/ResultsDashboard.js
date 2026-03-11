import React from "react";
import ReactMarkdown from "react-markdown";
import MetricsBar from "./MetricsBar";
import CompetitorTable from "./CompetitorTable";

export default function ResultsDashboard({ result }) {
  return (
    <div className="results-dashboard">
      {result.summary_metrics && (
        <MetricsBar metrics={result.summary_metrics} />
      )}

      {result.market_dashboard && (
        <section className="dashboard-section">
          <h2>Market Dashboard</h2>
          <pre className="market-dashboard">{result.market_dashboard}</pre>
        </section>
      )}

      {result.competitor_table && (
        <section className="dashboard-section">
          <h2>Competitor Rankings</h2>
          <CompetitorTable markdownTable={result.competitor_table} />
        </section>
      )}

      {result.comprehensive_report && (
        <section className="dashboard-section">
          <h2>Full Intelligence Report</h2>
          <div className="comprehensive-report">
            <ReactMarkdown>{result.comprehensive_report}</ReactMarkdown>
          </div>
        </section>
      )}
    </div>
  );
}
