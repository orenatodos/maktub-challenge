import { Router } from 'express';

import HeroesRepository from '../repositories/HeroesRepository';

const heroesRouter = Router();
const heroesRepository = new HeroesRepository();

heroesRouter.get('/', (request, response) => {
  const heroes = heroesRepository.all();

  return response.json(heroes);
});

heroesRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const hero = heroesRepository.getById(id);

  return response.json(hero);
});

heroesRouter.post('/', (request, response) => {
  const { name, description, image } = request.body;

  const hero = heroesRepository.create({ name, description, image });

  return response.json(hero);
});

heroesRouter.put('/:id', (request, response) => {
  const { params, body } = request;

  const { id } = params;
  const { name, description, image } = body;

  const hero = heroesRepository.update({ id, name, description, image });

  return response.json(hero);
});

heroesRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  heroesRepository.delete(id);

  return response.send();
});

export default heroesRouter;
