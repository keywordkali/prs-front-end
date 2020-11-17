import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User = new User();
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  login(): void{
    console.log(this.user);
    this.usersvc.login(this.user).subscribe(
      res => {
        console.debug("User Login:", res);
        this.router.navigateByUrl("/users/list");
      },
      err => { console.error("Error logging in user:" , err); }
    );
  }

  ngOnInit(): void {
  }

}
