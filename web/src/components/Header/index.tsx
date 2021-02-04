import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';

import Button from '../Button';

import * as S from './styles';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <S.Header>
      <Link to="/" className="logo">
        Maktub Heroes
      </Link>
      <div>
        {user.role === 'admin' && (
          <Button>
            <Link to="/register">Novo herói</Link>
          </Button>
        )}
        <button type="button" className="logout" onClick={signOut}>
          <FiLogOut size={24} />
        </button>
      </div>
    </S.Header>
  );
}
