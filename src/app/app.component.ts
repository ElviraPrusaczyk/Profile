import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Profile';
  firstName = 'Elvira';
  lastName = 'Prusaczyk';
  fullName = this.firstName  + ' ' +  this.lastName;
  industry = 'Social Psychology';
  currentPosition = 'PHD Candidate';
  education = '';
  country = 'Canada';
}
