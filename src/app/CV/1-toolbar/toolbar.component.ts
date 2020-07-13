import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  //
  //1.
  selected="English";
  today:number;
  //@Input() ifRefreash;

  //
  //2.
  constructor() { }

  ngOnInit(): void {
    this.today = Date.now();
  }

  //
  //3.
  /*
  swiftProgressBar(){
  if(this.ifRefreash){
    this.ifRefreash = false;
  }
  else{
    this.ifRefreash = true;
  }
  }*/

}
