import { Router } from 'express';

const heroesRouter = Router();

heroesRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello world' });
});

export default heroesRouter;
