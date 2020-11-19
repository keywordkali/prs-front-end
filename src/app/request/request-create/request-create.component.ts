import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
request:Request = new Request ();
users: User[] = [];
  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router 
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
    this.usersvc.list().subscribe(
      (res) => {
        console.debug(' Created:', res);
        this.users = res as User [];
      },
      (err) => {
        console.error('Error changing user:', err);
      }
    );
  }

}
