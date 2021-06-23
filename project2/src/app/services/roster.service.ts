import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  public contestants: string[] = [];
  constructor() {};

   getContestants() : string[] {
    return this.contestants;
  }

  addContestant(player: string): boolean {
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
  
  clearRoster(): void {
    this.contestants = []
  }
}