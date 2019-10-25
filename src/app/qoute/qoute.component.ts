import { Quotes } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {


  quotes: Quotes[] = [
    new Quotes("Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.", "Norman Vincent Peale", "ghjg", new Date(1980, 2, 14)),
    new Quotes(" Where there is a will, there is a way.If you can dream it you can do it.", "Walt Disney", "ggg", new Date(1990, 5, 16)),
    new Quotes("Press forward. Do not stop do not linger in your journey but strive for the mark set before you.", "George Whitefield", "pppp", new Date(1880, 7, 21)),
    new Quotes("The future belongs to those who believe in the beauty of their dreams ", "Eleanor Roosevelt", "oooo", new Date(1970, 9, 15)),
    new Quotes("Aim for the moon. If you miss, you may hit a star.”  ", "Clement Stone", "igdfufsdg", new Date(1854, 1, 29)),
    new Quotes("Don’t watch the clock; do what it does. Keep going.", "Sam Levenson", "uisgaifdg", new Date(1990, 6, 19))
  ];
  toggleDetails(index) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
