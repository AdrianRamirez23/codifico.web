import { Component, OnInit } from '@angular/core';
import { CodificoapiService } from '../codificoapi.service';
import swal from'sweetalert2';
import { NewOrder } from '../models/newOrder';

@Component({
  selector: 'app-curstomer',
  templateUrl: './curstomer.component.html',
  styleUrls: ['./curstomer.component.css']
})
export class CurstomerComponent implements OnInit {
  listCustomers: any;
  listEmploys: any;
  listShippers: any;
  listProducts: any;
  custid: number;
  empid: number;
  shipperid: number;
  shipname: string;
  shipaddress: string;
  shipcity: string;
  shipcountry: string;
  orderdate: string;
  requireddate: string;
  shippeddate: string;
  freigth: number;
  productid: number;
  unitPrice: number;
  qty: number;
  duscount: number;
  page: number = 1;
  pageSize: number;
  selectOptions: any[] = ['5','10','20','50'];
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
  constructor(private apiCod: CodificoapiService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.pageSize= 5;
    this.getEmployes();
    this.getShippers();
    this.getProducts();
  }
  getCustomers(){
    this.apiCod.getCurstomers().subscribe(data =>{
     this.listCustomers= data.result;
    });
  }
  getEmployes(){
    this.apiCod.GetEmployees().subscribe(data =>{
      this.listEmploys = data.result;
    });
  }
  getShippers(){
    this.apiCod.GetShipper().subscribe(data =>{
      this.listShippers = data.result;
    });
  }
  getProducts(){
    this.apiCod.GetProducts().subscribe(data =>{
      this.listProducts = data.result;
    });
  }
  newOrder(){
    if(this.shipperid === undefined){
      swal.fire('Wargning','Shipper is required', 'error' );
      return;
    }
    if(this.empid === undefined){
      swal.fire('Wargning','Employ is required', 'error' );
      return;
    }
    if(this.shipname === undefined || this.shipname === "") {
      swal.fire('Wargning','Ship Name is required', 'error' );
      return;
    }
    if(this.shipaddress === undefined || this.shipaddress === "") {
      swal.fire('Wargning','Ship Address is required', 'error' );
      return;
    }
    if(this.shipaddress === undefined || this.shipaddress === "") {
      swal.fire('Wargning','Ship Address is required', 'error' );
      return;
    }
    if(this.shipcity === undefined || this.shipcity === "") {
      swal.fire('Wargning','Ship City is required', 'error' );
      return;
    }
    if(this.shipcountry === undefined || this.shipcountry === "") {
      swal.fire('Wargning','Ship Country is required', 'error' );
      return;
    }
    if(this.orderdate === undefined || this.orderdate === "") {
      swal.fire('Wargning','Order Date is required', 'error' );
      return;
    }
    if(this.requireddate === undefined || this.requireddate === "") {
      swal.fire('Wargning','Required Date is required', 'error' );
      return;
    }
    if(this.shippeddate === undefined || this.shippeddate === "") {
      swal.fire('Wargning','Shipped Date is required', 'error' );
      return;
    }
    if(this.freigth === undefined || this.freigth === 0) {
      swal.fire('Wargning','Freigth is required', 'error' );
      return;
    }
    if(this.productid === undefined ) {
      swal.fire('Wargning','Product is required', 'error' );
      return;
    }
    if(this.unitPrice === undefined || this.unitPrice === 0) {
      swal.fire('Wargning','Unit Price is required', 'error' );
      return;
    }
    if(this.qty === undefined || this.qty === 0) {
      swal.fire('Wargning','Quantity is required', 'error' );
      return;
    }
    if(this.duscount === undefined ) {
      swal.fire('Wargning','Discount is required', 'error' );
      return;
    }
    let newOrder = new NewOrder();
    
    newOrder.empid = this.empid;
    newOrder.orderDate = this.orderdate;
    newOrder.requiredDate = this.requireddate;
    newOrder.shippeddate = this.shippeddate;
    newOrder.shipperId = this.shipperid;
    newOrder.freigth = this.freigth;
    newOrder.shipname = this.shipname;
    newOrder.shipaddress = this.shipaddress;
    newOrder.shipcity = this.shipcity;
    newOrder.shiregion = "";
    newOrder.shipppostalcode = "";
    newOrder.shipcountry = this.shipcountry;
    newOrder.productId = this.productid;
    newOrder.unitPrice = this.unitPrice;
    newOrder.qty = this.qty;
    newOrder.discount = this.duscount;
    this.apiCod.PostNewOrder(newOrder).subscribe(data =>{
      swal.fire('Great','The Order is Add succesfully', 'success' );
      return;
    }, err => {
      swal.fire('Wargning',err, 'error' );
      return;
    }) 
  }
  validateFormat(event: any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
     if (!regex.test(key)) {
      event.returnValue = false;
       if (event.preventDefault) {
        event.preventDefault();
       }
     }
    }
  

}
