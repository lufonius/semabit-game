import {
  Component,
  OnInit
} from '@angular/core';
import { GameService } from "../services";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {

    this.gameService.addPlayer({
      id: 'alice',
      name: 'Alice'
    });

    this.gameService.addPlayer({
      id: 'bob',
      name: 'Bob'
    });

    this.gameService.addPlayer({
      id: 'carol',
      name: 'Carol'
    });

    this.gameService.start();
  }

}
