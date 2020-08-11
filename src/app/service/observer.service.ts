import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  public data: BehaviorSubject<string>=new BehaviorSubject<string>('');
  constructor() { }
   update(string:string){
    this.data.next(string);
  }
}
