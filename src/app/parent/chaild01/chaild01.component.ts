import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chaild01',
  templateUrl: './chaild01.component.html',
  styleUrls: ['./chaild01.component.css']
})
export class Chaild01Component implements OnInit {

  currentLinkIndex: number;
  contentFlag = [true, false, false, false];

  constructor() { }

  ngOnInit() {
    this.currentLinkIndex = 0;
  }

  getCurrentIndex(i: number) {
    console.log(i);
    if ( i === this.currentLinkIndex) {
      return false;
    }
    this.contentFlag[this.currentLinkIndex] = false;
    this.contentFlag[i] = true;
    this.currentLinkIndex = i;
  }
}
