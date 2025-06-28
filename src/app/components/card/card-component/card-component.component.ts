import { Component, Input, EventEmitter, Output, input, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-card-component',
  imports: [CommonModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  @Output() cardClicked = new EventEmitter<CardComponentComponent>();
  @ViewChild('cardDiv') cardDiv!: ElementRef
  content = input()
  isImageCard = input()
  isFlipped: boolean = false;
  isFound: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {

  };
  onClick() {
    this.cardClicked.emit(this);
  }
  openCard() {
    this.isFlipped = true;
  }

  closeCard() {
    this.isFlipped = false
  }
  cardIsFound() {
    this.isFound = true
  }
}
