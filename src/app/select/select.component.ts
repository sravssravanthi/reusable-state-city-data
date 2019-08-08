import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
 
  
  public input_value;
  @Input() lable_name;
  @Input() selectdata;
  @Output() outputdata=new EventEmitter();
  datafromselect(){
    this.outputdata.emit(this.input_value)
  }
  ngOnInit() {
  
  }
  // .subscribe(){

  // }
}
