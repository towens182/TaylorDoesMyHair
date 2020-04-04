import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  links = [
    {
      display: 'Home',
      redirect: ''
    },
    {
      display: 'Services',
      redirect: 'services'
    },
    {
      display: 'Portfolio',
      redirect: 'portfolio'
    }
  ];
  activeLink = this.links[0];
}
