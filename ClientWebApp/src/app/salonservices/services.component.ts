import { Component, OnInit } from '@angular/core';
import { SalonservicesService } from './salonservices.service';
import { SalonOffering } from 'src/models/salonOffering';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  salonOffering: SalonOffering;

  constructor(private salonService: SalonservicesService) { }

  ngOnInit() {
    this.getSalonServices();
  }

  getSalonServices(): void {
    this.salonService.getServices()
    .subscribe(response => {
      this.salonOffering = { ... response.body };
    })
  }

}
