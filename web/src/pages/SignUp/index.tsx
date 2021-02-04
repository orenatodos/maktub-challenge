import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import Field from '../../components/Form/Field';
import Button from '../../components/Button';

import superwomanBackground from '../../assets/superwoman-background.svg';

import * as S from './styles';

export default function SignUp() {
  return (
    <S.Container>
      <S.Illustration>
        <img src={superwomanBackground} alt="Super Woman" />
      </S.Illustration>
      <S.Content>
        <h1>Maktub Heroes</h1>
        <form>
          <strong>Faça seu cadastro</strong>
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
