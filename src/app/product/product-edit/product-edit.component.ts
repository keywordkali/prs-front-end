import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[] = [];
  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  compareFn(a: any, b: any): boolean{
    return a.id === b.id;
  }

  save(): void {
    console.log(this.product);
    this.productsvc.change(this.product).subscribe(
      (res) => {
        console.debug('Product Edit Save:', res);
        this.router.navigateByUrl('/products/list');
      },
      (err) => {
        console.error('Error changing product:', err);
      }
    );
  }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      (res) => {
        console.debug(' List of vendors:', res);
        this.vendors= (res) as Vendor[];
      },
      (err) => {
        console.error('Error changing vendor:', err);
        
      }
    );
    let id = +this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      (res) => {
        console.debug(res);
        this.product = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
