import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { PostIt } from '../models/post-it';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  boards: Board[];


  constructor(private http: HttpClient) { }

  onAddBoard(){

    let Id = this.boards.length + 1;
    const board = {id: Id, createdAt:new Date(), name: "Board #" + Id };
    const headers = { 'content-type': 'application/json'}  
    let param=JSON.stringify(board);

    this.http.post('/api/boards', param, {'headers': headers}).subscribe(ret => {
      if (ret){
          //this.getBoards();
          this.boards.push(board);
      } else console.log(ret);
    });   
  }
 
  ngOnInit() {
     this.getBoards();
  }
   
  getBoards() {
    this.http.get<Board[]>('/api/boards').subscribe(data => {
      this.boards = data;
    });
  }

}
