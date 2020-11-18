import { Vendor } from '../vendor/vendor.class';

export class Product{
    id: number = 0;
    vendorId: number = 0;
    partNumber: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    photoPath: string = "";
    vendor:Vendor = null;
    vendorName: string = "";
   

    constructor(){}
}