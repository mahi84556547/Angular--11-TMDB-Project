import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  constructor() { }

  ngOnInit(): void {
  }

//navbar scroll
@HostListener("window:scroll")
scrollEvent() {
    window.pageYOffset >= 350 ? (this.isScrolled = true) : (this.isScrolled = false);
}//scroll end


}
