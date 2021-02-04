import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  username: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

export default class AuthenticateUserService {
  public async execute({ username, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { username } });

    if (!user) {
      throw new Error('Incorrect username/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect username/password combination.');
    }

    const token = sign({}, `${process.env.SECRET_JWT}`, {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}
