import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user } = await authenticateUser.execute({
    username,
    password,
  });

  delete user.password;

  return response.json({ user });
});

export default sessionsRouter;
