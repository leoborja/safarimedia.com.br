import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Hero } from '@/components/Hero';
import { SITE_URL } from '@/utils/constants';

import ogimage from '@public/assets/ogimage.jpg';
import { About } from '@/sections/About';
import { Metrics } from '@/sections/Metrics';
import { TextRotator } from '@/components/TextRotator';
import { Press } from '@/sections/Press';
import { Segments } from '@/sections/Segments';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const { locales } = useRouter();

  const hrefLang = locales.find((c) => c !== currentLanguage);

  return (
    <>
      <Head>
        <title>{t('common:seo.title')}</title>
        <meta name="description" content={t('common:seo.description')} />
        <meta name="robots" content="index,follow" />
        <link rel="alternate" href={SITE_URL[hrefLang]} hrefLang={hrefLang} />
        <meta property="og:url" content={SITE_URL[hrefLang]} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('common:seo.title')} />
        <meta property="og:description" content={t('common:seo.description')} />
        <meta property="og:image" content={ogimage.src} />
        <meta property="og:site_name" content={t('common:title')} />
      </Head>
      <Hero />
      <div id="about" className="pt-20 md:mt-36 mb-16">
        <About />
      </div>
      <div className="inline-block w-full md:mt-16">
        <Metrics />
        <div className="mt-16 md:mt-24">
          <TextRotator />
        </div>
      </div>

      {/*<div id="media" className="my-16 pt-0 md:pt-10">
        <Press />
      </div>*/}

      <div className="my-6 md:my-36">
        <Segments />
      </div>

      <Footer />

      <ContactForm />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
