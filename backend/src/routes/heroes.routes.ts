import { Router } from 'express';
import { getRepository } from 'typeorm';

import Hero from '../models/Hero';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const heroesRouter = Router();

heroesRouter.use(ensureAuthenticated);

heroesRouter.get('/', async (request, response) => {
  const heroesRepository = getRepository(Hero);

  const heroes = await heroesRepository.find();

  return response.json(heroes);
});

heroesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const heroesRepository = getRepository(Hero);

  const hero = await heroesRepository.findOne(id);

  return response.json(hero);
});

heroesRouter.post('/', async (request, response) => {
  const { name, short_description, full_description, image } = request.body;

  const heroesRepository = getRepository(Hero);

  const hero = heroesRepository.create({
    name,
    short_description,
    full_description,
    image,
  });

  await heroesRepository.save(hero);

  return response.json(hero);
});

heroesRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, short_description, full_description, image } = request.body;

  const heroesRepository = getRepository(Hero);

  const hero = await heroesRepository.update(id, {
    name,
    short_description,
    full_description,
    image,
  });

  return response.json(hero);
});

heroesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const heroesRepository = getRepository(Hero);

  await heroesRepository.delete(id);

  return response.send();
});

export default heroesRouter;
