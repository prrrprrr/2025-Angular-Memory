import { Component, inject, signal} from '@angular/core';
import { BoardComponent } from "../board/board.component";
import { GameService } from "../service/game.service";
import { HighscoresComponent } from "../highscores/highscores.component";
import { NewGameFormComponent } from '../new-game-form/new-game-form.component';
import { Subscription } from 'rxjs';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer/timerService/timer.service';

@Component({
  selector: 'app-game',
  imports: [BoardComponent, HighscoresComponent, NewGameFormComponent, TimerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  gameService = inject(GameService)
  private turnSub!: Subscription
  private pairSub!: Subscription
  pairsFound = signal(0)
  turnsTaken = signal(0)
  totalPairs = this.gameService.totalPairs
  colors = this.gameService.colors()

  ngOnInit(){
    this.turnSub = this.gameService.turnsTakenSubject$.subscribe((value) => this.turnsTaken.set(value));
    this.pairSub = this.gameService.pairsFoundSubject$.subscribe((value) => this.pairsFound.set(value));
  }

  ngOnDestroy(){
    this.turnSub?.unsubscribe()
    this.pairSub?.unsubscribe()
  }
}
