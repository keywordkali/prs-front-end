import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ''): Vendor[]  {
    if(searchCriteria == "")
    return vendors;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedVendor: Vendor[] = [];
    for(let vendor of vendors ){
if(vendor.id.toString().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;
}
if(vendor.code.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;
}
if(vendor.name.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;

    }
if(vendor.address.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;

    }
if(vendor.city.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;

    }
if(vendor.state.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;

    }
if(vendor.zip.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;

    }
if(vendor.phoneNumber.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;

    }
if(vendor.email.toLowerCase().includes(searchCriteria)){
  selectedVendor.push(vendor);
  continue;

    }
    return  selectedVendor;
  }
}
}
