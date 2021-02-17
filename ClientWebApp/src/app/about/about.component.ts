import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiGatewayService } from '../apiGateway.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private contactInfoUri = "../assets/contact-info.json";

  hours: any;
  contactInformation: any;
  dataSource: any;

  constructor(private httpService: HttpClient, private apiGatewayService: ApiGatewayService) { }

  ngOnInit() {
    this.getContact();
    this.getHours();
  }

  getHours(): void {
    this.apiGatewayService.getHours()
      .subscribe(response => {
        this.hours = { ...response };
        this.dataSource = this.hours.hours;
      });
  }

  // Update me
  getContact(): void {
    this.httpService.get(this.contactInfoUri)
      .subscribe((data: any) => {
        this.contactInformation = data;
      });
  }
}
