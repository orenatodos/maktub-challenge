import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import Field from '../../components/Form/Field';
import Select from '../../components/Form/Select';
import Button from '../../components/Button';

import superwomanBackground from '../../assets/superwoman-background.svg';

import * as S from './styles';

export default function SignUp() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = useCallback(
    async event => {
      try {
        event.preventDefault();

        await api.post('/users', {
          username,
          password,
          role,
        });

        history.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    [history, username, password, role],
  );

  return (
    <S.Container>
      <S.Illustration>
        <img src={superwomanBackground} alt="Super Woman" />
      </S.Illustration>
      <S.Content>
        <h1>Maktub Heroes</h1>
        <form onSubmit={handleSubmit}>
          <strong>Faça seu cadastro</strong>
          <Field
            type="text"
            name="password"
            placeholder="Username"
            onChange={event => setUsername(event.target.value)}
            value={username}
            icon={FiUser}
          />
          <Field
            type="password"
            name="password"
            placeholder="Senha"
            onChange={event => setPassword(event.target.value)}
            value={password}
            icon={FiLock}
          />
          <Select
            onChange={event => setRole(event.target.value)}
            value={role}
            options={[
              {
                value: 'admin',
                label: 'Administrador',
              },
              {
                value: 'user',
                label: 'Usuario comum',
              },
            ]}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </S.Content>
    </S.Container>
  );
}
