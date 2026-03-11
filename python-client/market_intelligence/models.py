"""Data models mirroring the API response shape."""

from dataclasses import dataclass, field
from typing import Dict, List, Optional


@dataclass
class SummaryMetrics:
    total_businesses_analyzed: int = 0
    opportunities_identified: int = 0
    geographic_clusters: int = 0
    data_sources: List[str] = field(default_factory=list)
    analysis_features: Dict[str, bool] = field(default_factory=dict)

    @classmethod
    def from_dict(cls, data: dict) -> "SummaryMetrics":
        return cls(
            total_businesses_analyzed=data.get("total_businesses_analyzed", 0),
            opportunities_identified=data.get("opportunities_identified", 0),
            geographic_clusters=data.get("geographic_clusters", 0),
            data_sources=data.get("data_sources", []),
            analysis_features=data.get("analysis_features", {}),
        )


@dataclass
class AnalysisResult:
    market_dashboard: str
    competitor_table: str
    comprehensive_report: str
    summary_metrics: SummaryMetrics
    status: str = "success"
    raw: Optional[dict] = None

    @property
    def competition_level(self) -> str:
        """Derive competition level from the market dashboard text."""
        text = self.market_dashboard.lower()
        if "high" in text:
            return "HIGH"
        if "medium" in text:
            return "MEDIUM"
        return "LOW"

    @classmethod
    def from_api_response(cls, response: dict) -> "AnalysisResult":
        analysis = response.get("analysis", {})
        return cls(
            status=response.get("status", "success"),
            market_dashboard=analysis.get("market_dashboard", ""),
            competitor_table=analysis.get("competitor_table", ""),
            comprehensive_report=analysis.get("comprehensive_report", ""),
            summary_metrics=SummaryMetrics.from_dict(
                analysis.get("summary_metrics", {})
            ),
            raw=response,
        )
