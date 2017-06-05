import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SoundQuestion } from './sound-question/sound-question.component';
import { SoundService } from './sound.service';
import { InputComponent } from './input/input.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ThanksComponent } from './thanks/thanks.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HeadsetTestComponent } from './headset-test/headset-test.component'

@NgModule({
  declarations: [
    AppComponent,
    SoundQuestion,
    InputComponent,
    InstructionsComponent,
    ThanksComponent,
    QuestionnaireComponent,
    HeadsetTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SoundService,
    { provide: 'Window', useValue: Window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
