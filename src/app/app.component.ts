import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTimeZone = 'Europe/Budapest';

  timezonesList = [
    'Europe/Budapest',
    'America/New_York',
    'Atlantic/Reykjavik',
    'Australia/Sydney',
    'Iceland',
    'Japan'
  ];

  displayedTimezones = [
    'Europe/Budapest',
    'America/New_York',
  ];

  updateSelectedTimeZone(timeZone: string) {
    this.selectedTimeZone = timeZone;
  }

  addNewTimezone(){
    this.displayedTimezones.push(this.timezonesList[this.displayedTimezones.length]);
  }
}
