import { Injectable } from '@angular/core';
import { GameService } from "./game.service";
import { ColorService } from "./color.service";
import {Card, PlayerAdapter, Player } from "../entities";
import * as _ from 'lodash';
import {DiceService} from "./dice.service";
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class DefaultGameService implements GameService {

  private players: {[id: string]: PlayerAdapter} = {};
  private cardCount: number = 5;

  constructor(
    public colorService: ColorService,
    public diceService: DiceService
  ) {}

  public start(): void {
    this.init();

    //make async so it doesn't freeze the ui
    let victor: PlayerAdapter = null;
    while(true) {
      victor = this.wholeTurn();

      if(!!victor) {
        console.log("Der Gewinner des Spieles ist: " + victor.name);
        break;
      }
    }
  }

  public addPlayer(player: Player): void {
    this.players[player.id] = new PlayerAdapter(_.cloneDeep(player));
  }

  public removePlayer(id: string) {
    delete this.players[id];
  }

  private init() {
    Object.keys(this.players)
      .map((id: string) => this.players[id])
      .forEach((player: PlayerAdapter) => {
        player.cards = this.generateCards();
      });
  }

  private generateCards(): {[id: string]: Card} {
    let cards = {};

    for(let i = 0; i < this.cardCount; i++){
      let card = new Card();
      card.color = this.colorService.getRandomColor();
      card.id = UUID.UUID();

      cards[card.id] = card;
    }

    return cards;
  }

  private wholeTurn(): PlayerAdapter {
    let victor: PlayerAdapter = null;

    Object.keys(this.players)
      .map((id: string) => this.players[id])
      .forEach((player: PlayerAdapter) => {
        this.playerTurn(player);

        if(this.hasPlayerAdapterWon(player)) {
          victor = _.cloneDeep(player);
          return;
        }
      });

    return victor;
  }

  private playerTurn(player: PlayerAdapter) {
    let color = this.diceService.throw();

    //iterate through users cards and check if
    Object.keys(player.cards)
      .map((id: string) => player.cards[id])
      .forEach((card: Card) => {
        if(card.color.id === color.id) {
          card.visible = true;
        }
      });
  }

  private hasPlayerAdapterWon(player: PlayerAdapter): boolean {
    return player.invisibleCards === 0;
  }
}
