import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <strong>Analysis failed</strong>
      <p>{message}</p>
    </div>
  );
}
