import {Component, Input, OnInit} from '@angular/core';
import {TeamMemberLinksModel} from "../../../models/team-member-links.model";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input() iconList: TeamMemberLinksModel;
  constructor() { }

  ngOnInit(): void {
  }

}
