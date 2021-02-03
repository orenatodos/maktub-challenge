import { Router } from 'express';

import HeroesRepository from '../repositories/HeroesRepository';

const heroesRouter = Router();
const heroesRepository = new HeroesRepository();

heroesRouter.get('/', (request, response) => {
  const heroes = heroesRepository.all();

  return response.json(heroes);
});

heroesRouter.post('/', (request, response) => {
  const { name, description, image } = request.body;

  const hero = heroesRepository.create(name, description, image);

  return response.json(hero);
});

export default heroesRouter;
