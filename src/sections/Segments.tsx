import { RoundedText, WideWaves } from '@/components/Patterns';
import { Check, Megaphone, Plus, Stack } from '@phosphor-icons/react';
import peoples from '@public/assets/peoples.jpg';
import peoplesXs from '@public/assets/peoples-xs.jpg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { CardHighlight } from '@/components/Card/CardHighlight';
import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';

function Segments() {
  const { t } = useTranslation();
  const segments: string[] = t('segments.items', { returnObjects: true });
  const { toggleForm } = useContext(FormContext);

  return (
    <div className="relative">
      <div className="hidden lg:block absolute bottom-0 translate-y-[20%] w-full">
        <WideWaves color="#f9f9f9" className="block mx-auto" />
      </div>
      <div className="container flex items-end relative">
        <div data-aos="fade-up" className="md:max-w-md">
          <h2
            className="text-[2rem] leading-[130%]"
            dangerouslySetInnerHTML={{
              __html: t('segments.title'),
            }}
          />
          <p
            className="mt-4 mb-0 md:mb-8"
            dangerouslySetInnerHTML={{
              __html: t('segments.description'),
            }}
          />

          <Image
            src={peoplesXs}
            quality={100}
            width={318}
            height={555}
            alt="Peoples from segments"
            className="w-full object-cover md:hidden rounded-md my-10"
          />

          <ul data-aos="fade-up" className="flex gap-4 flex-col">
            {segments.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-6 h-6 bg-primary-700 text-secondary-500 rounded-md">
                  <Check size={14} className="text-primary-200" />
                </div>
                <span className="text-secondary-500">{item}</span>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <div className="flex items-center justify-center w-6 h-6 bg-primary-200 rounded-md">
                <Plus size={14} className="text-primary-700" />
              </div>
              <span className="text-secondary-500">
                {t('segments.and_more')}
              </span>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:ml-auto flex-shrink-0 items-end gap-x-14 hidden md:flex"
        >
          <div className="relative">
            <div className="absolute -top-14 -right-14">
              <RoundedText className="animate-spin-slow" />
            </div>
            <Image
              src={peoples}
              quality={100}
              width={318}
              height={555}
              alt="Peoples from segments"
              className="rounded-md"
            />
          </div>
          <div>
            <button
              className="mb-4 hidden md:flex gap-2 text-primary-700 font-semibold items-center hover:text-primary-700/70 transition-colors ml-auto"
              onClick={toggleForm}
            >
              <Megaphone size={24} />
              {t('lets_talk')}
            </button>
            <CardHighlight icon={Stack}>
              <div>
                <span className="text-3xl">+</span>
                <span className="text-4xl font-semibold">
                  {t('segments.highlight.primary')}
                </span>
              </div>
              <div className="text-secondary-200 mt-1 leading-5">
                {t('segments.highlight.secondary')}
              </div>
            </CardHighlight>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Segments };
