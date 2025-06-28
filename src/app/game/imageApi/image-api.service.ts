import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  constructor() { }


  async fetchImageArray(cardType: string, totalPairs: number): Promise<string[]> {
    let promises
    if (cardType == 'Dogs') {
      promises = Array.from({length: totalPairs}, () => this.fetchDogImage(new Request("https://dog.ceo/api/breeds/image/random")));
    } else {
      promises = Array.from({length: totalPairs}, () => this.fetchRandomImage(new Request("https://picsum.photos/200")));
    }
    return Promise.all(promises)
  }
  fetchDogImage(request: Request): Promise<string> {
    return fetch(request)
      .then((response) => response.json())
      .then((data) => data.message)
      .catch( () => {this.fetchDogImage(request)})
  }
  fetchRandomImage(request:Request): Promise<string> {
    return fetch(request)
        .then((response) =>(response.url))
        .catch( () => this.fetchRandomImage(request))
  }

}
