import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Question } from './question';
import { Algs } from './algs';
import { Data } from './sound';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//var fs = window['require']('fs');


@Injectable()
export class SoundService {

    constructor(private http: Http){};

    private url: string = 'http://students.mimuw.edu.pl/\~ts340234/server/server.php';

    getQuestions(): Question[] {
        var listOfSounds: Question[] = [];
        var defaults = {"title": "Wybierz dźwięk który usłyszałeś."};

        for(var key in Data){
            Data[key].forEach( (sound) => listOfSounds.push(Question.fromJson(sound, defaults)) );
        }

        return Algs.shuffle(listOfSounds);//.slice(0, 1);
    }

    saveAnswers(questions: any): void {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        console.log(this.url);
        this.http.post(this.url, questions, options).subscribe( res =>{ console.log(res); });
    }
}

export const ExampleQuestion = Question.fromJson({
    "url": "assets/Cynizm_ewa.mp3",
    "title": "Wybierz dźwięk który usłyszałeś.",
    "answer": "",
    "left": "cynizm",
    "right": "cynizm"  
});