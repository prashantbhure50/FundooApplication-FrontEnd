import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
fetchData:any;
isExpanded: boolean=false; 
  constructor(private http:HttpClient) { }

  get f() { return this.myForm.controls; }
  myForm = new FormGroup({
    title:new FormControl(),
    note:new FormControl(),
  })
  archive(){
    let data = {
      "title": this.f.title.value,
      "note":this.f.note.value
    }
    this.fetchData.pop(data);
  }

  @Input() noteObj: any;
  ngOnInit(): void {
    // this.deletenotes();
}

// deletenotes(){
//   this.http
//       .delete("http://localhost:3000/notes")
//       .subscribe(res=>{
//         console.log(res);
//         this.fetchData = res;
//       }) 
// }

}