import Race from './Race';

class Elf extends Race {
  public readonly _life: number;
  public static countElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 99;
    Elf.countElf += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  public static createdRacesInstances(): number {
    return Elf.countElf;
  }
}

export default Elf;