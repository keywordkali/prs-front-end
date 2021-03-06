import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { SystemService } from 'src/app/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:Product;
vendors:Vendor;
get isAdm(): boolean{
  return this.syssvc.loggedInUser.admin;
}
  constructor(
    private syssvc: SystemService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  remove(): void{
    console.log(this.product);
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.debug("Product Removed:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => { console.error("Error removing Product:" , err); }
    );
  }


  ngOnInit(): void {
    console.log("NgOnInit was executed")
    let id = +this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        console.debug(res);
        this.product = res;
      },
      err => { 
        console.error(err); 
      }
    );
  }

}
