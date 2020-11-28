import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from '../../system.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
 vendor:Vendor;
 get isAdm(): boolean{
  return this.syssvc.loggedInUser.admin;
}
  
 constructor(
   private vendorsvc: VendorService,
   private route: ActivatedRoute,
   private syssvc: SystemService,
   private router: Router
 ) { }

 remove(): void{
  console.log(this.vendor);
  this.vendorsvc.remove(this.vendor).subscribe(
    res => {
      console.debug("Vendor Removed:", res);
      this.router.navigateByUrl("/vendors/list");
    },
    err => { console.error("Error removing user:" , err); }
  );
}

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res => {
        console.debug(res);
        this.vendor = res;
      },
      err => { 
        console.error(err); 
      }
    );
  }

}
