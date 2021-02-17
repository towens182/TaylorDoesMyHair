import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from '../apiGateway.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  salonServices: any;

  constructor(private apiGatewayService: ApiGatewayService) { }

  ngOnInit() {
    this.getSalonServices();
  }

  getSalonServices(): void {
    this.apiGatewayService.getServices()
    .subscribe(response => {
      console.log("Result" + JSON.stringify(response));
      this.salonServices = { ... response };
    })
  }

}
