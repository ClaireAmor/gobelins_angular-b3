import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year = new Date().getFullYear();

  public showTermCondition = true;
  public termCondition = 'Terms & Conditions';
  public privacyPolicy = 'Privacy Policy';
  public contactUs = 'Contact us';

  constructor() { }

  ngOnInit(): void {
  }

}
