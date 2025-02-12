import { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  appearance?: 'primary' | 'link';
  as?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit';
}

function Button({
  className = '',
  children,
  type = 'button',
  as = 'button',
  appearance = 'primary',
  ...rest
}: ButtonProps) {
  const Tag = as;

  const baseStyles = 'px-4 py-2 font-semibold rounded-lg transition-all duration-300';
  const styles = {
    primary: 'bg-[#0B3D2E] text-white hover:bg-[#09603F] active:bg-[#074D36]',
    link: 'text-[#0B3D2E] hover:text-[#09603F] underline',
  };

  return (
    <Tag
      className={`${baseStyles} ${styles[appearance]} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export { Button };
