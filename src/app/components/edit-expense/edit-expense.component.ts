
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseModel } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';

@Component
({
    selector: 'app-edit-expense',
    templateUrl: './edit-expense.component.html',
    styleUrl: './edit-expense.component.css'
})

export class EditExpenseComponent implements OnInit
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

    constructor 
    (
        private expenseService: ExpenseService,
        private route: ActivatedRoute
    ) {}

    ngOnInit()
    {     
        this.getOneExpense(this.route.snapshot.params["id"]);
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

    getOneExpense(id: string)
    {
        this.expenseService.getOneExpense(id).subscribe
        ({
            next: (data) => 
            {
                this.expense = data;
                console.log(data);
            },
            error: (error) => console.error(error)
        });
    }

    updateExpense() 
    {
        this.expenseService.updateExpense(this.expense._id, this.expense).subscribe
        ({
            next: (res) =>
            {
                console.log('Expense was successfully updated!', res);
                this.loadExpenses(); // view updated expense list
            },
            error: (error) => console.error('Failed to update expense!', error)
        });
    }

    deleteExpense()
    {
        this.expenseService.deleteExpense(this.expense._id).subscribe
        ({
            next: (res) =>
            {
                console.log('Expense was successfully deleted!', res);
                this.loadExpenses(); // view updated expense list
            },
            error: (error) => console.error("Failed to delete expense!", error)
          });
    }
}
