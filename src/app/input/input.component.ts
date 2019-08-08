import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
public input_value;
  constructor() { }
@Input() lable_name;
@Output() outputdata=new EventEmitter();
datafrominput(){
  // console.log('input component',this.pushs);
  this.outputdata.emit(this.input_value)
}
  ngOnInit() {
  }
}
