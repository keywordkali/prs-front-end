import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
user:User;
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  save(): void{
    console.log(this.user);
    this.usersvc.create(this.user).subscribe(
      res => {
        console.debug("User Create:", res);
        this.router.navigateByUrl("/users/list");
      },
      err => { console.error("Error changing user:" , err); }
    );
  }

  ngOnInit(): void {
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
