import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor() { }

  @Input() resultsSaved;
  @Output() saveResults: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    this.emmitSave();
  }
  emmitSave(){
  	this.saveResults.next(true);
  }

}
