import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
product:Product = new Product();
vendors:Vendor [] = [];
  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    console.log(this.product);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.debug("Product Create:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error changing product:" , err); }
    );
  }

  ngOnInit(): void {
this.vendorsvc.list().subscribe(
  res => {
    console.debug(" Created:", res);
    this.router.navigateByUrl("/products/list");
  },
  err => { console.error("Error changing vendor:" , err); }
);


  }

}
