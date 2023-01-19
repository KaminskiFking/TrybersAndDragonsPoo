import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  public static countMage = 0;
  public _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Mage.countMage += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Mage.countMage;
  }
}

export default Mage;