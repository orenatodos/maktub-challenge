import Hero from '../models/Hero';

interface CreateHeroDTO {
  name: string;
  description: {
    short: string;
    full: string;
  };
  image: string;
}

export default class HeroesRepository {
  private heroes: Hero[];

  constructor() {
    this.heroes = [];
  }

  public all(): Hero[] {
    return this.heroes;
  }

  public create({ name, description, image }: CreateHeroDTO): Hero {
    const hero = new Hero({ name, description, image });

    this.heroes.push(hero);

    return hero;
  }
}
