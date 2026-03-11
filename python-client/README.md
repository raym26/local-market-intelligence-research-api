# market-intelligence Python Client

Python SDK for the [Local Market Intelligence API](https://local-market-intelligence-api-1040656024374.us-central1.run.app).

## Install

```bash
pip install git+https://github.com/raym26/local-market-intelligence-research-api.git#subdirectory=python-client
```

## Quick Start

```python
from market_intelligence import MarketIntelligenceClient

client = MarketIntelligenceClient()
result = client.analyze("coffee shops", "Austin, TX")

print(result.market_dashboard)
print(result.competitor_table)
print(result.comprehensive_report)
print(result.competition_level)          # "LOW" / "MEDIUM" / "HIGH"
print(result.summary_metrics.total_businesses_analyzed)
print(result.summary_metrics.opportunities_identified)

health = client.health_check()
print(health["status"])                  # "healthy"
```

## Constructor Options

```python
client = MarketIntelligenceClient(
    base_url="https://...",   # override API URL (default: production)
    timeout=90,               # seconds (default: 60)
)
```

## Error Handling

```python
from market_intelligence import (
    MarketIntelligenceClient,
    APIError,
    AnalysisTimeoutError,
    InvalidResponseError,
)

client = MarketIntelligenceClient()

try:
    result = client.analyze("restaurants", "Chicago, IL")
except AnalysisTimeoutError:
    print("Request timed out — try a larger timeout value")
except APIError as e:
    print(f"API returned HTTP {e.status_code}")
except InvalidResponseError as e:
    print(f"Could not parse response: {e}")
```

## Response Fields

| Attribute | Type | Description |
|-----------|------|-------------|
| `result.market_dashboard` | `str` | ASCII executive dashboard |
| `result.competitor_table` | `str` | Markdown competitor ranking table |
| `result.comprehensive_report` | `str` | Full markdown intelligence report |
| `result.competition_level` | `str` | `"LOW"` / `"MEDIUM"` / `"HIGH"` |
| `result.summary_metrics.total_businesses_analyzed` | `int` | Number of businesses found |
| `result.summary_metrics.opportunities_identified` | `int` | Number of opportunities found |
| `result.summary_metrics.geographic_clusters` | `int` | Number of geographic clusters |
| `result.summary_metrics.data_sources` | `List[str]` | APIs used (e.g. `["google_places"]`) |
