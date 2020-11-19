import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})
export class RequestListComponent implements OnInit {
  tableStyle: string = 'table table-sm';
  requests: Request[] = [];
  searchCriteria: string = '';
  sortCriteria: string = 'status';
  ascSequence: boolean = false;

  sortColumn(column: string): void {
    if (column == this.sortCriteria) {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }
 

  constructor(private requestsvc: RequestService) {}

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
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
