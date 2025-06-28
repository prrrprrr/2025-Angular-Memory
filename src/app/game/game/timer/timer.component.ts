import { Component, signal, inject } from '@angular/core';;
import { TimerService } from './timerService/timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  timerService = inject(TimerService)

    ngOnDestroy() {
    this.timerService.cleanup()
  }
}
