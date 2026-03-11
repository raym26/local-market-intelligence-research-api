import React from "react";

export default function LoadingState() {
  return (
    <div className="loading-state">
      <div className="spinner" aria-hidden="true"></div>
      <p className="loading-label">Running market analysis…</p>
      <p className="loading-note">This typically takes 10–30 seconds.</p>
    </div>
  );
}
