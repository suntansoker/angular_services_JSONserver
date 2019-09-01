import {ProdService} from './prod.service';
import { Component, OnInit,OnDestroy, Input, EventEmitter, Output } from "@angular/core";
import { Product } from './product';

@Component({
    selector: 'prod-component',
    templateUrl: './prod.component.html',
    styleUrls:['./prod.component.css']
})

export class ProdComponent{
    products: Product[];
  
    constructor(private _prodService: ProdService) {      
    }

    name: String = '';
    quantity: number = 1;

    ngOnInit(){
        this.getProducts();
      }
  
    getProducts():void{
      this._prodService.getProdList().subscribe(
        (products: any) => this.products=products,
        err => console.log(err)
      );
  
    }

    addProduct() {
        this._prodService.addProduct(this.name,this.quantity).subscribe(
          (data:any) => this.getProducts()
        );
      }
      
    @Output('addedNameQuantityEvent')
    addedEvent = new EventEmitter();

    addEvent(){
        this.addedEvent.emit([this.name, this.quantity]);
    }

}