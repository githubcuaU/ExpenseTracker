
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseModel } from '../models/expense.model';

const apiUrl = 'http://localhost:3000/expenses';

@Injectable
({
    providedIn: 'root'
})

export class ExpenseService 
{
    constructor(private http: HttpClient) { }

    getAllExpenses(): Observable<ExpenseModel[]> 
    {
        return this.http.get<ExpenseModel[]>(apiUrl);
    }

    getOneExpense(id: string): Observable<ExpenseModel> 
    {
        return this.http.get<ExpenseModel>(`${apiUrl}/${id}`);
        // return this.http.get(`${apiUrl}/${id}`);
    }

    createExpense(data: any): Observable<any> 
    {
        return this.http.post(apiUrl, data);
    }

    updateExpense(id: string, data: any): Observable<any> 
    {
        return this.http.put(`${apiUrl}/${id}`, data);
    }

    deleteExpense(id: string): Observable<any> 
    {
        return this.http.delete(`${apiUrl}/${id}`);
    }
}