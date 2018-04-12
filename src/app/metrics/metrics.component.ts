import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

	@Output() next: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  checkbox = '-';
  page = 1;

  sex = [
  	{
  		name: "M",
  		symbol: 0
  	},{
  		name: "K",
  		symbol: 0
  	},{
  		name: "Inna",
  		symbol: 0
  	}
  ];
  education = [
  	{
  		name: "podstawowe",
  		symbol: 0
  	},{
  		name: "zawodowe",
  		symbol: 0
  	},{
  		name: "średnie (techniczne)",
  		symbol: 0
  	},{
  		name: "wyższe",
  		symbol: 0
  	},{
  		name: "w trakcie studiów",
  		symbol: 0
  	}
  ];

  livingplace = [
  	{
  		name: "wieś",
  		symbol: 0
  	},{
  		name: "miasto poniżej 10 tys. mieszkańców",
  		symbol: 0
  	},{
  		name: "miasto od 10 tys. do 100 tys. mieszkańców",
  		symbol: 0
  	},{
  		name: "miasto od 100 tys. do 500 tys. mieszkańców",
  		symbol: 0
  	},{
  		name: "miasto powyżej 500 tys. mieszkańców",
  		symbol: 0
  	}
  ];

  ears = [
  	{
  		name: "lewe",
  		symbol: 0  	
    },{
  		name: "prawe",
  		symbol: 0  	
    }
  ]

  age = [];

  select(table: string, index?: any){
	  if(table != 'age'){
	  	this[table].forEach( (c, i, a)=> a[i].symbol = 0 );
	  	this[table][index].symbol = 1;
	  } else {
	  	this.checkbox = index;
	  }

  }

  ngOnInit() {
  	for(let i = 5; i <= 100; i++) this.age.push(i);	
  }

	nextPage(){
		if(this.page == 2){
			if(this.ears.some(c=>c.symbol == 1)){
				this.next.next({
					sex: this.sex,
					age: this.checkbox,
					education: this.education,
					livingplace: this.livingplace,
					ears: this.ears
				});

			}
		} else if(this.sex.some(c=> c.symbol==1 ) 
			&& this.education.some(c=> c.symbol==1 ) 
			&& this.livingplace.some(c=> c.symbol==1 )
			&& this.checkbox != '-')
				this.page++;
	}
}
