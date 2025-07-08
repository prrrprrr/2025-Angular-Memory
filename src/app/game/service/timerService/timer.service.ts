import { Injectable, signal, inject } from '@angular/core';
import { BehaviorSubject, interval , Subscription} from 'rxjs';
import { GameService } from '../game.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private gameService = inject(GameService)

  public timeElapsed = signal(0)

  private sub!: Subscription
  private newGameSubscription!: Subscription
  private startTimerSub!: Subscription
  public timeTaken$ = new BehaviorSubject<number>(this.timeElapsed())

  constructor() {
    this.newGameSubscription = this.gameService.newGameSubject$.subscribe(() => this.resetTimer());
    this.startTimerSub = this.gameService.startTimerSubject$.subscribe((value) => this.startTimer(value));
  }
  startTimer(value: boolean){
  if(value == true){
    this.resetTimer()
    this.sub = interval(1000).subscribe(() => this.timeElapsed.update((value) => value + 1));
  } else {
    this.stopTimer()
  }
  }
  stopTimer(){
    this.sub?.unsubscribe()
  }
  resetTimer()
  {
    this.stopTimer()
    this.timeElapsed.set(0)
  }
  getTimeElapsed(){
    return this.timeElapsed()
  }
  cleanup(){
    this.newGameSubscription?.unsubscribe();
    this.sub?.unsubscribe()
    this.startTimerSub?.unsubscribe()
  }
}
