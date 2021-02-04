import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouters = Router();

usersRouters.post('/', async (request, response) => {
  const { username, password, role } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    username,
    password,
    role,
  });

  delete user.password;

  return response.json(user);
});

export default usersRouters;
