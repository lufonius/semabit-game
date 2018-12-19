import { Player } from "./player.model";
import { Card } from "./card.model";
import * as _ from 'lodash';

export class PlayerAdapter {
  constructor(
    player: Player
  ) {
    this.id = player.id;
    this.name = player.name;
    this.cards = _.cloneDeep(player.cards);
  }

  id: string;
  name: string;

  cards: {
    [id: string]: Card
  }

  get cardCount(): number {
    return Object.keys(this.cards).length;
  }

  get visibleCards(): number {
    return Object.keys(this.cards)
      .filter((id: string) => this.cards[id].visible)
      .length;
  }

  get invisibleCards(): number {
    return this.cardCount - this.visibleCards;
  }
}
