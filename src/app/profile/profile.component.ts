import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName = 'Elvira';
  lastName = 'Prusaczyk';
  fullName = this.firstName  + ' ' +  this.lastName;
  industry = 'Social Psychology';
  occupations = 'RESEARCH SCIENTIST | WRITER | PHD CANDIDATE ';
  profilePicSrc = 'assets/images/MyProfilePic.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
