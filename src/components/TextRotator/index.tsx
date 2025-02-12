import { ArrowRight } from '@phosphor-icons/react';
import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

function TextRotator() {
  const { t } = useTranslation();

  const words: string[] = t('text_rotator', { returnObjects: true });

  return (
    <div className="flex items-center overflow-hidden relative">
      <div className="w-28 bg-gradient-to-r from-white to-white/0 h-full absolute top-0 left-0 z-10" />
      <div className="w-28 bg-gradient-to-l from-white to-white/0 h-full absolute top-0 right-0 z-10" />
      {[1, 2].map((item) => (
        <div
          key={item}
          className="infinite-scroll flex items-center gap-14 py-5 text-3xl uppercase"
        >
          {words.map((word, key) => (
            <Fragment key={word}>
              <div
                key={word}
                className={`font-semibold text-primary-700 ${
                  key == 0 ? 'ml-14' : ''
                }`}
              >
                {word}
              </div>
              <ArrowRight size={20} />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export { TextRotator };
