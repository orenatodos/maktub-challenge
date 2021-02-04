import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';
import Field from '../../components/Form/Field';
import Textarea from '../../components/Form/Textarea';
import Button from '../../components/Button';

import * as S from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      await api.post('/heroes', {
        name,
        short_description: shortDescription,
        full_description: fullDescription,
        image,
      });

      setName('');
      setShortDescription('');
      setFullDescription('');
      setImage('');
    },
    [name, shortDescription, fullDescription, image],
  );

  return (
    <>
      <Header />
      <S.Container>
        <Link to="/heroes">
          <FiArrowLeft size={20} />
          Voltar
        </Link>
        <h1>Cadastrar novo herói</h1>
        <form onSubmit={handleSubmit}>
          <Field
            type="text"
            name="name"
            placeholder="Nome"
            onChange={event => setName(event.target.value)}
            value={name}
            required
          />
          <Textarea
            name="short_description"
            placeholder="Descrição curta"
            onChange={event => setShortDescription(event.target.value)}
            value={shortDescription}
            required
          />
          <Textarea
            name="full_description"
            placeholder="Descrição longa"
            onChange={event => setFullDescription(event.target.value)}
            value={fullDescription}
            required
          />
          <Field
            type="url"
            name="image"
            placeholder="URL da imagem"
            onChange={event => setImage(event.target.value)}
            value={image}
            required
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </S.Container>
    </>
  );
}
