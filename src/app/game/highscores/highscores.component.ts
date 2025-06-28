import { Component } from '@angular/core';

@Component({
  selector: 'app-highscores',
  imports: [],
  templateUrl: './highscores.component.html',
  styleUrl: './highscores.component.css'
})
export class HighscoresComponent {
  highscores = [
    { name: 'A', score: 100 },
    { name: 'B', score: 200 },
    { name: 'C', score: 300 },
    { name: 'D', score: 400 },
    { name: 'E', score: 500 },
  ]
}
