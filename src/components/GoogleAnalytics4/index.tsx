import { useRouter } from 'next/router';
import Script from 'next/script';
import { memo, useCallback, useEffect } from 'react';

const TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID;

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (!TRACKING_ID || router.isPreview || typeof window === 'undefined') return;

    if (typeof window.gtag !== 'function') {
      window.gtag = function () {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
      };
    }

    window.gtag('config', TRACKING_ID, {
      send_page_view: false,
    });

    window.gtag('event', 'page_view', {
      page_path: window.location.pathname,
      send_to: TRACKING_ID,
    });
  }, [router.isPreview]);

  const handleRouteChange = useCallback((url: string) => {
    if (!TRACKING_ID || router.isPreview || typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_path: url,
      send_to: TRACKING_ID,
    });
  }, [router.isPreview]);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events, handleRouteChange]);

  if (!TRACKING_ID || router.isPreview) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
        }}
      />
    </>
  );
};

export default memo(GoogleAnalytics);
