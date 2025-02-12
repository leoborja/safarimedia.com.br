import { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  appearance?: 'primary' | 'link';
  as?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit';
}

function Button({
  className,
  children,
  type = 'button',
  as = 'button',
  appearance,
  ...rest
}: ButtonProps) {
  const Tag = as;

  return (
    <Tag
      className={`btn btn-${appearance ?? 'primary'} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export { Button };
