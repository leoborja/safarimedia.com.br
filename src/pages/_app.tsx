import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import GoogleAnalytics4 from '@/components/GoogleAnalytics4';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '@splidejs/react-splide/css/core';
import '@/styles/globals.css';

import { Sora } from 'next/font/google';
import { useEffect } from 'react';
import { FormProvider } from '@/contexts/FormContext';
const sora = Sora({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
});

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 800,
    });
  }, []);
  return (
    <main className={`${sora.className} antialiased`}>
      <FormProvider>
        <GoogleAnalytics4 />
        <Component {...pageProps} />
      </FormProvider>
    </main>
  );
}
export default appWithTranslation(App);
