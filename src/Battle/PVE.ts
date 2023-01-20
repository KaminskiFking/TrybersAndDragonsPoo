import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  public _player1: Fighter;
  public _monster: [SimpleFighter];

  constructor(player1: Fighter, _monster: [SimpleFighter]) {
    super(player1);
    this._player1 = player1;
    this._monster = _monster;
  }

  fight(): number {
    this._player1.attack(this._monster[0]);
    this._monster[0].attack(this._player1);
    return super.fight();
  }
}

export default PVE;