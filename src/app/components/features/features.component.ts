import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  featuresData = [
    {
      img: "../../../../../assets/images/mockup2.png",
      title: "This is Improve Your Marketing business",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud .",
      ref: "#",

    },
    {
      img: "../../../../../assets/images/mockup1.png",
      title: "This Is Increase Your Marketing Performance",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud .",
      ref: "#",

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
