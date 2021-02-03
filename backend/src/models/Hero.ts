import { v4 as uuid } from 'uuid';

export default class Hero {
  id: string;

  name: string;

  description: {
    short: string;
    full: string;
  };

  image: string;

  constructor({ name, description, image }: Omit<Hero, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.description = {
      short: description.short,
      full: description.full,
    };
    this.image = image;
  }
}
