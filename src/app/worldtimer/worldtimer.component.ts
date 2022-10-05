import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-worldtimer',
  templateUrl: './worldtimer.component.html',
  styleUrls: ['./worldtimer.component.css']
})
export class WorldtimerComponent implements OnInit {
  @Input() timeZone = 'Europe/Budapest'
  @Input() isCurrent = false;

  @Output() changeTimeZone = new EventEmitter<string>();

  time = '';

  constructor() {
  }

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime() {
    this.time= new Date().toLocaleString("en-US", {timeZone: this.timeZone});
  };

  changeTimeZoneClicked(){
    this.changeTimeZone.emit(this.timeZone);
  }

}

