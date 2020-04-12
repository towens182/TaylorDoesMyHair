import { Component, OnInit } from '@angular/core';
import { About } from '../../models/about';
import { HttpClient } from '@angular/common/http';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private contactInfoUri = "../assets/contact-info.json";

  about: About;
  contactInformation: any;
  dataSource: any;

  constructor(private httpService: HttpClient, private aboutService: AboutService) { }

  ngOnInit() {
    this.getContact();
    this.getAbout();
  }

  getAbout(): void {
    this.aboutService.getAbout()
      .subscribe(response => {
        this.about = { ... response.body };
        this.dataSource = this.about.hours;
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
