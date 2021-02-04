import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';

import * as S from './styles';

interface Hero {
  id: number;
  name: string;
  short_description: string;
  full_description: string;
  image: string;
}

interface ParamTypes {
  id: string;
}

export default function Heroes() {
  const [hero, setHero] = useState({} as Hero);

  const { id } = useParams<ParamTypes>();

  async function getData() {
    const response = await api.get(`heroes/${id}`);

    setHero(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <S.Hero>
        <img src={hero.image} alt={hero.name} />
        <div>
          <Link to="/heroes">
            <FiArrowLeft size={20} />
            Voltar
          </Link>
          <strong>{hero.name}</strong>
          <p>{hero.short_description}</p>
          <p>{hero.full_description}</p>
        </div>
      </S.Hero>
    </>
  );
}
