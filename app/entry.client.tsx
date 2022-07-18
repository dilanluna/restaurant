import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import { ClientCacheProvider } from './chakra-ui/context';

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
);
