import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user:User;
  loggedInUser: User = null;

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  save(): void{
    console.log(this.user);
    this.usersvc.change(this.user).subscribe(
      res => {
        console.debug("User Change:", res);
        this.router.navigateByUrl("/users/list");
      },
      err => { console.error("Error changing user:" , err); }
    );
  }

  ngOnInit(): void {
    this.loggedInUser= this.syssvc.loggedInUser;
    let id = +this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        console.debug(res);
        this.user = res;
      },
      err => { 
        console.error(err); 
      }
    );
  }

}

