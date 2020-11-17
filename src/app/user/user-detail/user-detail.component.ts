import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   
  user:User;
  
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { }

  detail(): void{
    console.log(this.user);
    this.usersvc.get(this.user).subscribe(
      res => {
        console.debug("User Detail:", res);
        this.router.navigateByUrl("/users/detail");
      },
      err => { console.error("Error:" , err); }
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
