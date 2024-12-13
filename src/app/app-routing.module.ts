
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';

const routes: Routes = 
[
    { path: '', component: CreateExpenseComponent }, // default page
    { path: '/create-expense', component: CreateExpenseComponent },
    { path: '/:id', component: EditExpenseComponent },
];

@NgModule
({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
