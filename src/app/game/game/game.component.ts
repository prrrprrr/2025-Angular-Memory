import { Component, inject} from '@angular/core';
import { BoardComponent } from "../board/board.component";
import { GameService } from "../service/game.service";
import { HighscoresComponent } from "../highscores/highscores.component";
import { NewGameFormComponent } from '../new-game-form/new-game-form.component';

@Component({
  selector: 'app-game',
  imports: [BoardComponent, HighscoresComponent, NewGameFormComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  gameService = inject(GameService)
  colors = this.gameService.colors()

  ngOnInit(){
  }

  ngOnDestroy(){
  }
}
