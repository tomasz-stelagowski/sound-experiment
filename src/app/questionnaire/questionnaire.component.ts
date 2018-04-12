import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

	@Output() next: EventEmitter<Object> = new EventEmitter<Object>();

	controller: number;
  	firstQuestionaire: wordSymbol[] = [];
  	secondQuestionaire: wordSymbol[] = [];
  	thirdQuestionaire: wordSymbol[] = [];
  	textarea: string;

  	firstHelper = {x: 0, o: 0};
  	secondHelper = {x: 0, o: 0};
  	thirdHelper = {x: 0, o: 0};

  	constructor() { }

	ngOnInit() {
  		words.forEach( (word: string) => {
  			this.firstQuestionaire.push((new wordSymbol(word)));
  			this.secondQuestionaire.push((new wordSymbol(word)));
  			this.thirdQuestionaire.push((new wordSymbol(word)));
  		});
  		this.controller = 0;
  	}
  	checkIfAllChecked(){
  		if(this.controller==1){
  			if(this.firstHelper.o == 10) return true;
  			else return false;
  		} else if (this.controller==4){
  			if(this.secondHelper.o == 10) return true;
  			else return false;
  		} else if (this.controller==6){
  			if(this.thirdHelper.o == 10) return true;
  			else return false;
  		} else return true;
  	}
  	nextPage(){
  		//debugger;
	  	if(this.checkIfAllChecked()){
	  		if(this.controller == 6){
	  			this.next.next({
	  				firstQuestionaire: this.firstQuestionaire,
	  				secondQuestionaire: this.secondQuestionaire,
	  				thirdQuestionaire: this.thirdQuestionaire,
	  				textarea: this.textarea
	  			});
	  		}
		  	else{
		  		this.controller++;
		  	}
		}
  	}

  	toggleWord(rep: number, index: number){
  		var map = {
  			"1": "firstQuestionaire",
  			"2": "secondQuestionaire",
  			"3": "thirdQuestionaire",
  		}
  		this[ map[rep] ][index].progress();

  		this.updateHelpers();

  	}

  	updateHelpers(){
  		this.firstHelper = {x: 0, o: 0};
  		this.secondHelper = {x: 0, o: 0};
  		this.thirdHelper = {x: 0, o: 0};
  		this.firstQuestionaire.forEach( el=>{
  			if(el.symbol >= 1) this.firstHelper.x++;
  			if(el.symbol >= 2) this.firstHelper.o++;
  		})
  		this.secondQuestionaire.forEach( el=>{
  			if(el.symbol >= 1) this.secondHelper.x++;
  			if(el.symbol >= 2) this.secondHelper.o++;
  		})
  		this.thirdQuestionaire.forEach( el=>{
  			if(el.symbol >= 1) this.thirdHelper.x++;
  			if(el.symbol >= 2) this.thirdHelper.o++;
  		})
  	}
}


class wordSymbol{
	symbol: number = 0;
	name: string

	constructor(name: string){
		this.name = name;
		this.symbol = 0;
	}
	progress(){
		this.symbol = (this.symbol+1)%3;
	}
}

var words = [
	"wszechstronność",
	"taktowność",
	"optymizm",
	"bezinteresowność",
	"bezpośredniość",
	"uczciwość",
	"odwaga",
	"ofiarność",
	"moralność",
	"szczerość",
	"prawdomówność",
	"odpowiedzialność",
	"samodzielność",
	"nowoczesność",
	"aktywność",
	"delikatność",
	"wrażliwość",
	"otwartość",
	"staranność",
	"naturalność",
	"dojrzałość",
	"wierność",
	"punktualność",
	"stanowczość",
	"refleksyjność",
	"energiczność",
	"twórczość",
	"atrakcyjność",
	"pracowitość",
	"spostrzegawczość",
	"towarzyskość",
	"ambicja",
	"niezależność",
	"stałość",
	"uprzejmość",
	"sumienność",
	"słowność",
	"wyrozumiałość",
	"zwinność",
	"zrównoważenie",
	"śmiałość",
	"czułość",
	"partnerstwo",
	"cierpliwość",
	"lojalność",
	"odporność psychiczna",
	"dobroć",
	"uroda",
	"obowiązkowość",
	"krytyczność",
	"rozmowność",
	"ufność",
	"spontaniczność",
	"uczynność",
	"poczucie humoru",
	"pewność siebie",
	"religijność",
	"barwność",
	"rozsądek",
	"zaradność",
	"wnikliwość",
	"emocjonalność",
	"wytrwałość",
	"tolerancyjność",
	"skromność",
	"elegancja",
	"inteligencja",
	"łagodność",
	"praktyczność",
	"oryginalność"
];