import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headset-test',
  templateUrl: './headset-test.component.html',
  styleUrls: ['./headset-test.component.css']
})
export class HeadsetTestComponent implements OnInit {

  @Output('next') _next: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('brokenHeadset') _brokenHeadset: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  controller = 0;
  instructions = [`Prawdopodobnie masz założone słuchawki na odwrót. Załóż je tak aby każda ze słuchawek przylegała teraz do innego ucha.`];
  title = "Wybierz w którym uchu usłyszałeś dźwięk";
  noSoundMsg = ["Wygląda na to że twoje słuchawki nie działają poprawnie. Niestety udział w badaniu jest niemożliwy :("];
  ear: string;

  audioLeft;
  audioRight;

  ngOnInit() {
    this.audioLeft = new Audio();
    this.audioLeft.src = "assets/Tone_left.mp3";
    this.audioLeft.load();

    this.audioRight = new Audio();
    this.audioRight.src = "assets/Tone_right.mp3";
    this.audioRight.load();


    this.playTest("left");
  }

  playTest(ear: string){
    if(ear == "left"){
      this.ear = ear;
      this.audioLeft.play();
    } else {
      this.ear = ear;
      this.audioRight.play();
    } 
  }
  afterInstructions(){
    this.controller = 0;

    this.ear = "left";
    this.audioLeft.play();
  }
  answerQuestion(ear: string){
    this.audiotStop(this.audioLeft);
    this.audiotStop(this.audioRight);
   
    if(ear != this.ear) {  
      this.controller = 1;
    } else if(ear == "left"){
      this.controller = 2;
      setTimeout( () => {
        this.controller = 0;
        this.ear = "right";
        this.audioRight.play();
      }, 1000);
    } else {
      this.controller = 2;
      setTimeout( () => {
        this.controller = 0;
        this.next();
      }, 1000);
    }
  }

  noSound(){
    this.controller = 3;
  }
  noSoundReact(){
    this._brokenHeadset.next(true);
  }

  next(){
  	this._next.next(true);
  }

  audiotStop(aud: any){
    aud.pause();
    aud.currentTime = 0;
  }
}
