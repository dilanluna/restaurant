import type { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import { createContext, useState } from 'react';
import type { EmotionCache } from '@emotion/react';
import createEmotionCache from './create-emotion-cache';

type ServerStyleContextData = {
  key: string;
  ids: string[];
  css: string;
};

export const ServerStyleContext = createContext<
  ServerStyleContextData[] | undefined
>(undefined);

type ClientStyleContextData = {
  reset: () => void;
};

export const ClientStyleContext = createContext<
  ClientStyleContextData | undefined
>(undefined);

export function ClientCacheProvider({ children }: { children: ReactNode }) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

export function ServerCacheProvider({
  value,
  cache,
  children,
}: {
  cache: EmotionCache;
  children: ReactNode;
  value?: ServerStyleContextData[];
}) {
  return (
    <ServerStyleContext.Provider value={value}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ServerStyleContext.Provider>
  );
}
