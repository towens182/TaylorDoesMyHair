import { Component, OnInit } from '@angular/core';
import { About } from '../../models/about';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About;
  dataSource: any;
  displayedColumns: string[] = ['Day', 'Hours'];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getAbout();
  }

  getAbout(): void {
    this.aboutService.getAbout()
      .subscribe(about => {
        this.about = about;
        this.dataSource = this.about.hours;
      });
  }
}
