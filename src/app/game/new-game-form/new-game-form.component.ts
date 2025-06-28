import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-new-game-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-game-form.component.html',
  styleUrl: './new-game-form.component.css'
})
export class NewGameFormComponent {
  gameService = inject(GameService)
  colorClosedCard: string = 'red';
  colorOpenCard: string = 'green';
  colorFoundCard: string = 'blue';
  cardType: string = 'letters'
  size: number = 4

  onSubmit() {
    this.gameService.prepareNewGame(
      Number(this.size),
      String(this.cardType),
      [this.colorClosedCard, this.colorOpenCard, this.colorFoundCard])
    this.gameService.startNewGame()
  }

}
