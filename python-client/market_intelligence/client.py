"""MarketIntelligenceClient — thin HTTP wrapper around the Market Intelligence API."""

import requests
from requests.exceptions import Timeout, ConnectionError

from .exceptions import APIError, AnalysisTimeoutError, InvalidResponseError
from .models import AnalysisResult

_DEFAULT_BASE_URL = (
    "https://local-market-intelligence-api-1040656024374.us-central1.run.app"
)
_DEFAULT_TIMEOUT = 60  # seconds — analyses typically take 10-30 s


class MarketIntelligenceClient:
    """Client for the Local Market Intelligence API.

    Args:
        base_url: Override the API base URL (useful for local dev or self-hosting).
        timeout: Request timeout in seconds. Defaults to 60.
    """

    def __init__(self, base_url: str = _DEFAULT_BASE_URL, timeout: int = _DEFAULT_TIMEOUT):
        self._base_url = base_url.rstrip("/")
        self._timeout = timeout
        self._session = requests.Session()
        self._session.headers.update({"Content-Type": "application/json"})

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def analyze(
        self,
        business_type: str,
        location: str,
        additional_context: str = "",
    ) -> AnalysisResult:
        """Run a market intelligence analysis.

        Args:
            business_type: Type of business to analyze (e.g. "coffee shops").
            location: City/address to analyze (e.g. "Austin, TX").
            additional_context: Optional focus for the analysis.

        Returns:
            An :class:`AnalysisResult` with dashboard, table, report, and metrics.

        Raises:
            APIError: Non-2xx response from the API.
            AnalysisTimeoutError: Request exceeded ``timeout`` seconds.
            InvalidResponseError: Response body could not be parsed.
        """
        if not business_type or not business_type.strip():
            raise ValueError("business_type must not be empty")
        if not location or not location.strip():
            raise ValueError("location must not be empty")

        payload = {
            "business_type": business_type.strip(),
            "location": location.strip(),
            "additional_context": additional_context or "",
        }

        try:
            response = self._session.post(
                f"{self._base_url}/analyze",
                json=payload,
                timeout=self._timeout,
            )
        except Timeout:
            raise AnalysisTimeoutError(
                f"Request timed out after {self._timeout} seconds. "
                "Try increasing timeout= when constructing the client."
            )
        except ConnectionError as exc:
            raise APIError(0, f"Could not connect to {self._base_url}: {exc}") from exc

        if not response.ok:
            raise APIError(response.status_code, response.text[:500])

        try:
            data = response.json()
        except ValueError as exc:
            raise InvalidResponseError(
                f"Response was not valid JSON: {response.text[:200]}"
            ) from exc

        try:
            return AnalysisResult.from_api_response(data)
        except Exception as exc:
            raise InvalidResponseError(
                f"Could not parse API response: {exc}"
            ) from exc

    def health_check(self) -> dict:
        """Return the API health status.

        Returns:
            Dict with keys: ``status``, ``service``, ``agent_available``.

        Raises:
            APIError: Non-2xx response.
            AnalysisTimeoutError: Request timed out.
        """
        try:
            response = self._session.get(
                f"{self._base_url}/health",
                timeout=10,
            )
        except Timeout:
            raise AnalysisTimeoutError("Health check timed out after 10 seconds.")
        except ConnectionError as exc:
            raise APIError(0, f"Could not connect: {exc}") from exc

        if not response.ok:
            raise APIError(response.status_code, response.text[:500])

        return response.json()
