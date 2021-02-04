import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';

import Field from '../../components/Form/Field';
import Button from '../../components/Button';

import superheroBackground from '../../assets/superhero-background.svg';

import * as S from './styles';

export default function SignIn() {
  return (
    <S.Container>
      <S.Content>
        <h1>Maktub Heroes</h1>
        <form>
          <strong>Faça seu login</strong>
          <Field
            type="text"
            name="password"
            placeholder="Username"
            icon={FiUser}
          />
          <Field
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
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
