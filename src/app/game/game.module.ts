import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import {
  GameService,
  ColorService,
  DiceService,
  DefaultColorService,
  DefaultGameService,
  DefaultDiceService
} from './services';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GameComponent
  ],
  providers: [
    {
      provide: GameService,
      useClass: DefaultGameService
    },
    {
      provide: ColorService,
      useClass: DefaultColorService
    },
    {
      provide: DiceService,
      useClass: DefaultDiceService
    }
  ]
})
export class GameModule { }
