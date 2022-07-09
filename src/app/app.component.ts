import { Component } from '@angular/core';
import { FirebaseService } from './_services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(firebase: FirebaseService) {  }

}
