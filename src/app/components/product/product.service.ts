import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showOnConsole(arg0: string) {
    throw new Error('Method not implemented.');
  }
  

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',  {
      duration: 1500,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}
