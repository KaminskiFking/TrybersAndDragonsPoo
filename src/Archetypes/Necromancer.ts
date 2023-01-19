import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  public static countNecromancer = 0;
  public _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer.countNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.countNecromancer;
  }
}

export default Necromancer;