import { Component } from '@angular/core';
import { HighscoresComponentComponent } from "../../highscores/highscores-component/highscores-component.component";
import { NewGameFormComponent } from "../../new-game-form/new-game-form.component";

@Component({
  selector: 'app-sidebar',
  imports: [HighscoresComponentComponent, NewGameFormComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
