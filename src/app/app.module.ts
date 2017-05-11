import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SoundQuestion } from './sound-question/sound-question.component';
import { SoundService } from './sound.service';
import { InputComponent } from './input/input.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ThanksComponent } from './thanks/thanks.component'

@NgModule({
  declarations: [
    AppComponent,
    SoundQuestion,
    InputComponent,
    InstructionsComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
