import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TeamMemberModel} from "../../models/team-member.model";
import {TeamMemberLinksModel} from "../../models/team-member-links.model";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
//OnChanges
export class TeamComponent implements OnInit{

  teamMemberList: any;

  @Input() toogleSocialLinks : boolean;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.teamMemberList = [
      new TeamMemberModel({
        img: "../../../../../assets/images/team/team-3.png",
        name: "@Donald Laughlin",
        text: "You want customer to your store. Easily your coupans and has Clooger.",
        links: new TeamMemberLinksModel({
          //github:'https://github.com/ClaireAmor',
          skype:'https://www.skype.com/fr/',
          twitter:'https://twitter.com/',
        }),
        isActive: true,
      }),
      new TeamMemberModel({
        img: "../../../../../assets/images/team/team-2.png",
        name: "@Rigoberto Valenza",
        text: "You want customer to your store. Easily your coupans and has Clooger.",
        links: new TeamMemberLinksModel({
          github:'https://github.com/ClaireAmor',
          //skype:'https://www.skype.com/fr/',
          twitter:'https://twitter.com/',
        }),
        isActive: false,
      }),
      new TeamMemberModel({
        img: "../../../../../assets/images/team/team-1.png",
        name: "@Venessa Smith",
        text: "You want customer to your store. Easily your coupans and has Clooger.",
        links: new TeamMemberLinksModel({
          github:'https://github.com/ClaireAmor',
          skype:'https://www.skype.com/fr/',
          //twitter:'https://twitter.com/',
        }),
        isActive: true,
      })
    ]
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
    this.changeDetectorRef.detectChanges();
  }

}
