import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chaild01',
  templateUrl: './chaild01.component.html',
  styleUrls: ['./chaild01.component.css']
})
export class Chaild01Component implements OnInit {

  currentLinkIndex: number;
  contentFlag = [true, false];

  constructor() { }

  ngOnInit() {
    this.currentLinkIndex = 0;
  }

  onclick() {
    console.log('a');
  }

  // linkSelect(i: number) {

    // console.log(this.currentLinkIndex);
    // console.log(this.contentFlag);
  //   if ( i === this.currentLinkIndex) {
  //     return false;
  //   }
  //   this.contentFlag[this.currentLinkIndex] = false;
  //   this.contentFlag[i] = true;
  //   this.currentLinkIndex = i;
  // }
}
