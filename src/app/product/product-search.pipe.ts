import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = ''): Product[]  {
    if(searchCriteria == "")
    return products;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedProduct: Product[] = [];
    for(let product of products ){
if(product.id.toString().includes(searchCriteria)){
  selectedProduct.push(product);
  continue;
}
if(product.vendor.name.toLowerCase().includes(searchCriteria)){
  selectedProduct.push(product);
  continue;
}
if(product.partNumber.toLowerCase().includes(searchCriteria)){
  selectedProduct.push(product);
  continue;

    }
if(product.name.toLowerCase().includes(searchCriteria)){
  selectedProduct.push(product);
  continue;

    }
if(product.price.valueOf.arguments(searchCriteria)){
  selectedProduct.push(product);
  continue;

    }
if(product.unit.toLowerCase().includes(searchCriteria)){
  selectedProduct.push(product);
  continue;

    }
if(product.photoPath.toLowerCase().includes(searchCriteria)){
  selectedProduct.push(product);
  continue;

    }
    return  selectedProduct;
  
}
}
}

