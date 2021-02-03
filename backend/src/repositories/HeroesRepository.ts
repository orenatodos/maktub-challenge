import Hero from '../models/Hero';

export default class HeroesRepository {
  private heroes: Hero[];

  constructor() {
    this.heroes = [];
  }

  public create(
    name: string,
    description: { short: string; full: string },
    image: string,
  ): Hero {
    const hero = new Hero(name, description, image);

    this.heroes.push(hero);

    return hero;
  }
}
