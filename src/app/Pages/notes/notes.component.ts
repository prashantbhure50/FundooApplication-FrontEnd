import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
fetchData:any;
  constructor() { }

  @Input() noteObj: any;
  ngOnInit(): void {
  

   this.fetchData = [{"title":"hello","note":"hello this is my first note"},
  {"title":"Note2","note":"hello this is my second note"},
 ];
}

}
