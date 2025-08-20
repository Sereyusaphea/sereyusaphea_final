import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {HttpClientModule} from '@angular/common/http';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HttpClientModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
