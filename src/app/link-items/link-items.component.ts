import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-link-items',
  templateUrl: './link-items.component.html',
  styleUrls: ['./link-items.component.css']
})
export class LinkItemsComponent implements OnInit {

  @Input() currentLinkIndex: number;
  @Output() selectLinkIndex = new EventEmitter<number>();

  items = [
    {
      id: 1,
      text: 'A01',
      current: true
    },
    {
      id: 2,
      text: 'A02',
      current: false
    }
  ];

  constructor() { }

  onclick(e: any, i: number) {
    if ( i === this.currentLinkIndex) {
      return false;
    }
    this.selectLinkIndex.emit(i);
    this.items[this.currentLinkIndex].current = false;
    this.items[i].current = true;
    this.currentLinkIndex = i;
  }

  ngOnInit() {
  }

}
