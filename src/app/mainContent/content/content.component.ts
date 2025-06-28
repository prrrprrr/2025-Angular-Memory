import { Component } from '@angular/core';
import { GameComponent } from '../../game/game/game.component';

@Component({
  selector: 'app-content',
  imports: [GameComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  page: string = 'game';
}
