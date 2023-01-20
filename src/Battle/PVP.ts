import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  public _player1: Fighter;
  public _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    return super.fight();
  }
}

export default PVP;