import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operator';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-my-hhttp',
  templateUrl: './my-hhttp.component.html',
  styleUrls: ['./my-hhttp.component.css']
})
export class MyHhttpComponent implements OnInit {
  data = "";
  headers = "";
  constructor(private http : HttpClient, public myHttpService : MyHttpService) { }

  ngOnInit() {
    /*this.myHttpService.getYmls().subscribe(
      data => this.data = data;
    )*/
    this.myHttpService.getYmls()
      .subscribe(
        resp => {
          this.data = resp;
        }
      );
  }

}
