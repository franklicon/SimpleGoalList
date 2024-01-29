import { FC, PropsWithChildren } from 'react';

type Image = {
  src: string;
  alt: string;
};

type HeaderProps = PropsWithChildren<{ image: Image }>;

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
