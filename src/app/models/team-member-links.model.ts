import {Model} from "./interface/model.interface";

export class TeamMemberLinksModel implements Model{
  readonly github: string;
  readonly skype: string;
  readonly twitter: string;

  constructor(input: Partial<TeamMemberLinksModel>) {
    this.github = input.github || '';
    this.skype = input.skype || '';
    this.twitter = input.twitter || '';
  }
}
