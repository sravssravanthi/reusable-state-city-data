import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public http: HttpClient) { }
  title = 'regtask';
  object = {
    name: null,
    phone: null,
    email: null,
    city: null,
    state: null
  }
  private datas;
  private datas1 = [];


  objectdata = {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    state: 'state',
    city: 'city'
  }
  nameoutput(datas) {
    this.object.name = datas;
  }
  emailoutput(datas) {
    this.object.email = datas;
  }
  phoneoutput(datas) {
    this.object.phone = datas;
  }
  stateoutput(datas) {
    this.object.state = datas;
  }
  cityoutput(datas) {
    this.object.city = datas;
  }
  ab() {
    console.log(this.object);
  }
  //state start
  getstate() {
    this.http.get('/assets/state.json')
      .subscribe(
        (success) => {
          console.log(success)
          this.datas = success;
          
        },
        (error) => {

        }
      );
  }
  //end
  // city start
  getcity(id) {
    this.datas1=[];
    this.http.get('/assets/city.json')
      .subscribe(
        (success: any) => {
          // console.log(success)
          // this.datas1 = success;
          success.forEach(city => {
            // console.log(city);

// tslint:disable-next-line: triple-equals
            if (city.stateId == id) {
this.datas1.push(city);
            }
          });
        },
        (error) => {

        }
      );
  }
  getStateCities(){
    
    this.getcity(this.object.state);
  }
  //ennd
  ngOnInit() {
   
    this.getstate();
  }
}
