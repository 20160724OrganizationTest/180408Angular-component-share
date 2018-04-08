import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link-items',
  templateUrl: './link-items.component.html',
  styleUrls: ['./link-items.component.css']
})
export class LinkItemsComponent implements OnInit {

  // 親から　currentLinkIndex を取得する
  @Input() currentLinkIndex: number;
  // 親へ渡すように selectLinkIndex 関数を宣言
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
    },
    {
      id: 3,
      text: 'A03',
      current: false
    },
    {
      id: 4,
      text: 'A04',
      current: false
    }
  ];

  constructor() { }

  onclick(e: any, i: number) {
    if ( i === this.currentLinkIndex) {
      return false;
    }

    this.items[this.currentLinkIndex].current = false;
    this.items[i].current = true;
    // 親へ i 引数を渡す(selectLinkIndex)
    this.selectLinkIndex.emit(i);
  }

  ngOnInit() {
  }

}
