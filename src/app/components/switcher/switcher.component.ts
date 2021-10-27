import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {
  //Injection du document afin qu'il ne soit jamais nul
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  isVisible = false;
  themeList=['default','pink','yellow','green','purple','light-blue'];



  public windowScroll() :void {
    /*Ici on créer un composant afin que si le document peut etre nul
    et qu'il est impossible d'utiliser le @ts-ignore le document ne pense pas
    qu'il puisse etre nul --> constructeur*/
    const html = document.getElementById("back-to-top");
    if (!html) return

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      /* // @ts-ignore */
      html.style.display = "inline";
    } else {
      html.style.display = "none";
    }
  }

 clickSettings() {
   this.isVisible = !this.isVisible;
 }

 setTheme(theme: string) {
   const color = document.getElementById("color-opt");
   if (!color) return;

   color.setAttribute('href', 'assets/css/colors/' + theme + '.css')


 }
}
