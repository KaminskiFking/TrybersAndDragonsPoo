import Race from './Race';

class Halfling extends Race {
  public readonly _life: number;
  public static countHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 60;
    Halfling.countHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  public static createdRacesInstances(): number {
    return Halfling.countHalfling;
  }
}

export default Halfling;