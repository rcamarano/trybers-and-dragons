import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number;
  private readonly _cost: number;
  
  constructor(name:string) {
    this._name = name;
    this._cost = 0;
    this._special = 0;
  }
  
  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }
  
  abstract get energyType():EnergyType;
  
  name(): string {  
    return this._name;
  }
  
  cost(): number {  
    return this._cost;
  }
  
  special(): number {  
    return this._special;
  }
}
  
export default Archetype;