import {
  Card,
  Player, PlayerAdapter
} from "../entities";

export abstract class GameService {
  abstract start(): void;
  abstract addPlayer(player: Player);
  abstract removePlayer(id: string);
}
