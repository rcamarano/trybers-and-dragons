interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter): void,
  receiveDamage(attckPoints: number): number,
}

export default SimpleFighter;