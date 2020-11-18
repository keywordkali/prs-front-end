import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
vendor:Vendor = new Vendor();
  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    console.log(this.vendor);
    this.vendorsvc.create(this.vendor).subscribe(
      res => {
        console.debug("Vendor Create:", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => { console.error("Error changing user:" , err); }
    );
  }

  ngOnInit(): void {
  }

}
