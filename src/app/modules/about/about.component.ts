import { Component, OnInit } from '@angular/core';
declare const $: any;
declare const alertMsg, alertMsg2;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.pug',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    alertMsg();
    alertMsg2();
  }

}
