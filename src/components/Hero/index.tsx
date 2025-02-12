import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { Nav } from '@/components/Hero/Nav';
import { Button } from '@/components/Button';
import { Chats, Crosshair } from '@phosphor-icons/react';
import { ChartsElements, Waves } from '@/components/Patterns';
import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';

function Hero() {
  const { t } = useTranslation();
  const { toggleForm } = useContext(FormContext);
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/hero-background.jpg" />
      </Head>

      <header className="bg-primary-700 bg-hero bg-cover sm:bg-top bg-left-60 min-h-[760px] overflow-hidden">
        <div className="hero-bg-mobile sm:hidden block h-80 absolute top-0 w-full z-10" />
        <div data-aos="fade-down" className="container relative py-6 z-20">
          <Nav />
        </div>

        <div className="container relative mt-40 z-20">
          <Waves className="hidden lg:flex opacity-10 absolute left-0 top-[20%] z-0" />
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="hidden lg:flex absolute right-0 -top-10"
          >
            <ChartsElements />
          </div>
          <div className="max-w-3xl">
            <h1
              data-aos="fade-left"
              className="text-5xl sm:text-7xl text-white font-bold !leading-[120%]"
              dangerouslySetInnerHTML={{
                __html: t('hero.title'),
              }}
            />

            <div
              data-aos-delay="200"
              data-aos="fade-left"
              className="flex mt-12 gap-9 flex-wrap sm:flex-nowrap"
            >
              <Button onClick={toggleForm} appearance="primary">
                <Chats size={20} />
                {t('send_message')}
              </Button>

              <div className="flex text-primary-200 items-center gap-4 max-w-[300px]">
                <Crosshair size={48} className="flex-grow-0" />
                {t('hero.highlight')}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export { Hero };
