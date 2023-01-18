import Race from './Race';

class Dwarf extends Race {
  public readonly _life: number;
  public static countDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 80;
    Dwarf.countDwarf += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  public static createdRacesInstances(): number {
    return Dwarf.countDwarf;
  }
}

export default Dwarf;