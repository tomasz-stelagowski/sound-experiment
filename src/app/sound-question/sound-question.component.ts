import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Algs } from '../algs';
import { Question } from '../question';
import { Answers } from '../Answers';


@Component({
  selector: 'sound-question',
  templateUrl: './sound-question.component.html',
  styleUrls: ['./sound-question.component.css']
})
export class SoundQuestion {

  @Input('question') _question: Observable<Question> = new Observable<Question>();
  @Input() questioncount: Object;
  @Output('answer') _answer: EventEmitter<Question> = new EventEmitter<Question>();

  answers: string[] = Answers;

  showAnswers: boolean = false;
  showQuestion: boolean = false;

  counter: number = 3;
  title: string;
  audio;
  question;

  countToPlay(count){
     if(this.counter == 0) {
       clearInterval(count);
       console.log(this.audio.src);
       this.audio.play();
     } 
     else this.counter--;
  }

  nextQuestion(question: Question){
    this.showQuestion = false;

    setTimeout( ()=> {
      this.question = question;
      this.title = this.question.title;
      this.showQuestion = true;
      this.showAnswers = false;
      this.counter = 3;

      setTimeout( ()=>{

        let count = setInterval( ()=>this.countToPlay(count), 700 );

        this.audio = new Audio();
        this.audio.src = this.question.url;
        
        this.audio.load();

        Algs.shuffle(this.answers);

        this.audio.onended =( ()=>{this.showAnswers = true} );
      }, 500);
    }, 500);
  }

  answerQuestion(answer: string){
    let question = this.question.copy({answer: answer.toLowerCase() });
    this._answer.next(question);
  }

  ngOnInit(){
    this._question.subscribe( (question: Question) => this.nextQuestion(question));
  }
}
