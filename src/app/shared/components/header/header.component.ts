import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText:string = 'surabhi';
  showSearch:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  searchClicked(){
    alert("Searched =>" + this.searchText)
  }
}
