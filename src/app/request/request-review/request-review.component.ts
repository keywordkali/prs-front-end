import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css'],
})
export class RequestReviewComponent implements OnInit {
  requests: Request[] = [];
  user: User;
  
  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // approveRequest(): void{
  //   console.log(this.request);
  //   this.requestsvc.change(this.request).subscribe(
  //     res => {
  //       console.debug("Request approved:", res);
  //       this.router.navigateByUrl("/requests/review");
  //     },
  //     err => { console.error("Error approving request:" , err); }
  //   );
  // }
  // rejectRequest(): void{
  //   console.log(this.request);
  //   this.requestsvc.change(this.request).subscribe(
  //     res => {
  //       console.debug("Request reject saved:", res);
  //       this.router.navigateByUrl("/requests/review");
  //     },
  //     err => { console.error("Error rejecting request:" , err); }
  //   );
  // }

  ngOnInit(): void {
    // you need the get all requests by review function
    let id: number = this.syssvc.loggedInUser.id;
    this.requestsvc.loggedInUser(id).subscribe(
      (res) => {
        console.log(res);
        this.requests = res as Request[];
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
