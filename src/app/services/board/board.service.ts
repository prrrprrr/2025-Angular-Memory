import { Injectable } from '@angular/core';
import { CardComponentComponent } from '../../components/card/card-component/card-component.component';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public size: number = 6
  private type: string = 'Letters'
  private cards: CardComponentComponent[] = []
  private pairsFound: number = 0
  private totalPairs: number
  private amount: number = 6
  private letters: string[] = ['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"]

  constructor() {
    this.pairsFound = 0
    this.totalPairs = Math.floor(this.size*this.size/2)
  }

  isGameDone(): boolean {
    if (this.pairsFound == this.totalPairs) {
      return true
    } else {
      return false
    }
  }
  setSize(size: number) {
    this.size = size
    this.totalPairs = Math.floor(this.size*this.size/2)
  }
  setImageCardType(type: string) {
    this.type = type
  }
  getContent() {
    const amount = Math.floor((this.size*this.size)/2)
    let result
    if (this.type == 'letters') {
      let letterArray = this.letters.slice(0,this.amount)
      result = [...letterArray, ...letterArray]
    } else {
      let imageArray = this.fetchImageArray()
      result = [...imageArray, ...imageArray]
    }
    return this.shuffleArray(result)
  }
  shuffleArray<T>(array: T[]): T[] {
      const copy = [...array]; // avoid mutating original
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
  }
  fetchImageArray() {
    let dogArray = new Array
    let request: Request
    if (this.type == 'Dogs') {
      request = new Request("https://dog.ceo/api/breeds/image/random")
    } else {
      request = new Request("https://picsum.photos/200")
    }
    for(let i=0; i>this.amount; i++) {
      dogArray.push(this.fetchImage(request))
    }

    return dogArray
  }
  async fetchImage(request: Request) {
    return await fetch(request)
      .then((response) => response.json())
      .then((data) => data.message)
      .catch( () => {this.fetchImage(request)})
  }
  makeMove(card: CardComponentComponent) {
    if (this.cards.length == 2) {
      this.cards[0].closeCard()
      this.cards[1].closeCard()
      this.cards = []
    }
    this.cards.push(card)
    card.openCard()
    if (this.cards.length == 2) {
      if (this.cards[0].content() == this.cards[1].content()) {
        this.pairsFound++
        this.cards[0].cardIsFound()
        this.cards[1].cardIsFound()
        this.cards = []
      }
    } else {
      this.cards[0].openCard()
    }
    if (this.isGameDone()) {
      alert("Game Over")
    }

  }
  getPairsFound(player: number) {
    return this.pairsFound
  }
}
