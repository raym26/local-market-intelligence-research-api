const API_BASE =
  "https://local-market-intelligence-api-1040656024374.us-central1.run.app";

/**
 * Run a market intelligence analysis.
 *
 * @param {string} businessType
 * @param {string} location
 * @param {string} [additionalContext]
 * @returns {Promise<object>} The `analysis` object from the API response.
 */
export async function analyzeMarket(businessType, location, additionalContext = "") {
  const response = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      business_type: businessType,
      location: location,
      additional_context: additionalContext,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`API error ${response.status}: ${text || response.statusText}`);
  }

  const data = await response.json();
  return data.analysis;
}
