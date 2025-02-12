import { Button } from '@/components/Button';
import { At, Chats, DeviceMobile } from '@phosphor-icons/react';
import { useTranslation } from 'next-i18next';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import logoWhite from '@public/assets/logo-fhmc-sem-fundo.svg';
import Image from 'next/image';
import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';

function Footer() {
  const { t } = useTranslation();
  const { toggleForm } = useContext(FormContext);

  return (
    <footer className="bg-[#0B3D2E] text-gray-150 py-16 lg:py-24 mt-20 lg:mt-0">
      <div className="container flex flex-col gap-12">
        <div className="flex justify-between flex-wrap">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl text-white mb-1">
              {t('footer.conversion.title')}
            </h3>
            <p className="text-white/70 lg:m-0">
              {t('footer.conversion.description')}
            </p>
          </div>

          <div className="lg:ml-auto lg:mr-0 mx-auto">
            <Button onClick={toggleForm} className="bg-[#09603F] hover:bg-[#074D36] text-white">
              <Chats size={24} />
              {t('lets_talk')}
            </Button>
          </div>
        </div>

        <div className="w-full bg-white/20 h-[1px]" />

        <div className="flex flex-wrap">
          <div className="flex lg:flex-row flex-col lg:text-left text-center lg:mx-0 mx-auto justify-center lg:justify-normal items-center gap-8 lg:pb-0 pb-12">
            <Image
              src={logoWhite}
              width={88}
              height={38}
              alt="FHMC Media Holding"
            />
            <p className="m-0 text-white">
              {t('company_name')}
              <br />
              {t('footer.copyright')}
            </p>
          </div>

          <div className="lg:hidden w-full bg-white/20 h-[1px] mb-12" />

          <div className="lg:ml-auto lg:mr-0 mx-auto flex gap-8">
            <div className="flex gap-4 lg:flex-row flex-col lg:items-center">
              <div className="bg-[#09603F] w-10 flex h-10 text-white rounded-md justify-center items-center">
                <At size={24} />
              </div>
              <div className="leading-6">
                <strong className="block text-white">
                  {t('footer.contacts.email.label')}
                </strong>
                <span className="opacity-70 text-white">
                  {t('footer.contacts.email.value')}
                </span>
              </div>
            </div>

            <div className="flex gap-4 lg:flex-row flex-col lg:items-center">
              <div className="bg-[#09603F] w-10 flex h-10 text-white rounded-md justify-center items-center">
                <DeviceMobile size={24} />
              </div>
              <div className="leading-6">
                <strong className="block text-white">
                  {t('footer.contacts.phone.label')}
                </strong>
                <span className="opacity-70 text-white">
                  {t('footer.contacts.phone.value')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 lg:ml-20 lg:py-0 py-12 items-center lg:mr-0 mx-auto">
            <a href={t('social.facebook')} target="_blank" rel="noreferrer">
              <FaFacebook
                className="text-white transition-opacity hover:opacity-70"
                size={24}
              />
            </a>
            <a href={t('social.instagram')} target="_blank" rel="noreferrer">
              <FaInstagram
                className="text-white transition-opacity hover:opacity-70"
                size={24}
              />
            </a>
            <a href={t('social.linkedin')} target="_blank" rel="noreferrer">
              <FaLinkedin
                className="text-white transition-opacity hover:opacity-70"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
