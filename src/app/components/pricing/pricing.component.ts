import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})

export class PricingComponent implements OnInit{

  pricingData: Array<any>;


  constructor() {
    this.pricingData = [
      {
        price: '$29',
        bandwidth: '1GB',
        space: '50MB',
        support: 'No',
        domain: 1
      },
      {
        price: '$59',
        bandwidth: '2GB',
        space: '500MB',
        support: 'Yes',
        domain: 3
      },
      {
        price: '$89',
        bandwidth: '2.5GB',
        space: '700MB',
        support: 'No',
        domain: 5
      }
    ];
  }

  ngOnInit(): void {
  }
}
