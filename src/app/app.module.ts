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
import { HeadsetTestComponent } from './headset-test/headset-test.component';
import { MetricsComponent } from './metrics/metrics.component';
import { Select } from './select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    SoundQuestion,
    InputComponent,
    InstructionsComponent,
    ThanksComponent,
    QuestionnaireComponent,
    HeadsetTestComponent,
    MetricsComponent
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
