import { Globe, ChartLineUp, UsersThree } from '@phosphor-icons/react';
import { useTranslation } from 'next-i18next';

import map from '@public/assets/map.svg';
import girlHoldingPhone from '@public/assets/girl-holding-phone.webp';
import Image from 'next/image';

interface IMetricData {
  primary: string;
  secondary: string;
  icon: string;
}

function Metrics() {
  const { t } = useTranslation();
  const metricsData: IMetricData[] = t('metrics.data', { returnObjects: true });
  const icons = {
    globe: Globe,
    chartlineup: ChartLineUp,
    usersthree: UsersThree,
  };

  return (
    <div className="flex items-center bg-secondary-700 text-secondary-200 lg:rounded-2xl min-h-[550px] overflow-hidden max-w-[1400px] mx-auto relative text-center md:text-left">
      <Image
        data-aos="fade-left"
        src={girlHoldingPhone}
        height={588}
        width={867}
        alt="Girl holding cellphone"
        className="absolute right-0 top-0 hidden lg:block object-cover h-full z-0"
      />

      <Image
        data-aos="fade-right"
        src={map}
        height={619}
        width={1906}
        alt="Map"
        className="absolute left-0 top-0 z-0 min-w-[1600px] md:min-w-[inherit]"
      />
      <div className="container flex items-center flex-wrap gap-3 md:gap-11 p-8 h-full relative z-10">
        <div className="max-w-md">
          <h2
            data-aos="fade-left"
            className="text-[2rem] leading-10 md:text-5xl text-white mb-6"
            dangerouslySetInnerHTML={{
              __html: t('metrics.title'),
            }}
          />
          <p
            data-aos="fade-left"
            className="md:mb-0 text-secondary-200"
            dangerouslySetInnerHTML={{
              __html: t('metrics.description'),
            }}
          />
        </div>

        <div className="flex flex-col gap-8 text-left m-auto md:mx-0">
          {metricsData.map(({ primary, secondary, icon }, key) => {
            const Icon = icons[icon];

            return (
              <div
                data-aos="fade-left"
                data-aos-delay={100 * key}
                key={primary}
                className="flex items-center text-base md:text-2xl gap-5"
              >
                <Icon size={32} className="flex-shrink-0" />
                <div>
                  <span className="text-primary-300 text-2xl md:text-3xl font-semibold">
                    {primary}
                  </span>
                  <br className="block md:hidden" /> {secondary}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Metrics };
