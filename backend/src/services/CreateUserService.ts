import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
  username: string;
  password: string;
  role: string;
}

export default class CreateUserService {
  public async execute({ username, password, role }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { username },
    });

    if (checkUserExists) {
      throw new Error('Username already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      password: hashedPassword,
      role,
    });

    await usersRepository.save(user);

    return user;
  }
}
