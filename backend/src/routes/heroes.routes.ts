import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const heroesRouter = Router();

const heroes = [];

heroesRouter.post('/', (request, response) => {
  const { name, description, image } = request.body;

  const { short, full } = description;

  const hero = {
    id: uuid(),
    name,
    description: {
      short,
      full,
    },
    image,
  };

  heroes.push(hero);

  return response.json(hero);
});

export default heroesRouter;
