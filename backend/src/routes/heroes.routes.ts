import { Router } from 'express';

import Hero from '../models/Hero';

const heroesRouter = Router();

const heroes: Hero[] = [];

heroesRouter.post('/', (request, response) => {
  const { name, description, image } = request.body;

  const hero = new Hero(name, description, image);

  heroes.push(hero);

  return response.json(hero);
});

export default heroesRouter;
