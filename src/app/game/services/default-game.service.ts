import { Injectable } from '@angular/core';
import {GameService} from "./game.service";

@Injectable({
  providedIn: 'root'
})
export class DefaultGameService implements GameService {

  constructor() { }
}
