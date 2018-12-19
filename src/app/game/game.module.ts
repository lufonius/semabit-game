import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import {
  GameService,
  ColorService,
  DefaultColorService,
  DefaultGameService
} from './services';

@NgModule({
  declarations: [ GameComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide: GameService,
      useClass: DefaultGameService
    },
    {
      provide: ColorService,
      useClass: DefaultColorService
    }
  ]
})
export class GameModule { }
