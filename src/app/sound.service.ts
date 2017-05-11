import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Question } from './question';
import { Algs } from './algs';
import { Data } from './sound';


@Injectable()
export class SoundService {


    getQuestions(): Question[] {
        var listOfSounds: Question[] = [];
        var defaults = {"title": "Wybierz dźwięk który usłyszałeś."};

        for(var key in Data){
            Data[key].forEach( (sound) => listOfSounds.push(Question.fromJson(sound, defaults)) );
        }

        return Algs.shuffle(listOfSounds).slice(0, 2);
    }

    saveAnswers(): void {

    }
}

export const ExampleQuestion = Question.fromJson({
    "url": "assets/Cynizm_ewa.mp3",
    "title": "Wybierz dźwięk który usłyszałeś.",
    "answer": "",
    "left": "cynizm",
    "right": "cynizm"  
});