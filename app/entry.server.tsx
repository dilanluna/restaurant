import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import type { EntryContext } from '@remix-run/node';
import createEmotionServer from '@emotion/server/create-instance';
import { ServerCacheProvider } from './chakra-ui/context';
import createEmotionCache from './chakra-ui/create-emotion-cache';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const html = renderToString(
    <ServerCacheProvider cache={cache}>
      <RemixServer
        context={remixContext}
        url={request.url}
      />
    </ServerCacheProvider>,
  );

  const chunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <ServerCacheProvider
      cache={cache}
      value={chunks.styles}>
      <RemixServer
        context={remixContext}
        url={request.url}
      />
    </ServerCacheProvider>,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
