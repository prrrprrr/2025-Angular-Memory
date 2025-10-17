import { Injectable, signal } from '@angular/core';
import { interval, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timeElapsed = signal(0)
  private sub!: Subscription

  constructor() {
  }
  startTimer(){
    console.log("starting timer")
    this.sub = interval(1000).subscribe(() => this.timeElapsed.update((value) => value + 1));
  }
  stopTimer(){
    this.sub?.unsubscribe()
  }
  resetTimer(){
    this.timeElapsed.set(0)
  }
  getTimeElapsed(){
    return this.timeElapsed()
  }
  cleanup(){
    this.sub?.unsubscribe()
  }
}
