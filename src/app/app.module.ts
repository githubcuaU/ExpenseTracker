
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { ExpenseService } from './services/expense.service';


@NgModule
({
  declarations: 
  [
      AppComponent,
      EditExpenseComponent,
      CreateExpenseComponent,
  ],

  imports: 
  [
      BrowserModule,
      AppRoutingModule,
      FormsModule, 
      ReactiveFormsModule,
      HttpClientModule
  ],

  providers: 
  [
      provideClientHydration(),
      ExpenseService
  ],

  bootstrap: 
  [
      AppComponent
  ]
})

export class AppModule { }

