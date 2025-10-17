import { Injectable, inject, signal, computed } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BehaviorSubject, interval, isEmpty, Subscription } from 'rxjs';
import { ImageApiService } from './imageApi/image-api.service';
import { TimerService } from './timerService/timer.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public timerService = inject(TimerService)
  public apiService = inject(ImageApiService)

  //variable declarations
  public size = signal(4)
  public cardType = signal('Letters')
  public cards: CardComponent[] = []
  public turnsTaken = signal(0)
  public pairsFound = signal(0)
  public totalPairs = computed( () => Math.floor(this.size()*this.size()/2))
  public colors = signal(['red','green','blue'])
  public letters: string[] = ['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


  public newGameSubject$ = new BehaviorSubject<string[][]>([]);
  public colorSubject$ = new BehaviorSubject<string[]>([]);
  public pairsFoundSubject$ = new BehaviorSubject<number>(this.pairsFound());
  public turnsTakenSubject$ = new BehaviorSubject<number>(this.turnsTaken());
  
  constructor() {
    this.startNewGame()
  }
  isGameDone(): boolean {
    if (this.pairsFound() == this.totalPairs()) {
      return true
    } else {
      return false
    }
  }
  prepareNewGame(size: number, cardType: string, colors: string[]) {
    //set up the values in the gameservice in order to start a new game
    this.size.set(size)
    this.cardType.set(cardType)
    this.colors.set(colors)
    this.pairsFound.set(0)
    this.turnsTaken.set(0)
    this.cards = []
    this.timerService.stopTimer()
    this.timerService.resetTimer()
    

  }

  makeMove(card: CardComponent) {
    if (this.turnsTaken() == 0 && this.cards.length == 0 ) {
      this.timerService.startTimer()
    }
    if (this.cards.length == 2) {
      this.cards[0].closeCard()
      this.cards[1].closeCard()
      this.cards = []
    }
    this.cards.push(card)
    card.openCard()
    if (this.cards.length == 2) {
      this.turnsTaken.update(turnsTaken => turnsTaken + 1)
      this.turnsTakenSubject$.next(this.turnsTaken())
      if (this.cards[0].content() == this.cards[1].content()) {
        this.pairsFound.update(pairsFound => pairsFound + 1)
        this.pairsFoundSubject$.next(this.pairsFound())
        this.cards[0].cardIsFound()
        this.cards[1].cardIsFound()
        this.cards = []
      }
    } else {
      this.cards[0].openCard()
    }
    if (this.isGameDone()) {
      this.timerService.stopTimer()
      alert("Game Over")
    }

  }

  shuffleArray<T>(array: T[]): T[] {
    const copy = [...array]; // avoid mutating original
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  chunkArray<T>(arr: T[], chunkSize:number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  async getContent(): Promise<string[][]> {
    console.log('getting content')
    let result = []
    if (this.cardType() == 'Letters') {
      console.log('totalpairs='+this.totalPairs())
      let letterArray = this.letters.slice(0,this.totalPairs())
      result = [...letterArray, ...letterArray]
    } else {
      console.log('totalpairs='+this.totalPairs+'wtf')
      let imageArray = await this.apiService.fetchImageArray(this.cardType(), this.totalPairs())
      result = [...imageArray, ...imageArray]
    }
    console.log(result)
    let finalArray = this.chunkArray(this.shuffleArray(result), this.size())
    return finalArray
  }

  async startNewGame() {
    //get content
    let content = await this.getContent()
    //send out info to subsribers
    this.colorSubject$.next(this.colors())
    this.pairsFoundSubject$.next(this.pairsFound())
    this.turnsTakenSubject$.next(this.turnsTaken())
    this.newGameSubject$.next(content);
    this.timerService.stopTimer()
  }
}
