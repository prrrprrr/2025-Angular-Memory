import { Component, EventEmitter, Output, input, signal} from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Output() cardClicked = new EventEmitter<CardComponent>();
  content = input()
  isImageCard = input()
  colors = input(['red', 'greed', 'blue'])
  isFlipped = signal(false);
  isFound = signal(false);
  currentColor = signal('')

ngOnInit() {
  console.log(this.colors())
  this.currentColor.set(this.colors()[0]);
}

  onClick() {
    this.cardClicked.emit(this);
  }
  openCard() {
    this.isFlipped.set(true);
    this.currentColor.set(this.colors()[1]);
    //change color of card using the css class
  }

  closeCard() {
    this.currentColor.set(this.colors()[0]);
    this.isFlipped.set(false)
  }
  cardIsFound() {
    this.currentColor.set(this.colors()[2]);
    this.isFound.set(true)
  }
}
