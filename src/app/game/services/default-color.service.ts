import { Injectable } from '@angular/core';
import {ColorService} from "./color.service";
import {Color} from "../entities";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DefaultColorService implements ColorService{

  private _availableColors: {[id: string]: Color};

  public get availableColors(): {[id: string]: Color} {
    if(!this._availableColors) {
      this._availableColors = this.generateAvailableColors();
    }

    return this._availableColors;
  }

  public getRandomColor(): Color {
    let keys = Object.keys(this.availableColors);

    let max = keys.length;

    let randomIndex = Math.floor((Math.random() * max) + 0);

    return _.cloneDeep(this.availableColors[keys[randomIndex]]);
  }

  private generateAvailableColors(): {[id: string]: Color} {
    return {
      blue: {
        id: "blue",
        hexColor: "",
        name: "Blue"
      },
      red: {
        id: "red",
        hexColor: "",
        name: "Red"
      },
      yellow: {
        id: "yellow",
        hexColor: "",
        name: "Yellow"
      },
      green: {
        id: "green",
        hexColor: "",
        name: "Green"
      },
      magenta: {
        id: "magenta",
        hexColor: "",
        name: "Magenta"
      },
      pink: {
        id: "pink",
        hexColor: "",
        name: "Pink"
      }
    }
  }
}
