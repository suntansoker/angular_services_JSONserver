import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProdService{
    private _prodUrl = "http://localhost:3000/products"
    private count=2;
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor(private _http: HttpClient){}
    getProdList() {
        return this._http.get(this._prodUrl);
    }

    addProduct(name,quantity) {
        this.count++;
        let newProduct = {
            "id": this.count,
            "name": name,
            "quantity": quantity
        }
        return this._http.post(this._prodUrl, newProduct, this.httpOptions);
    }
}
