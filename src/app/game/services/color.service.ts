import {Card, Color} from "../entities";

export abstract class ColorService {
  abstract readonly availableColors: {[id: string]: Color};
  abstract getRandomColor(): Color;
}
