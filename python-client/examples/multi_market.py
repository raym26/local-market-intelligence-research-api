"""Multi-market analysis example — compare the same business type across cities."""

from market_intelligence import MarketIntelligenceClient, MarketIntelligenceError

client = MarketIntelligenceClient(timeout=90)

markets = [
    ("coffee shops", "Seattle, WA"),
    ("coffee shops", "Portland, OR"),
    ("coffee shops", "San Francisco, CA"),
]

results = []
for business_type, location in markets:
    print(f"Analyzing {business_type} in {location}...")
    try:
        result = client.analyze(business_type, location)
        results.append((location, result))
        print(
            f"  {location}: {result.summary_metrics.total_businesses_analyzed} competitors, "
            f"{result.summary_metrics.opportunities_identified} opportunities, "
            f"competition={result.competition_level}"
        )
    except MarketIntelligenceError as e:
        print(f"  {location}: FAILED — {e}")

print()
print("=== Summary ===")
for location, result in results:
    m = result.summary_metrics
    print(
        f"{location:25s}  competitors={m.total_businesses_analyzed:3d}  "
        f"opportunities={m.opportunities_identified:2d}  "
        f"level={result.competition_level}"
    )
