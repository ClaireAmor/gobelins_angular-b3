import {Model} from "./interface/model.interface";

export class NavModel implements Model{
  readonly name: string;
  readonly title: string;

  constructor(input: Partial<NavModel>) {
    this.name = input.name || '';
    this.title = input.title || '';
  }
}
