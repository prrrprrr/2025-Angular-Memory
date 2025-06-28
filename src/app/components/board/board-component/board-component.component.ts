import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CardComponentComponent } from "../../card/card-component/card-component.component";
import { BoardService } from '../../../services/board/board.service';

@Component({
  selector: 'app-board-component',
  imports: [CardComponentComponent, CommonModule],
  templateUrl: './board-component.component.html',
  styleUrl: './board-component.component.css'
})
export class BoardComponentComponent {
  //@Input () content: Array<Array<string>> = [];
  @Input () size: number = 0
  cards = []
  currentPlayer: number = 0
  foundpairs= [0,0]

  constructor(private boardService: BoardService) { }
  content = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H']
  ]
  makeMove(card: CardComponentComponent)
  {
    this.boardService.makeMove(card)
  }
  getPairsFound(player: number)
  {
    return this.boardService.getPairsFound(player)
  }




  //content = Array.from({ length: this.size }, (_, i) => Array.from({ length: 4 }, (_, i) => i + 1));
}
