import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = 2021
  currentYear: number = new Date().getFullYear();
  twoYears: string = `${this.year} - ${this.currentYear}`

  constructor() {
  }


  ngOnInit(): void {
  }
}
