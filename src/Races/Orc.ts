import Race from './Race';

class Orc extends Race {
  public readonly _life: number;
  public static countOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 74;
    Orc.countOrc += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  public static createdRacesInstances(): number {
    return Orc.countOrc;
  }
}

export default Orc;