import {Component} from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {

  isVisible = false;

  public windowScroll() :void {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      // @ts-ignore
      document.getElementById("back-to-top").style.display = "inline";
    } else {
      // @ts-ignore
      document.getElementById("back-to-top").style.display = "none";
    }
  }

 clickSettings() {
   this.isVisible = !this.isVisible;
 }

 setTheme(theme: string) {
    // @ts-ignore
   document.getElementById("color-opt").setAttribute('href', 'assets/css/colors/' + theme + '.css')
 }
}
