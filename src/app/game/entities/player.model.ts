import { Card } from "./card.model";
import * as _ from 'lodash';

export class Player {
  id: string;
  name: string;

  cards?: {
    [id: string]: Card
  }
}
