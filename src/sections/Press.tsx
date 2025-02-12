import { ArrowLeft, ArrowRight, ArrowSquareOut } from '@phosphor-icons/react';
import { Key } from 'react';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useTranslation } from 'next-i18next';
import { Lines } from '@/components/Patterns/Lines';

function Press() {
  const { t } = useTranslation();
  const articles: object[] = t('media.articles', {
    returnObjects: true,
  });

  const slideSettings = {
    gap: '1rem',
    perPage: 3,
    classes: {
      arrows: 'splide__arrows arrow_nav_wrapper',
      arrow: 'splide__arrow arrow-nav',
      prev: 'splide__arrow--prev arrow-nav-prev',
      next: 'splide__arrow--next arrow-nav-next',
    },
    breakpoints: {
      1200: {
        perPage: 2,
      },

      640: {
        perPage: 1,
        padding: { right: '35%', left: 0 },
      },
    },
  };
  return (
    <div className="container relative">
      <Splide hasTrack={false} options={slideSettings}>
        <div className="flex gap-6 md:flex-nowrap flex-wrap md:justify-between">
          <div data-aos="fade-up" className="max-w-sm w-full flex flex-col">
            <h2
              className="text-[2rem] leading-[120%] mb-4"
              dangerouslySetInnerHTML={{
                __html: t('media.title'),
              }}
            />
            <p
              className="text-secondary-500"
              dangerouslySetInnerHTML={{
                __html: t('media.description'),
              }}
            />

            <div className="splide__arrows arrow_nav_wrapper justify-self-end flex gap-2 mt-auto">
              <button className="splide__arrow splide__arrow--prev arrow-nav arrow-nav-prev inline-flex h-12 w-12 items-center justify-center rounded-full !bg-primary-700 text-primary-300 disabled:opacity-50">
                <ArrowLeft
                  weight="bold"
                  className="!h-6 !w-6 !fill-primary-300"
                />
              </button>
              <button className="splide__arrow splide__arrow--next arrow-nav arrow-nav-next inline-flex h-12 w-12 items-center justify-center rounded-full !bg-primary-700 text-primary-300 disabled:opacity-50">
                <ArrowRight
                  weight="bold"
                  className="!h-6 !w-6 !fill-primary-300"
                />
              </button>
            </div>
          </div>

          <SplideTrack
            data-aos="fade-up"
            data-aos-delay="200"
            className="md:m-0 -mr-4"
          >
            {articles.map(
              (
                article: {
                  title: string;
                  description: string;
                  url: string;
                },
                key: Key,
              ) => (
                <SplideSlide key={key} className="flex">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary-700 group md:w-64 h-72 rounded-md h- flex flex-col justify-end transition-transform p-5"
                  >
                    <Lines className="-bottom-8 -right-20 absolute opacity-50" />
                    <h3 className="text-xl mb-2 text-primary-100 font-semibold">
                      {article.title}
                    </h3>
                    <p className="m-0 text-primary-200">
                      {article.description}
                    </p>

                    <span className="text-sm text-white mt-3 flex items-center gap-2 opacity-0 -mb-8 group-hover:mb-0 group-hover:opacity-100 transition-all">
                      Ver notícia <ArrowRight size={18} />
                    </span>
                  </a>
                </SplideSlide>
              ),
            )}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
}

export { Press };
