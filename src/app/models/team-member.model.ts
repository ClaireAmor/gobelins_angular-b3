import {TeamMemberLinksModel} from "./team-member-links.model";
import {Model} from "./interface/model.interface";

export class TeamMemberModel implements Model{
  readonly img: string;
  readonly name: string;
  readonly text: string;
  readonly links: TeamMemberLinksModel;
  readonly isActive?: boolean;

  constructor(input: Partial<TeamMemberModel>) {
    this.img = input.img || '';
    this.name = input.name || '';
    this.text = input.text || '';
    this.links = new TeamMemberLinksModel(input.links || {});
    this.isActive = input.isActive || false;
  }
}

//9.1
/*
import {TeamMemberLinksModel} from "./team-member-links.model";

export interface TeamMemberModel {
  img: string;
  name: string;
  text: string;
  links: TeamMemberLinksModel;
  isActive?: boolean;
}
*/
