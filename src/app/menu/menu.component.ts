import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Login","/users/login"),
    new Menu("Home", "/home"),
    new Menu("About", "/about"),
    new Menu("Help","/help"),
    new Menu("Users","/users/list"),
    new Menu("Products", "/products/list"),
    new Menu("Requests", "/requests/list"),
    new Menu("Vendors", "/vendors/list"),
    new Menu("Lineitems", "/lineitems/list")
   
    

  ];

  constructor() { }

  ngOnInit(): void {
  }

}