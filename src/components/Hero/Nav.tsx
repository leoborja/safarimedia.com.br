import Image from 'next/image';
import logo from '@public/assets/logo.svg';
import logoWhite from '@public/assets/logo-fhmc-sem-fundo.svg';

import { Chats } from '@phosphor-icons/react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';
import { scrollToView } from '@/utils/scrollToView';

function Nav() {
  const { t } = useTranslation();
  const { toggleForm } = useContext(FormContext);

  return (
    <>
      <div className="flex justify-between">
        <Image src={logoWhite} width={100} height={42} alt={t('seo.title')} />

        <nav className="flex items-center">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="sm:flex hidden text-secondary-200 font-medium text-sm py-2 px-3 hover:bg-white/10 transition-all rounded-[3px]"
              onClick={() => scrollToView('#about')}
            >
              {t('nav.about')}
            </button>
            <button
              type="button"
              className="sm:flex hidden text-secondary-200 font-medium text-sm py-2 px-3 hover:bg-white/10 transition-all rounded-[3px]"
              onClick={() => scrollToView('#media')}
            >
              {t('nav.media')}
            </button>
            <span className="sm:flex hidden w-[5px] h-[5px] bg-secondary-200 rounded-full" />
            <button
              onClick={toggleForm}
              className="text-secondary-200 font-medium text-sm flex gap-3 items-center justify-center py-2 px-3 hover:bg-white/10 transition-all rounded-[3px]"
            >
              <Chats size={20} />
              {t('contact_us')}
            </button>

            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}

export { Nav };
