import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  buttomIcon = 'keyboard_arrow_right';
  selectedTab = 0;
  index = 0;

  constructor() {
  }

  ngOnInit() {
  }


  selectTab($event) {
    $event.preventDefault();
    this.selectedTab = this.selectedTab === 0 ? 1 : 0;
    this.buttomIcon = this.buttomIcon === 'keyboard_arrow_right' ? 'keyboard_arrow_left' : 'keyboard_arrow_right';
  }

  getIndex(index) {
    this.index = index;
  }


}
