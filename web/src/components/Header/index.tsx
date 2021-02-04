import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export default function Header({ children }: PropsWithChildren<unknown>) {
  return (
    <S.Header>
      <Link to="/" className="logo">
        Maktub Heroes
      </Link>
      {children}
    </S.Header>
  );
}
