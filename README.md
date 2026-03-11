# Local Market Intelligence Researcher API

> 🚀 **AI-powered market analysis and competitive intelligence for local businesses**

Get comprehensive market insights, competitor analysis, and strategic opportunities for any business type in any location worldwide.

## Client Libraries & Demo

| | |
|---|---|
| **Python SDK** | `pip install git+https://github.com/raym26/local-market-intelligence-research-api.git#subdirectory=python-client` |
| **React Demo** | [Live Demo](https://raym26.github.io/local-market-intelligence-research-api) |
| **Jupyter Notebook** | [local_market_intelligence_researcher_demo.ipynb](./local_market_intelligence_researcher_demo.ipynb) |

## 🌟 Features

- **Multi-Source Data Collection** - Google Places, Foursquare, and enhanced analytics
- **Geographic Clustering** - Identify competition density and expansion opportunities  
- **Competitive Intelligence** - Detailed competitor rankings and market positioning
- **Strategic Opportunities** - AI-identified market gaps and business opportunities
- **Executive Reports** - Professional dashboards and actionable recommendations
- **Real-time Analysis** - Live market data with up-to-date competitor information

## 📖 API Documentation

**Base URL:** `https://local-market-intelligence-api-1040656024374.us-central1.run.app`

**Interactive Documentation:** [/docs](https://local-market-intelligence-api-1040656024374.us-central1.run.app/docs)

## 🚀 Quick Start

### Health Check
```bash
curl https://local-market-intelligence-api-1040656024374.us-central1.run.app/health
```

### Market Analysis
```bash
curl -X POST "https://local-market-intelligence-api-1040656024374.us-central1.run.app/analyze" \
  -H "Content-Type: application/json" \
  -d '{
    "business_type": "coffee shops",
    "location": "Austin, TX",
    "additional_context": "Focus on premium market opportunities"
  }'
```

## 💻 Code Examples

### JavaScript/Node.js
```javascript
const analyzeMarket = async (businessType, location) => {
  const response = await fetch('https://local-market-intelligence-api-1040656024374.us-central1.run.app/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      business_type: businessType,
      location: location,
      additional_context: "Market entry analysis"
    })
  });
  
  const data = await response.json();
  return data.analysis;
};

// Usage
const marketData = await analyzeMarket("restaurants", "San Francisco, CA");
console.log(marketData.comprehensive_report);
```

### Python
```python
import requests
import json

def analyze_market(business_type, location, context=""):
    url = "https://local-market-intelligence-api-1040656024374.us-central1.run.app/analyze"
    
    payload = {
        "business_type": business_type,
        "location": location,
        "additional_context": context
    }
    
    response = requests.post(url, json=payload)
    return response.json()

# Usage
result = analyze_market("coffee shops", "Portland, OR", "Premium market focus")
print(result['analysis']['comprehensive_report'])
```

### PHP
```php
<?php
function analyzeMarket($businessType, $location, $context = "") {
    $url = 'https://local-market-intelligence-api-1040656024374.us-central1.run.app/analyze';
    
    $data = array(
        'business_type' => $businessType,
        'location' => $location,
        'additional_context' => $context
    );
    
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data)
        )
    );
    
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    return json_decode($result, true);
}

// Usage
$analysis = analyzeMarket("restaurants", "Chicago, IL");
echo $analysis['analysis']['comprehensive_report'];
?>
```

### Ruby
```ruby
require 'net/http'
require 'json'

def analyze_market(business_type, location, context = "")
  uri = URI('https://local-market-intelligence-api-1040656024374.us-central1.run.app/analyze')
  
  payload = {
    business_type: business_type,
    location: location,
    additional_context: context
  }
  
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  
  request = Net::HTTP::Post.new(uri)
  request['Content-Type'] = 'application/json'
  request.body = payload.to_json
  
  response = http.request(request)
  JSON.parse(response.body)
end

# Usage
result = analyze_market("coffee shops", "Seattle, WA", "Market expansion analysis")
puts result['analysis']['comprehensive_report']
```

## 📊 Example Response

### Request
```json
{
  "business_type": "coffee shops",
  "location": "San Francisco, CA",
  "additional_context": "Focus on premium market opportunities"
}
```

### Response
```json
{
  "status": "success",
  "analysis": {
    "comprehensive_report": "# COMPREHENSIVE BUSINESS INTELLIGENCE REPORT\n## Coffee Shops Market Analysis - San Francisco, CA\n\n### EXECUTIVE SUMMARY\n- **Market Size:** 20 direct competitors identified\n- **Market Quality:** 4.6/5.0 average rating\n- **Competition Level:** Medium\n- **Strategic Opportunities:** Premium pricing gap identified\n\n### MARKET INTELLIGENCE OVERVIEW\n📊 **Market Overview**\n- Total Competitors: 20\n- Average Rating: 4.63/5.0 ⭐\n- Total Reviews: 24,169\n- Competition Level: Medium\n- Market Quality: High\n\n🏆 **Top Performers**\n1. The Coffee Berry SF - 5.0⭐ (373 reviews)\n2. Third Wheel Coffee - 5.0⭐ (140 reviews) \n3. Doppio Coffee & Brunch - 5.0⭐ (57 reviews)\n\n### STRATEGIC OPPORTUNITIES\n🎯 **Pricing Gap Opportunity (Medium Priority)**\n- Missing price points: $$$, $$$$ segments\n- Potential Impact: Capture underserved premium market\n- Recommendation: Target high-end specialty coffee market\n\n### GEOGRAPHIC ANALYSIS\n📍 **Competition Clusters: 12 identified**\n- High-density areas: 2 clusters\n- Low-competition zones: 10 areas identified\n- Expansion opportunities in Cluster 3-12 regions\n\n### ACTIONABLE RECOMMENDATIONS\n1. **Immediate Actions (0-3 months)**\n   - Target premium pricing tier ($$$-$$$$)\n   - Focus on underserved geographic clusters\n   - Differentiate through superior quality (4.7+ rating target)\n\n2. **Strategic Initiatives (3-12 months)**\n   - Establish in low-competition zones\n   - Develop premium brand positioning\n   - Monitor 16 high-rated competitors (80% of market)",
    
    "market_dashboard": "🏢 MARKET INTELLIGENCE DASHBOARD\n════════════════════════════════════════\n📊 MARKET OVERVIEW\n┌─────────────────────────────────────┐\n│ Total Competitors     │  20         │\n│ Average Rating        │ 4.63/5.0 ⭐ │\n│ Competition Level     │ Medium      │\n│ Market Quality        │ High        │\n└─────────────────────────────────────┘\n\n🎯 STRATEGIC OPPORTUNITIES\n🟡 Pricing Gap (Medium Priority)\n   💡 Premium market segments available\n   📈 $$$-$$$$ pricing tiers underserved",
    
    "competitor_table": "| Rank | Business Name | Rating | Reviews | Price | Categories |\n|------|---------------|--------|---------|-------|-----------|\n| 1 | The Coffee Berry SF | 5.0⭐ | 373 |  | coffee_shop, cafe |\n| 2 | Third Wheel Coffee | 5.0⭐ | 140 |  | coffee_shop, cafe |\n| 3 | Doppio Coffee & Brunch | 5.0⭐ | 57 |  | coffee_shop, brunch |\n| 4 | CoffeeShop | 4.8⭐ | 230 |  | coffee_shop, cafe |\n| 5 | Delah Coffee | 4.7⭐ | 935 | $$ | coffee_shop, cafe |",
    
    "summary_metrics": {
      "total_businesses_analyzed": 20,
      "opportunities_identified": 1,
      "geographic_clusters": 12,
      "data_sources": ["google_places", "foursquare"],
      "analysis_features": {
        "geographic_analysis": true,
        "trend_analysis": true,
        "multi_source_data": true
      }
    }
  },
  "message": "Analysis completed successfully"
}
```

## 🎯 Use Cases

### Real Estate & Site Selection
```javascript
// Analyze market conditions for new location
const siteAnalysis = await analyzeMarket(
  "retail stores", 
  "1234 Main St, Denver, CO",
  "Site selection for new retail location"
);
```

### Investment Due Diligence
```python
# Market assessment for investment opportunities
investment_analysis = analyze_market(
    "restaurants", 
    "Miami, FL",
    "Investment feasibility analysis"
)
```

### Competitive Intelligence
```javascript
// Monitor competitive landscape
const competitive_intel = await analyzeMarket(
  "fitness centers",
  "Austin, TX", 
  "Competitive positioning analysis"
);
```

### Business Expansion Planning
```python
# Multi-market expansion analysis
markets = ["Seattle, WA", "Portland, OR", "San Francisco, CA"]
for market in markets:
    analysis = analyze_market("coffee shops", market, "Expansion planning")
    print(f"{market}: {analysis['summary_metrics']['opportunities_identified']} opportunities")
```

## 📈 Response Data Structure

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Request status (`success` or `error`) |
| `analysis.comprehensive_report` | string | Full markdown business intelligence report |
| `analysis.market_dashboard` | string | Executive dashboard with key metrics |
| `analysis.competitor_table` | string | Ranked competitor analysis table |
| `analysis.summary_metrics` | object | Analysis summary and metadata |
| `message` | string | Human-readable status message |

## 🏗️ Integration Examples

### React Component
```jsx
import React, { useState } from 'react';

const MarketAnalysis = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeMarket = async (businessType, location) => {
    setLoading(true);
    try {
      const response = await fetch('https://local-market-intelligence-api-1040656024374.us-central1.run.app/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_type: businessType,
          location: location
        })
      });
      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      console.error('Analysis failed:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <button onClick={() => analyzeMarket('coffee shops', 'Portland, OR')}>
        Analyze Coffee Market in Portland
      </button>
      {loading && <p>Analyzing market...</p>}
      {analysis && (
        <div>
          <h2>Market Analysis Results</h2>
          <pre>{analysis.market_dashboard}</pre>
          <div dangerouslySetInnerHTML={{__html: analysis.comprehensive_report}} />
        </div>
      )}
    </div>
  );
};
```

### WordPress Plugin Integration
```php
// WordPress shortcode for market analysis
function market_analysis_shortcode($atts) {
    $atts = shortcode_atts(array(
        'business_type' => 'restaurants',
        'location' => 'New York, NY'
    ), $atts);
    
    $analysis = analyzeMarket($atts['business_type'], $atts['location']);
    return '<div class="market-analysis">' . $analysis['analysis']['market_dashboard'] . '</div>';
}
add_shortcode('market_analysis', 'market_analysis_shortcode');

// Usage: [market_analysis business_type="coffee shops" location="Seattle, WA"]
```

## 🔧 Technical Details

- **Runtime**: Google Cloud Run (auto-scaling)
- **Response Time**: 10-30 seconds (depending on market size)
- **Rate Limits**: No current limits (production usage may require API keys)
- **Data Sources**: Google Places API, Foursquare API, enhanced analytics
- **Output Format**: JSON with markdown-formatted reports
- **Geographic Coverage**: Global (any location with Google Places data)

## 📞 Support & Contact

- **API Documentation**: [Interactive Docs](https://local-market-intelligence-api-1040656024374.us-central1.run.app/docs)
- **Issues**: Open a GitHub issue for bug reports or feature requests
- **Business Inquiries**: Contact for enterprise licensing and custom deployments

## 📄 License

This API is available for evaluation and development use. Contact for commercial licensing terms.

---

**🚀 Ready to integrate market intelligence into your application? Start with the examples above and explore the interactive documentation!**
