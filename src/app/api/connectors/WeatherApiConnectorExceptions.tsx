export class WeatherApiNetworkException extends Error {
  constructor() {
    const message = "Network error. Please check your connection and try again.";

    super(message);
  }
}
