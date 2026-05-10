import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private customerService:CustomerService) { }

  // ngOnInit(): void {
  //   this.http.get('http://localhost:8085/customers').subscribe(data=>{
  //     //  stocker les données dans un objet data
  //     this.customers=data;
  //   },error=>{
  //     console.log(error);
  //   })

  // }
  
  ngOnInit(): void {
  this.customerService.getCustomers().subscribe({
    next: (data) => {
      this.customers = data;
    },
    error: (err) => {
      console.log(err);
    }
  }); 
}
}
