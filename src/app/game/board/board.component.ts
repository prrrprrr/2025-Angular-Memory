import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CardComponent } from '../card/card.component';
import { GameService } from '../service/game.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-board',
  imports: [CommonModule, CardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  private gameService = inject(GameService)
  private newGameSubscription!: Subscription
  private colorsSubscription!: Subscription
  colors = signal(['green', 'lightseagreen', 'lightcoral'])
  colorCardBack = computed(() => this.colors()[0])
  colorCardFlipped = computed(() => this.colors()[1])
  colorCardFound = computed(() => this.colors()[2])
  content = signal([['']])
  isImageCard = computed(() => this.content()[0][0].length==1 ? false : true)


  constructor() { }
  ngOnInit() {
    this.newGameSubscription = this.gameService.newGameSubject$.subscribe((content) => { this.content.set(content)});
    this.colorsSubscription = this.gameService.colorSubject$.subscribe((colors) => this.colors.set(colors));
  }
  ngOnDesrtroy() {
    this.newGameSubscription.unsubscribe();
    this.colorsSubscription.unsubscribe();
  }
  makeMove(card: CardComponent)
  {
    this.gameService.makeMove(card)
  }
  getPairsFound()
  {
    return this.gameService.pairsFound()
  }
}
