"""Basic usage example for the market-intelligence Python client."""

from market_intelligence import MarketIntelligenceClient, APIError, AnalysisTimeoutError

client = MarketIntelligenceClient()

# Health check
print("Checking API health...")
health = client.health_check()
print(f"Status: {health['status']} | Agent available: {health['agent_available']}\n")

# Run an analysis
print("Running market analysis for coffee shops in Austin, TX...")
result = client.analyze(
    business_type="coffee shops",
    location="Austin, TX",
    additional_context="Focus on premium specialty coffee opportunities",
)

print(f"Competition level : {result.competition_level}")
print(f"Businesses analyzed: {result.summary_metrics.total_businesses_analyzed}")
print(f"Opportunities found: {result.summary_metrics.opportunities_identified}")
print(f"Geographic clusters: {result.summary_metrics.geographic_clusters}")
print()
print("--- Market Dashboard ---")
print(result.market_dashboard)
print()
print("--- Competitor Table ---")
print(result.competitor_table)
