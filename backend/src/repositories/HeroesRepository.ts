import Hero from '../models/Hero';

export default class HeroesRepository {
  private heroes: Hero[];

  constructor() {
    this.heroes = [];
  }

  public all(): Hero[] {
    return this.heroes;
  }

  public getById(id: string): Hero {
    const heroIndex = this.heroes.findIndex(index => index.id === id);

    return this.heroes[heroIndex];
  }

  public create({ name, description, image }: Omit<Hero, 'id'>): Hero {
    const hero = new Hero({ name, description, image });

    this.heroes.push(hero);

    return hero;
  }

  public update({ id, name, description, image }: Hero): Hero {
    const hero = new Hero({ name, description, image });

    const heroIndex = this.heroes.findIndex(index => index.id === id);

    this.heroes.splice(heroIndex, 1, hero);

    return hero;
  }

  public delete(id: string): void {
    const heroIndex = this.heroes.findIndex(index => index.id === id);

    this.heroes.splice(heroIndex, 1);
  }
}
