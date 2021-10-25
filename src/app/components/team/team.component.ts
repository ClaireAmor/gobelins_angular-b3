import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamData = [
    {
      img: "../../../../../assets/images/team/team-3.png",
      name: "@Donald Laughlin",
      text: "You want customer to your store. Easily your coupans and has Clooger.",
      isActive: true,
    },
    {
      img: "../../../../../assets/images/team/team-2.png",
      name: "@Rigoberto Valenza",
      text: "You want customer to your store. Easily your coupans and has Clooger.",
      isActive: false,
    },
    {
      img: "../../../../../assets/images/team/team-1.png",
      name: "@Venessa Smith",
      text: "You want customer to your store. Easily your coupans and has Clooger.",
      isActive: true,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
