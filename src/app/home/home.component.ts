import { Component, OnInit } from '@angular/core';
import product from "../../assets/product.json";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[];
  cartProductList:any=[];
  constructor() { }
   addProductToCart(name) {
   console.log("product adde successfully",name);
 }
  ngOnInit() {
    this.products=product;
  }

}