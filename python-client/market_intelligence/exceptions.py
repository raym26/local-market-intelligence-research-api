"""Typed exceptions for the Market Intelligence client."""


class MarketIntelligenceError(Exception):
    """Base exception for all client errors."""


class APIError(MarketIntelligenceError):
    """Raised when the API returns a non-2xx status code."""

    def __init__(self, status_code: int, message: str):
        self.status_code = status_code
        super().__init__(f"API error {status_code}: {message}")


class AnalysisTimeoutError(MarketIntelligenceError):
    """Raised when the analysis request exceeds the configured timeout."""


class InvalidResponseError(MarketIntelligenceError):
    """Raised when the API response cannot be parsed or is missing required fields."""
