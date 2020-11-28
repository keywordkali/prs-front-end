import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from '../../system.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  get isAdm(): boolean{
    return this.syssvc.loggedInUser.admin;
  } 
  user:User;
  
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
    
  ) { }

  remove(): void{
    console.log(this.user);
    this.usersvc.remove(this.user).subscribe(
      res => {
        console.debug("User Removed:", res);
        this.router.navigateByUrl("/users/list");
      },
      err => { console.error("Error removing user:" , err); }
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
