import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from 'src/app/system.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  tableStyle: string = "table table-sm";
  users: User[] = [];
  searchCriteria: string = "";
  sortCriteria: string ="userName";
  ascSequence: boolean = false;
  loggedInUser: User = null;

  sortColumn(column: string): void{
    if(column == this.sortCriteria){
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }
  
  constructor(
    private usersvc: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
 this.loggedInUser= this.syssvc.loggedInUser;
    this.usersvc.list().subscribe(
   res => {console.log(res);
    this.users = res as User[];
   },
   err => { console.error(err);}
 );
  }

}

