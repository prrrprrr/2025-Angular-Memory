import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ContentComponent } from "./components/content/content/content.component";
import { ContentComponent } from "./mainContent/content/content.component";
import { GameComponent } from "./game/game/game.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Memory';
}
