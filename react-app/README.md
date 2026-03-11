# Local Market Intelligence — React Demo App

Interactive demo for the [Local Market Intelligence API](https://local-market-intelligence-api-303547506875.us-central1.run.app).

## Run locally

```bash
cd react-app
npm install       # first time only
npm start         # opens http://localhost:3000
```

Fill in **Business Type** (e.g. `coffee shops`) and **Location** (e.g. `Austin, TX`), hit **Analyze Market**. Results appear as:
- Metrics bar (businesses analyzed, opportunities, clusters, data sources)
- ASCII market dashboard
- Competitor rankings table
- Full intelligence report

## Deploy to GitHub Pages

```bash
npm run deploy
```

Builds the app and pushes to the `gh-pages` branch. Live at:
`https://raym26.github.io/local-market-intelligence-research-api`

## API

Calls `https://local-market-intelligence-api-303547506875.us-central1.run.app/analyze`

To point at a different API instance, edit `src/api/marketIntelligence.js`.
