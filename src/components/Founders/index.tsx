import Image from 'next/image';

import matheusClemente from '@public/assets/founders/henrique.png';
import fernandoForneas from '@public/assets/founders/fernando-forneas.png';
import foundersMisc from '@public/assets/founders/misc.svg';
import { ArrowRight } from '@phosphor-icons/react';

function Founders() {
  const foundersImage = [
    {
      image: fernandoForneas,
      name: 'Henrique Carvalho',
      role: 'CEO',
    },

    {
      image: matheusClemente,
      name: 'Leonardo Borja',
      role: 'COO',
    },
  ];
  
  return (
    <div className="flex relative gap-6 mt-8 flex-wrap">
      <Image
        data-aos="fade-right"
        src={foundersMisc}
        width={451}
        height={469}
        alt="Misc"
        aria-hidden={true}
        className="hide lg:block absolute h-[469px] -left-[460px]"
      />
      {foundersImage.map((founder, key) => (
        <div
          data-aos="fade-right"
          data-aos-delay={100 * key}
          className="flex flex-col"
          key={founder.name}
        >
          <Image
            src={founder.image}
            width={451}
            height={469}
            className="rounded-md"
            alt={founder.name}
          />
          <div className="flex md:gap-6 gap-4 items-center py-4 justify-center md:justify-start text-xl md:text-2xl font-medium">
            <span className="text-[#0B3D2E]">{founder.name}</span>
            <ArrowRight size={32} className="text-[#0B3D2E]" />
            <span className="text-[#A3D9A5]">{founder.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Founders };
