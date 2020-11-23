import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { SystemService } from '../../system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from '../../lineitem/lineitem.class';
import { LineItemService } from '../../lineitem/lineitem.service';
import { isNgContainer } from '@angular/compiler';


@Component({
  selector: 'app-request-review-line',
  templateUrl: './request-review-line.component.html',
  styleUrls: ['./request-review-line.component.css']
})
export class RequestReviewLineComponent implements OnInit {
request: Request
lineitems:  LineItem[] = [];
showRejectionReason: boolean = false;
  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private lineitemsvc: LineItemService,
    private router: Router
  ) { }

flipRejectionReason(): void{
this.showRejectionReason = !this.showRejectionReason;
}


  approveRequest(): void{
    console.log(this.request);
    this.requestsvc.approveRequest(this.request).subscribe(
      res => {
        console.debug("Request approved:", res);
        this.refresh();
      },
      err => { console.error("Error approving request:" , err); }
    );
  }
  rejectRequest(): void{
    console.log(this.request);
    this.requestsvc.rejectRequest(this.request).subscribe(
      res => {
        console.debug("Request reject saved:", res);
        this.refresh();
      },
      err => { console.error("Error rejecting request:" , err); }
    );
  }


  refresh(): void {
    let id: number = this.route.snapshot.params.id;
    this.requestsvc.getById(id).subscribe(
      (res) => {
        console.log(res);
        this.request = res as Request;
        this.lineitemsvc.getLinesByRequestId(this.request.id).subscribe(
          res => {console.log(res); this.lineitems = res;},
          err => {console.log(err);}
        );
         
      },
      (err) => {
        console.error(err);
      }
    );
  }
    
    ngOnInit(): void {
      this.refresh();
    }


  }


