import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  
  @Input('instructions') instruction: string;
  @Input('button') button: boolean = true;
  @Output('next') _next = new EventEmitter<boolean>();

  constructor() { }

  next(){
  	this._next.next(true);
  }

  ngOnInit() {
  }

}
