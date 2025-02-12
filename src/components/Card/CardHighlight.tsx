import { ElementType, ReactNode } from 'react';
import { Lines } from '../Patterns/Lines';
import { IconProps } from '@phosphor-icons/react';

export interface ICardHighLight {
  children: ReactNode;
  icon: ElementType<IconProps>;
  horizontal?: boolean;
}

function CardHighlight({
  horizontal = false,
  children,
  icon: Icon,
}: ICardHighLight) {
  const orientation = horizontal
    ? 'justify-center items-center gap-4'
    : 'justify-between h-[210px] w-[210px] flex-col';

  return (
    <div
      data-aos="fade-up"
      className={`bg-primary-700 flex rounded-md p-4 relative overflow-hidden flex-shrink-0 ${orientation}`}
    >
      <Lines
        className={`absolute ${
          horizontal ? '-bottom-20 -right-20' : '-bottom-8 -right-28 '
        }`}
      />
      <Icon weight="regular" className="text-secondary-200" size={32} />
      <div
        className={`text-white ${
          !horizontal ? 'justify-self-end mt-auto' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export { CardHighlight };
