import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
request:Request = new Request();
users:User[] = [];

constructor(
  private requestsvc: RequestService,
  private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router 
) { }

compareFn(a: any, b: any): boolean{
  return a.id === b.id;
}

save(): void{
  console.log(this.request);
  this.requestsvc.change(this.request).subscribe(
    res => {
      console.debug("Request Edit Save:", res);
      this.router.navigateByUrl("/requests/list");
    },
    err => { console.error("Error changing request:" , err); }
  );
}

  ngOnInit(): void {
    
    this.usersvc.list().subscribe(
      (res) => {
        console.debug(' List of users:', res);
        this.users= (res) as User[];
      },
      (err) => {
        console.error('Error changing user:', err);
        
      }
    );
    
    let id = +this.route.snapshot.params.id;
    this.requestsvc.getById(id).subscribe(
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
