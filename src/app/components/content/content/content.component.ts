import { Component } from '@angular/core';
import { BoardComponentComponent } from "../../board/board-component/board-component.component";
import { SidebarComponent } from "../../sidebar/sidebar/sidebar.component";

@Component({
  selector: 'app-content-old',
  imports: [BoardComponentComponent, SidebarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
