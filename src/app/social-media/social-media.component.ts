import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})

export class SocialMediaComponent implements OnInit {

  brockEmail = 'mailto:ep15je@brocku.ca';
  googleScholar = 'https://scholar.google.ca/citations?hl=en&amp;user=hIYIRIMAAAAJ';
  orcid = 'http://orcid.org/0000-0003-0252-4978';
  hodsonLab = 'http://www.hodsonlab.com/';
  twitter = 'https://twitter.com/elviraprusaczyk';

  constructor() {

  }

  ngOnInit(): void {
  }
}
