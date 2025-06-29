import { useAppConfig } from "../config/AppConfig"



export default function StorageService() {
  const appConfig = useAppConfig();

  const getStorageKey = (k: string) => `${appConfig.storage.localStoragePrefix}/${k}`

  function get<T>(key: string): null | T {
    const value = localStorage.getItem(getStorageKey(key));

    return value === null
      ? null
      : JSON.parse(value)
  }

  function set(key: string, value: any): void {
    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem(
      getStorageKey(key),
      stringifiedValue,
    )
  }

  return {
    get,
    set,
  }
}
