import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor( 
    private productService: ProductService,
    private roouter: Router ) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Produto criado!')
      this.roouter.navigate(['/products'])
    })

  }
  cancel(): void {
    this.roouter.navigate(['/products'])
  }
}