import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  message = '';
  username = '';
  password = '';
  user: User = null;

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login(): void {
    console.log('in login method..');
    this.usersvc.login(this.username, this.password).subscribe(
      (res) => {
        console.debug('User Login:', res);
        this.user = res as User;
        this.syssvc.loggedInUser = this.user;
        this.router.navigateByUrl('/users/list');
      },
      (err) => {
        console.error('Error logging in user:', err);
        this.message = 'invalid login';
      }
    );
  }

  ngOnInit(): void {
    this.username = 'Kcorrell';
    this.password = 'Login';
    this.syssvc.loggedInUser = null;
  }
}
