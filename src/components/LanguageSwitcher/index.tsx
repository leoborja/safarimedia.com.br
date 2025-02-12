import { CaretDown } from '@phosphor-icons/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="text-secondary-200 text-sm font-semibold inline-flex h-9 items-center justify-center gap-2 rounded-[3px] bg-white/10 px-3 py-2 outline-none hover:bg-primary-600 transition-colors"
            aria-label="Language"
          >
            {currentLanguage.toUpperCase()}
            <CaretDown size={18} weight="bold" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="overflow-hidden rounded-[3px] bg-white/20 shadow-button will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade w-full"
            sideOffset={10}
          >
            {locales.map((lang) => (
              <DropdownMenu.Item
                key={lang}
                className="group w-full text-sm outline-none data-[highlighted]:bg-primary-600"
              >
                <Link
                  href={router.pathname}
                  locale={lang}
                  className=" flex h-10 cursor-pointer items-center gap-2 py-2 px-3 font-semibold text-secondary-200"
                >
                  {lang.toUpperCase()}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
}

export { LanguageSwitcher };
