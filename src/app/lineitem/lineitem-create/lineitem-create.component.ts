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
  selector: 'app-lineitem-create',
  templateUrl: './lineitem-create.component.html',
  styleUrls: ['./lineitem-create.component.css']
})
export class LineitemCreateComponent implements OnInit {
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

  save(): void{
    console.log(this.lineitem);
    this.lineitemsvc.create(this.lineitem).subscribe(
      res => {
        console.debug("Lineitem Create:", res);
        this.router.navigateByUrl(`/requests/lines/${this.lineitem.request.id}`);
      },
      err => { console.error("Error creating request:" , err); }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.rId
    this.requestsvc.getById(id).subscribe(
      (res) => {
        console.log(res);
        this.lineitem.request = res as Request;
      },
      (err) => {
        console.error(err);
      }
    );
    
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
