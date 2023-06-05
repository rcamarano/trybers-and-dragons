import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf.createdInstances += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.createdInstances;
  }
}

export default Dwarf;