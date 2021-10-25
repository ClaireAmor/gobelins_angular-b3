import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
// class Pricing {
//   price: string;
//   bandwidth: string;
//   space: string;
//   support: string;
//   domain: number;
//   isActive: boolean;
// }

export class PricingComponent implements OnInit{

  pricingData = [
    {
      price: '$29',
      bandwidth: '1GB',
      space: '50MB',
      support: 'No',
      domain: 1,
      isActive: false,
    },
    {
      price: '$59',
      bandwidth: '2GB',
      space: '500MB',
      support: 'Yes',
      domain: 3,
      isActive: true
    },
    {
      price: '$89',
      bandwidth: '2.5GB',
      space: '700MB',
      support: 'No',
      domain: 5,
      isActive: false,
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  verifieIsActive(active:any): boolean {
    if (active.isActive) {
      return true;
    }
    return false;
  }


}
