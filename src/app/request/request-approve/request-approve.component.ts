import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from '../../lineitem/lineitem.class';
import { LineItemService } from '../../lineitem/lineitem.service';
import { SystemService } from '../../system.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  lines:LineItem [] = [];
  lineitem:LineItem = new LineItem();

  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private lineitemsvc: LineItemService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit(): void {
    
  }

}
