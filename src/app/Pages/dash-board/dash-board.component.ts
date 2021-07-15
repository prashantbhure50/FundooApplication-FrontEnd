import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  fetchData:any;
  isExpanded: boolean=false; 
  constructor(private http:HttpClient) { }
  get f() { return this.myForm.controls; }
  myForm = new FormGroup({
    title:new FormControl(),
    body:new FormControl(),
  })
  close(){
    let data = {
      "title": this.f.title.value,
      "body":this.f.body.value
    }
    this.http
    .post("http://localhost:3000/notes",data)
    .subscribe(res=>{
      console.log(res);
      this.fetchData = res;
      this.getAllNotes();
    }) 
  }
  
  ngOnInit(): void {
   
 this.getAllNotes();
 
 
  }
  getAllNotes(){
    this.http
        .get("http://localhost:40723/api/Notes/GetAllNotes")
        .subscribe(res=>{
          console.log(res);
          this.fetchData = res;
          this.fetchData.reverse();
        })  
  }
  

 
}