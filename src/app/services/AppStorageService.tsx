import createAppModule from "../createAppModule";
import StorageService from "./StorageService";

export const [
  AppStorageServiceProvider,
  useAppStorageService
] = createAppModule(StorageService);
