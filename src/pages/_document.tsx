import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="favicon.svg"></link>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* Necessary to prevent error: window.gtag is not defined for Next.js-hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  );
}
