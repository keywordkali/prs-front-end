import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  tableStyle: string = 'table table-sm';
  products: Product[] = [];
  searchCriteria: string = '';
  sortCriteria: string = 'name';
  ascSequence: boolean = false;
  loggedInUser: User = null;

  sortColumn(column: string): void {
    if (column == this.sortCriteria) {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

  constructor(
    private productsvc: ProductService,
    private syssvc: SystemService
    ) {}

  ngOnInit(): void {
    this.loggedInUser= this.syssvc.loggedInUser;
    this.productsvc.list().subscribe(
      (res) => {
        console.log(res);
        this.products = res as Product[];
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
