import {
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

export default function createAppModule<
  T extends Record<never, never>,
>(AppModule: () => T) {
  const AppModuleContext = createContext<null | T>(null);

  function AppModuleProvider({ children }: PropsWithChildren) {
    const appModule = AppModule();

    return (
      <AppModuleContext.Provider value={appModule}>
        {children}
      </AppModuleContext.Provider>
    );
  }

  function useAppModule() {
    const appModule = useContext(AppModuleContext);

    if (appModule === null) {
      throw Error("AppModule not accessible via context");
    }

    return appModule;
  };

  return [AppModuleProvider, useAppModule] as const;
}
