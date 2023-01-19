import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  public static countRanger = 0;
  public _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger.countRanger += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.countRanger;
  }
}

export default Ranger;