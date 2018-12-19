import { Injectable } from '@angular/core';
import {ColorService} from "./color.service";

@Injectable({
  providedIn: 'root'
})
export class DefaultColorService implements ColorService{

  constructor() { }
}
