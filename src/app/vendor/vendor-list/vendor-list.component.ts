import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../../vendor/vendor.class';
import { SystemService } from 'src/app/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  tableStyle: string = "table table-sm";
  vendors:Vendor[] = [];
  searchCriteria: string = "";
  sortCriteria: string ="name";
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
    private vendorsvc: VendorService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.loggedInUser= this.syssvc.loggedInUser;
    this.vendorsvc.list().subscribe(
      res => {console.log(res);
       this.vendors = res as Vendor[];
      },
      err => { console.error(err);}
    );
  }

}
