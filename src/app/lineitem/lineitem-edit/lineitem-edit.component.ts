import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { SystemService } from '../../system.service';
import { LineItem } from '../lineitem.class';
import { LineItemService } from '../lineitem.service';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request.class';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lineitem-edit',
  templateUrl: './lineitem-edit.component.html',
  styleUrls: ['./lineitem-edit.component.css']
})
export class LineitemEditComponent implements OnInit {
  products: Product[] = [];
  lineitem: LineItem = new LineItem();
  request: Request;
  id: number = 0; 
  constructor(
   private productsvc: ProductService,
   private requestsvc: RequestService,
   private lineitemsvc: LineItemService,
   private syssvc: SystemService,
   private route: ActivatedRoute,
    private router: Router
  ) { }
  compareFn(a: any, b: any): boolean{
    return a.id === b.id;
  }

  save(): void{
    console.log(this.lineitem);
    this.lineitemsvc.change(this.lineitem).subscribe(
      res => {
        console.debug("Lineitem Create:", res);
        this.router.navigateByUrl(`/requests/lines/${this.lineitem.request.id}`);
      },
      err => { console.error("Error creating request:" , err); }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.lineitemsvc.get(id).subscribe(
      (res) => {
        console.log(res);
        this.lineitem = res as LineItem;
      },
      (err) => {
        console.error(err);
      }
    )
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
