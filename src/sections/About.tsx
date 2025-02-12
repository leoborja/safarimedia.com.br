import { CardHighlight } from '@/components/Card/CardHighlight';
import { ArrowDown, Chats, UsersFour } from '@phosphor-icons/react';
import { useTranslation } from 'next-i18next';

import { Founders } from '@/components/Founders';
import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';

function CardAbout({ horizontal }: { horizontal: boolean }) {
  const { t } = useTranslation();
  return (
    <CardHighlight horizontal={horizontal} icon={UsersFour}>
      <div>
        <span className="text-3xl">+</span>
        <span className="text-4xl font-semibold">5mi</span>
      </div>
      <div className="text-secondary-200 mt-1 leading-5">
        {t('about.highlight_card')}
      </div>
    </CardHighlight>
  );
}
function About() {
  const { t } = useTranslation();
  const { toggleForm } = useContext(FormContext);
  return (
    <>
      <div id="about" className="container flex-col flex gap-10 relative">
        <ArrowDown
          className="text-primary-600 rotate-45 md:right-0 absolute right-2 "
          size={42}
        />
        <div className="absolute left-4 hidden md:flex">
          <CardAbout horizontal={false} />
        </div>

        <div className=" text-secondary-500 w-full relative md:ml-80">
          <div className="max-w-3xl">
            <h2
              data-aos="fade-up"
              className="text-[2.5rem] pr-4 md:text-[4rem] leading-[120%] mb-8"
              dangerouslySetInnerHTML={{
                __html: t('about.title'),
              }}
            />
            <div
              data-aos="fade-up"
              dangerouslySetInnerHTML={{
                __html: t('about.description'),
              }}
            />

            <div className="md:hidden">
              <CardAbout horizontal={true} />
            </div>
          </div>
        </div>

        <div className="md:ml-80">
          <div className="flex justify-between items-end">
            <h3
              data-aos="fade-up"
              className="text-[2rem] leading-[130%]"
              dangerouslySetInnerHTML={{
                __html: t('founders.title'),
              }}
            ></h3>
            <button
              data-aos="fade-up"
              className="hidden md:flex gap-2 text-primary-700 font-semibold items-center hover:text-primary-700/70 transition-colors"
              onClick={toggleForm}
            >
              <Chats size={24} />
              {t('lets_talk')}
            </button>
          </div>

          <Founders />
        </div>
      </div>
    </>
  );
}

export { About };
