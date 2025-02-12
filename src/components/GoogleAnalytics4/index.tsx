import { useRouter } from 'next/router';
import Script from 'next/script';
import { memo, useEffect } from 'react';

const TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID;

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (!TRACKING_ID || router.isPreview) return;

    // Define gtag caso não esteja definido
    window.gtag = window.gtag || function (...args) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(args);
    };

    window.gtag('config', TRACKING_ID, { send_page_view: false });
    window.gtag('event', 'page_view', {
      page_path: window.location.pathname,
      send_to: TRACKING_ID,
    });
  }, [router]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!TRACKING_ID || router.isPreview) return;

      window.gtag?.('event', 'page_view', {
        page_path: url,
        send_to: TRACKING_ID,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events, router.isPreview]);

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
            gtag('config', '${TRACKING_ID}');
          `,
        }}
      />
    </>
  );
};

export default memo(GoogleAnalytics);
