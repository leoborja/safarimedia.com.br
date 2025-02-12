import Image from 'next/image';
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
              className="sm:flex hidden text-[#A3D9A5] font-medium text-sm py-2 px-3 hover:bg-[#09603F] transition-all rounded-[3px]"
              onClick={() => scrollToView('#about')}
            >
              {t('nav.about')}
            </button>
            <button
              type="button"
              className="sm:flex hidden text-[#A3D9A5] font-medium text-sm py-2 px-3 hover:bg-[#09603F] transition-all rounded-[3px]"
              onClick={() => scrollToView('#media')}
            >
              {t('nav.media')}
            </button>
            <span className="sm:flex hidden w-[5px] h-[5px] bg-[#A3D9A5] rounded-full" />
            <button
              onClick={toggleForm}
              className="text-[#A3D9A5] font-medium text-sm flex gap-3 items-center justify-center py-2 px-3 hover:bg-[#09603F] transition-all rounded-[3px]"
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
