import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request;

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void{
    console.log(this.request);
    this.requestsvc.remove(this.request).subscribe(
      res => {
        console.debug("Request Removed:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => { console.error("Error removing Request:" , err); }
    );
  }


  ngOnInit(): void {
    console.log("NgOnInit was executed")
    let id = +this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        console.debug(res);
        this.request = res;
      },
      err => { 
        console.error(err); 
      }
    );
  }

}
