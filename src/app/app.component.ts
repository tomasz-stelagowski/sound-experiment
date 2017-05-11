import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SoundService, ExampleQuestion } from './sound.service'
import { Question } from './question';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private soundService: SoundService) {}

  /*
	0 - instructions
	1 - questions
	2 - thanks
  */
  controller: number = 0;
  time: number = 1;

  instructions: string;

  questions: Question[];
  answeredQuestions: Question[] = [];
  currentQuestion: Subject<Question> = new Subject<Question>();


  nextQuestion(){
  	this.currentQuestion.next(this.questions[0]);	  	
  }

  ngOnInit(){
  	this.questions = this.soundService.getQuestions();
  	this.timeline();
  }

  ngAfterViewInit(){
  //	this.currentQuestion.next(ExampleQuestion);

  }

  progressTimeline(){
  	this.time++;
  	this.timeline();
  }
  timeline(){
  	switch (this.time) {
  		case 0:
  			// code...
  			break;
  		case 1:
  			this.controller = 0;
  			this.instructions = `Za chwilę usłyszysz serię dźwięków. Prosimy abyś po każdym dźwięku wybrał ten który usłyszałeś.`;
  			break;
  		case 2:
  			this.controller = 1;
  			this.currentQuestion.next(ExampleQuestion);
  			break;
  		case 3:
  			this.controller = 0;
  			this.instructions = `Dźwięk który właśnie usłyszałeś był testowy. Jeżeli jesteś gotów kliknij "Dalej" aby przejść do właściwego badania.`;
  			break;
  		case 4:
  			this.controller = 1;
  			this.nextQuestion();
  			break;
  		case 5:
  			//nie ma
  			this.progressTimeline();
  			break;
  		default:
  			this.controller = 2;
  			break;
  	}
  }

  questionAnswered(question: Question){
  	if(this.time == 2){
  		this.progressTimeline();
  	} else {
  		this.answeredQuestions.push(question);
  		this.questions.shift();
	  	if(this.questions.length == 0){
	  		//zapisz wyniki	
  			this.progressTimeline();
	  	} else {
			this.nextQuestion();
		}

  	}
 

  }
}


//timeline:
// Input nazwy - 0
// instrukcja - 1
// testowy - 2
// instrukcja - 3
// pytania - 4
// (test) - 5
// dziekowanie - 6 - default