import { basicHighlighterDirective } from './basic-Highlighter/basic-Highlighter.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BestpracticeHighlightDirective } from './bestpractice-highlighter/bestpractice-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlighterDirective,
    BestpracticeHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
