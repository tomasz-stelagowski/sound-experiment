import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

	@Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();

	controller: number;
  	firstQuestionaire: wordSymbol[] = [];
  	secondQuestionaire: wordSymbol[] = [];
  	thirdQuestionaire: wordSymbol[] = [];



  	constructor() { }

	ngOnInit() {
  		words.forEach( (word: string) => {
  			this.firstQuestionaire.push((new wordSymbol(word)));
  			this.secondQuestionaire.push((new wordSymbol(word)));
  			this.thirdQuestionaire.push((new wordSymbol(word)));
  		});
  		this.controller = 0;
  	}
  	nextPage(){
  		this.controller++;
  		if(this.controller > 5){
  			this.next.next(true);
  		}
  	}

  	toggleWord(rep: number, index: number){
  		var map = {
  			"1": "firstQuestionaire",
  			"2": "secondQuestionaire",
  			"3": "thirdQuestionaire",
  		}
  		this[ map[rep] ][index].progress();


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