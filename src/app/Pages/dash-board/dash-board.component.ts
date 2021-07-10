import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  fetchData:any;
  constructor() { }

  ngOnInit(): void {
    this.fetchData = [{"title":"hello","notes":"hello this is my first note"},
  {"title":"Note2","notes":"hello this is my second note"},
 ];
  }

  isExpanded: boolean=false;

  
}

