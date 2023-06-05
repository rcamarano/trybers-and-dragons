import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Orc.createdInstances += 1;
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.createdInstances;
  }
}

export default Orc;