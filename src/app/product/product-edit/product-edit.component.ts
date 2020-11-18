import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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
    this.productsvc.change(this.product).subscribe(
      res => {
        console.debug("Product Edit Save:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error changing product:" , err); }
    );
  }

  ngOnInit(): void {
this.vendorsvc.list().subscribe(
  res => {
    console.debug(" Edited:", res);
    this.router.navigateByUrl("/products/list");
  },
  err => { console.error("Error changing vendor:" , err); }
);


  }

}

