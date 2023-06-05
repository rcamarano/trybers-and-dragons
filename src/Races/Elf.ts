import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static createdInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf.createdInstances += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.createdInstances;
  }
}

export default Elf;