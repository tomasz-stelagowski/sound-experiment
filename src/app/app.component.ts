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
  3 - questionaire
  4 - head-set test
  5 - metrics
  */
  controller: number = 0;
  time: number = 1;
  resultsSaved: boolean = false;

  instructions;

  questions: Question[];
  answeredQuestions: Question[] = [];
  currentQuestion: Subject<Question> = new Subject<Question>();
  questionaire;
  metrics;

  questioncount;

  nextQuestion(){
  	this.currentQuestion.next(this.questions[0]);
    this.questioncount.answered++;	
  }

  ngOnInit(){
  	this.questions = this.soundService.getQuestions();
  	this.questioncount = {
      answered: 0,
      all: this.questions.length
    }
    this.timeline();
  }

  recieveQuestionaire(data: any){
    this.questionaire = data;
    this.progressTimeline();
  }
  recieveMetrics(data: any){
    this.metrics = data;
    this.progressTimeline();
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
        this.instructions = [
          `Nazywamy się Weronika Bojanowska i Tomasz Stelągowski, jesteśmy studentami Wydziału Psychologii na Uniwersytecie Warszawskim.`,
          `Prosimy o udział w badaniu dotyczącym percepcji bodźców dźwiękowych pod kierownictwem dr Doroty Karwowskiej.`,
          `Badanie trwa ok. 10-15 min i sa do niego potrzebne słuchawki.`, 
          `Badanie jest całkowicie anonimowe, a wyniki analizowane będą wyłącznie zbiorowo.`,
          `Jeżeli interesuje Cię zbiorowy raport z wyników to będzie on zamieszczony pod tym linkiem po zakończeniu badania: https://goo.gl/yezymc`,
          `Jeśli zgadzasz się wziąć udział w badaniu kliknij Dalej.`];
        break;
      case 2:
        //this.progressTimeline();
        //break;
      case 3:
        this.time = 3;
        this.controller = 0;
        this.instructions = [`Najpierw podłącz słuchawki a następnie przetestujemy ich dźwięk`];
        break;
      case 4:
        this.controller = 4;
        break;
      case 5:
  			this.controller = 0;
  			this.instructions = [`Teraz usłyszysz serię dźwięków. Prosimy abyś po każdym dźwięku wybrał ten który usłyszałeś.`];
  			break;
  		case 6:
  			this.controller = 1;
  			this.currentQuestion.next(ExampleQuestion);
  			break;
  		case 7:
  			this.controller = 0;
  			this.instructions = [`Dźwięk który właśnie usłyszałeś był testowy.`, 
        `Jeżeli jesteś gotów kliknij "Dalej" aby przejść do właściwego badania.`];
  			break;
  		case 8:
  			this.controller = 1;
  			this.nextQuestion();
  			break;
      case 9:
        this.controller = 0;
        this.instructions = [`Teraz prosimy abyś wypełnił kwestionariusz.`];
        break;
  		case 10:
        this.controller = 3
  			break;
      case 11:
        this.controller = 0;
        this.instructions = [`Następnie wypełnij kwestionariusz podstawowymi informacjami na swój temat.`];
  		  break;
      case 12:
        this.controller = 5;
        break;
      default:
  			this.controller = 2;
  			break;
  	}
  }

  questionAnswered(question: Question){
  	if(this.time == 6){
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

  exitExperiment(){
    this.time = 100;
    this.timeline();
  }

  saveResults(){
     this.soundService.saveAnswers({
       sounds: this.answeredQuestions, 
       questionaire: this.questionaire,
       metrics: this.metrics
     });
     //this.resultsSaved = true;
  }
}
