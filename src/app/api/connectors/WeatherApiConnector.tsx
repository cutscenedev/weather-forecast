import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useAppConfig } from "../../config/AppConfig";
import { WeatherApiNetworkException } from "./WeatherApiConnectorExceptions";

export default function WeatherApiConnector() {
  const appConfig = useAppConfig();

  const [client] = useState(() => axios.create({
      baseURL: appConfig.weatherApi.url,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      params: {
        key: appConfig.weatherApi.key,
      },
    }));

  async function request<ResponseData = unknown>(
    requestConfig: AxiosRequestConfig,
  ) {
    try {
      const response = await client.request<ResponseData>(requestConfig);

      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ERR_NETWORK") {
          throw new WeatherApiNetworkException();
        }
      }

      throw error;
    }
  }

  return {
    request,
  };
}
