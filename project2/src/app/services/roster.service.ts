import { Injectable } from '@angular/core';
import { Contestant } from 'app/model/stock';
@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private contestants: string[];
  constructor() {
    this.contestants = [];
   }

   getContestants() : string[] {
    return this.contestants;
  }

  addContestant(player: string) {
    let foundPlayer = null;
    
    for (let currentPlayer of this.contestants){
      if (currentPlayer === player) {
        foundPlayer = currentPlayer;
      }
    }

      if (player === null || player === "" || foundPlayer!= null){
        return false;
      }
    
    this.contestants.push(player);
    return true;
  }
}