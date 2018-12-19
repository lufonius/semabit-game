import { Injectable } from '@angular/core';
import { DiceService } from "./dice.service";
import { Color } from "../entities";
import { ColorService } from "./color.service";

@Injectable({
  providedIn: 'root'
})
export class DefaultDiceService implements DiceService{

  constructor(public colorService: ColorService) { }



  public throw(): Color {
    return this.colorService.getRandomColor();
  }
}
