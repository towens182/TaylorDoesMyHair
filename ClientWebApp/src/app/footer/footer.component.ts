import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactInformation } from 'src/models/contactInformation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private contactInfoUri = "../assets/contact-info.json";
  contactInformation: ContactInformation;

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get(this.contactInfoUri).subscribe(
      data => {
        this.contactInformation = data as ContactInformation;
        console.log(this.contactInformation);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
