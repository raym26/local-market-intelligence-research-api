import React, { useState } from "react";

export default function AnalysisForm({ onSubmit, isLoading }) {
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [context, setContext] = useState("");
  const [validationError, setValidationError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!businessType.trim()) {
      setValidationError("Business type is required.");
      return;
    }
    if (!location.trim()) {
      setValidationError("Location is required.");
      return;
    }
    setValidationError("");
    onSubmit(businessType.trim(), location.trim(), context.trim());
  }

  return (
    <form className="analysis-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="businessType">Business Type</label>
        <input
          id="businessType"
          type="text"
          placeholder="e.g. coffee shops, restaurants, gyms"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="e.g. Austin, TX"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="context">Additional Context (optional)</label>
        <input
          id="context"
          type="text"
          placeholder="e.g. Focus on premium market opportunities"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {validationError && (
        <p className="form-validation-error">{validationError}</p>
      )}

      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? "Analyzing…" : "Analyze Market"}
      </button>
    </form>
  );
}
