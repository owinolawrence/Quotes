import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { HighlightvoteDirective } from './highlightvote.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { from } from 'rxjs';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    HighlightvoteDirective,
    QuoteFormComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
