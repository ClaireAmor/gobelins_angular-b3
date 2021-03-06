import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {ClientComponent} from './client/client.component';
import {SwitcherComponent} from './switcher/switcher.component';
import {ScrollspyDirective} from './scrollspy.directive';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { TeamComponent } from './team/team.component';
import { IconsComponent } from './team/icons/icons.component';
import {TruncatePipe} from "../pipes/truncate.pipe";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ClientComponent,
    SwitcherComponent,
    ScrollspyDirective,
    FooterComponent,
    ContactComponent,
    FaqComponent,
    FeaturesComponent,
    PricingComponent,
    ServicesComponent,
    CtaComponent,
    TeamComponent,
    IconsComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    ClientComponent,
    SwitcherComponent,
    ScrollspyDirective,
    FooterComponent,
    ServicesComponent,
    FeaturesComponent,
    TeamComponent,
    FaqComponent,
    CtaComponent,
    PricingComponent,
    ContactComponent,
    TruncatePipe
  ]
})
export class SharedModule {
}
