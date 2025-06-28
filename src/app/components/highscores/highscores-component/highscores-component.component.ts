import { Component } from '@angular/core';

@Component({
  selector: 'app-highscores-component',
  imports: [],
  templateUrl: './highscores-component.component.html',
  styleUrl: './highscores-component.component.css'
})
export class HighscoresComponentComponent {
  highscores = [
    { name: 'A', score: 100 },
    { name: 'B', score: 200 },
    { name: 'C', score: 300 },
    { name: 'D', score: 400 },
    { name: 'E', score: 500 },
  ]
}
