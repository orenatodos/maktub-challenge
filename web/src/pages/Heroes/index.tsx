import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as S from './styles';

interface Hero {
  id: number;
  name: string;
  short_description: string;
  image: string;
}

export default function Heroes() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  async function getData() {
    const response = await api.get('heroes');

    setHeroes(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header>
        <Button>
          <Link to="/register">Novo herói</Link>
        </Button>
      </Header>
      <S.Heroes>
        {heroes.map(hero => (
          <article key={hero.id}>
            <img src={hero.image} alt={hero.name} />
            <div>
              <strong>{hero.name}</strong>
              <p>{hero.short_description}</p>
              <Button>
                <Link to={`/heroes/${hero.id}`}>Detalhes</Link>
              </Button>
            </div>
          </article>
        ))}
      </S.Heroes>
    </>
  );
}
