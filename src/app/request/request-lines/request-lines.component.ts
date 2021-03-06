import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemService } from 'src/app/lineitem/lineitem.service';
import { LineItem } from '../../lineitem/lineitem.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css'],
})
export class RequestLinesComponent implements OnInit {
  request: Request;
  lineitems: LineItem[] = [];

  constructor(
    private requestsvc: RequestService,
    private lineitemsvc: LineItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(id: number): void {
    console.debug(`Deleting line id ${id}`);
    this.lineitemsvc.remove(id).subscribe(
      (res) => { this.refresh(); },
      (err) => {
        console.error('Error deleting request:', err);
      }
    );
  }
  setRequestToReview():void {
    this.requestsvc.setRequestToReview(this.request).subscribe(
      (res) => {
        console.debug(res);
        this.router.navigateByUrl("/requests/list");
      },
      (err) => {
        console.error(err);
      }
    )
  }

  refresh(): void {
    let id = +this.route.snapshot.params.id;
    this.requestsvc.getById(id).subscribe(
      (res) => {
        console.debug(res);
        this.request = res;
        // 2- get lines for request
        this.lineitemsvc.getLinesByRequestId(this.request.id).subscribe(
          (res) => {
            console.debug(res);
            this.lineitems = res;
          },
          (err) => {
            console.error(err);
          }
        );
        
      },
      (err) => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    // 1- get request from id passed in url
    console.log('NgOnInit was executed');
    this.refresh();
  }
}
