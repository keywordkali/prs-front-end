import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { SystemService } from '../../system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
request:Request = new Request ()
product: Product[] = [];
rId: number = 0;
  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }

  save(): void{
    console.log(this.request);
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("Request Create:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => { console.error("Error creating request:" , err); }
    );
  }

  ngOnInit(): void {
    this.request.user = this.syssvc.loggedInUser
    
  }

}
