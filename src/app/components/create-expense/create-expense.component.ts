
import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';

@Component
({
    selector: 'app-create-expense',
    templateUrl: './create-expense.component.html',
    styleUrl: './create-expense.component.css'
})

export class CreateExpenseComponent implements OnInit 
{
    expense: ExpenseModel = 
    {
        _id: '',
        expenseCategory: '',
        expenseDescription: '',
        expenseAmount: 0,
        expenseDate: '',
    };

    expenses?: ExpenseModel[];
    // expenses: ExpenseModel[ ] = [ ]; 

    submit = false;

    constructor (private expenseService: ExpenseService) {}

    ngOnInit()
    {     
        this.loadExpenses();
    }

    // View updated expense list
    loadExpenses ()
    {
        this.submit = false;

        this.expenseService.getAllExpenses().subscribe
        ({
            next: (data) => 
            {
                this.expenses = data;
                console.log(data);
            },
            error: (error) => console.error('Failed to retrieve expenses!', error)
        });
    }

    createExpense()
    {
        const data = 
        {
            expenseCategory: this.expense.expenseCategory,
            expenseDescription: this.expense.expenseDescription,
            expenseAmount: this.expense.expenseAmount,
            expenseDate: this.expense.expenseDate,
        };
    
        this.expenseService.createExpense(data).subscribe
        ({
            next: (res) => 
            {
                console.log('Expense was successfully created!', res);
                this.submit = true;
                this.loadExpenses(); // view updated expense list
            },
            error: (error) => console.error('Failed to create expense!', error)
        });
    }

}