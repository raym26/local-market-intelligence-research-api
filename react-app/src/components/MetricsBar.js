import React from "react";

export default function MetricsBar({ metrics }) {
  const tiles = [
    {
      label: "Businesses Analyzed",
      value: metrics.total_businesses_analyzed ?? "—",
    },
    {
      label: "Opportunities Found",
      value: metrics.opportunities_identified ?? "—",
    },
    {
      label: "Geographic Clusters",
      value: metrics.geographic_clusters ?? "—",
    },
    {
      label: "Data Sources",
      value: metrics.data_sources?.length
        ? metrics.data_sources.join(", ")
        : "—",
    },
  ];

  return (
    <div className="metrics-bar">
      {tiles.map((tile) => (
        <div className="metric-tile" key={tile.label}>
          <span className="metric-value">{tile.value}</span>
          <span className="metric-label">{tile.label}</span>
        </div>
      ))}
    </div>
  );
}
