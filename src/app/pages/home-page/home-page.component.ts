import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {NavModel} from "../../models/nav.model";

@Component({
  selector: 'home-page', //selecteur html pour appeler le compo
  templateUrl: './home-page.component.html',// template associé
  styleUrls: ['./home-page.component.scss']// style associé pour surcharger les styles principaux

})

// HomePageComponent convention de nommage PascalCase pour les noms de classe
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  timerInterval: any;
  homeNavbarData: any;
  toogleSocialLinks: boolean = true;
  monText1='Prince ali, oui c\'est bien lui Ali a baboua';
  textH1 = [
    'A genoux, prosternez vous, soyer ravis',
    'Pas de panique on se calme ! Criez vive Ali salam !',
    'Venez assister au plus grand spectacle de l\'Arabi !',
    this.monText1
  ];

  // homeNavbarData = [
  //   {
  //     name: "Home",
  //     title: "home-page"
  //   },
  //   {
  //     name: "Services",
  //     title: "services"
  //   },
  //   {
  //     name: "Features",
  //     title: "features"
  //   },
  //   {
  //     name: "Testimonial",
  //     title: "testi"
  //   },
  //   {
  //     name: "Team",
  //     title: "team"
  //   },
  //   {
  //     name: "Faq",
  //     title: "faq"
  //   },
  //   {
  //     name: "Pricing",
  //     title: "pricing"
  //   },
  //   {
  //     name: "Contact",
  //     title: "contact"
  //   },
  // ]

  // variables et functions convention de nomage camelCase
  currentSection = 'home-page';

  onEmitToggleSocialLinksEvent(event: boolean) {
    console.log(event)
    this.toogleSocialLinks = event;
    this.changeDetectorRef.detectChanges();

  }
  constructor(@Inject(DOCUMENT) private readonly document: Document,
              private readonly changeDetectorRef: ChangeDetectorRef) {

    this.homeNavbarData = [
      new NavModel({
        name: "Home",
        title: "home-page"
      }),
      new NavModel({
        name: "Services",
        title: "services"
      }),
      new NavModel({
        name: "Features",
        title: "features"
      }),
      new NavModel({
        name: "Testimonial",
        title: "testi"
      }),
      new NavModel({
        name: "Team",
        title: "team"
      }),
      new NavModel({
        name: "Faq",
        title: "faq"
      }),
      new NavModel({
        name: "Pricing",
        title: "pricing"
      }),
      new NavModel({
        name: "Contact",
        title: "contact"
      }),
    ]
    // exécuté en premier !

    // exemple de log à checker dans la console du navigateur
    console.log('(exemple de log) section courante: ' + this.currentSection); // utilisation de this pour appels à fonctions, variables, ...
  }

  ngOnInit() {
    // exécuté automatiquement à l'initialisation du composant
    // obligatoire si implements OnInit (qui est facultatif)
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks
  }

  ngAfterViewInit() {
    // exécuté automatiquement après l'initialisation de la vue
    // obligatoire si implements AfterViewInit (qui est facultatif)
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks

    const html = document.getElementById('text');
    if (!html) return;
    let i = 0;

    this.timerInterval = setInterval(() => {
      html.innerHTML = this.textH1[i];
      if (i === this.textH1.length -1) {
        i = -1;
      }
      i++;

    }, 2500)
  }

  // Toujours utiliser public ou private pour les fonctions, variables , constantes ...
  // Si pas précisé, c'est public par défaut mais on s'expose à des soucis de lint
  // NOTE : Pour les appels depuis le html, mettre en public
  public windowScroll(): void {
    const html = document.getElementById('navbar') ;
    if (!html) return ;
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      html.style.backgroundColor = '#1a1a1a';
      html.style.padding = '15px 0px';
    } else {
      html.style.backgroundColor = '';
      html.style.padding = '20px';
    }
  }

 // Utiliser void si la fonction ne renvoie rien
  private returnNothing (): void {
    const fake = this.returnABoolean(false)
  }

  // Préciser le type ( boolean, any, unknown ...)
  private returnABoolean (input : boolean): boolean {
    const fake = !input;
    return fake;
  }

  public toggleMenu(): void {
    const collapse = document.getElementById('navbarCollapse');
    if (!collapse) return;
    collapse.classList.toggle('show');
  }


  public onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

  ngOnDestroy() {
    // exécuté automatiquement avant la desctruction du composant
    // obligatoire si implements OnDestroy (qui est facultatif)
    // Important : Si on a souscrit à des abonnements, se désabonner ici pour éviter les fuites de mémoires
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks

    clearInterval(this.timerInterval);
  }

}
