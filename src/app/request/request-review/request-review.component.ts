import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css'],
})
export class RequestReviewComponent implements OnInit {
  requests: Request[] = [];

  
  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

 


  ngOnInit(): void {
    // you need the get all requests by review function
    let id: number = this.syssvc.loggedInUser.id;
    this.requestsvc.getRequestsForReview(id).subscribe(
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
