import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';

import Field from '../../components/Form/Field';
import Button from '../../components/Button';

import superheroBackground from '../../assets/superhero-background.svg';

import * as S from './styles';

export default function SignIn() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      await signIn({
        username,
        password,
      });

      history.push('/heroes');
    },
    [signIn, history, username, password],
  );

  return (
    <S.Container>
      <S.Content>
        <h1>Maktub Heroes</h1>
        <form onSubmit={handleSubmit}>
          <strong>Faça seu login</strong>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            onChange={event => setUsername(event.target.value)}
            value={username}
            icon={FiUser}
            required
          />
          <Field
            type="password"
            name="password"
            placeholder="Senha"
            onChange={event => setPassword(event.target.value)}
            value={password}
            icon={FiLock}
            required
          />
          <Button type="submit">Entrar</Button>
        </form>
        <Link to="/signup">
          <FiLogIn size={20} />
          Não tenho cadastro
        </Link>
      </S.Content>
      <S.Illustration>
        <img src={superheroBackground} alt="Super Hero" />
      </S.Illustration>
    </S.Container>
  );
}
