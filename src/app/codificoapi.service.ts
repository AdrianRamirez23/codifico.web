import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewOrder } from './models/newOrder';

@Injectable({
  providedIn: 'root'
})
export class CodificoapiService {
  private curstomers = "Clientes/SalesDatePrediction";
  private orderByClient = "Clientes/getClientsOrders/";
  private getEmployies = "api/Employees/GetEmployees";
  private getShippers = "api/Shipper/GetShipper";
  private getProducts = "api/Products/GetProducts";
  private newOrder = "api/Products/AddNewOrder";
  constructor(private http: HttpClient) { }
  getCurstomers(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.curstomers, httOptions)
  }
  getOrdersByClient(id: number): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.orderByClient+id, httOptions)
  }
  GetEmployees(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.getEmployies, httOptions)
  }
  GetShipper(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.getShippers, httOptions)
  }
  GetProducts(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.getProducts, httOptions)
  }
  PostNewOrder(Order: NewOrder): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.baseUrl + this.newOrder, Order,httOptions)
  }
}
