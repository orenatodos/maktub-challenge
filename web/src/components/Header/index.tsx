import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';

import * as S from './styles';

export default function Header({ children }: PropsWithChildren<unknown>) {
  const { signOut } = useAuth();

  return (
    <S.Header>
      <Link to="/" className="logo">
        Maktub Heroes
      </Link>
      <div>
        {children}
        <button type="button" className="logout" onClick={signOut}>
          <FiLogOut size={24} />
        </button>
      </div>
    </S.Header>
  );
}
