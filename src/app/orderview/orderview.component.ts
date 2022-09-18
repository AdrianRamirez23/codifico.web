import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CodificoapiService } from '../codificoapi.service';

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.css']
})
export class OrderviewComponent implements OnInit {
  id: number;
  letOrders: any;
  page: number = 1;
  pageSize: number;
  selectOptions: any[] = ['5','10','20','50'];
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];
  constructor(private rutaActiva: ActivatedRoute, private apiCod: CodificoapiService) { }

  ngOnInit(): void {
    this.pageSize= 5;
    this.id = this.rutaActiva.snapshot.params['id'];
     this.getOrdes();
  
  }
  getOrdes(){
     this.apiCod.getOrdersByClient(this.id).subscribe(data =>{
      this.letOrders = data.result;
     })
  }


}
