import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  test= [{
    id: 1,
    name:'surabhi',
    designation: 'ui lead'
  },
  {
    id: 2,
    name:'ninad',
    designation: 'ui manager'
  },
  {
    id: 3,
    name:'rameez',
    designation: 'ui head'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(){
    console.log('clicked');
  }

}
