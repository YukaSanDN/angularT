import { Component} from '@angular/core';
import {ObserverService} from "../../service/observer.service";

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent{

  constructor(public ObserverService:ObserverService ) { }

}
