import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  public static countWarrior = 0;
  public _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior.countWarrior += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.countWarrior;
  }
}

export default Warrior;