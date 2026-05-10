import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  // customers : any; premier declaration
  customers! : Observable<Array<Customer>>;
  errorMessage! : Object; ;

  constructor(private customerService:CustomerService) { }

  // ngOnInit(): void {
  //   this.http.get('http://localhost:8085/customers').subscribe(data=>{
  //     //  stocker les données dans un objet data
  //     this.customers=data;
  //   },error=>{
  //     console.log(error);
  //   })

  // }

//   ngOnInit(): void {
//   this.customerService.getCustomers().subscribe({
//     next: (data) => {
//       this.customers = data;
//     },
//     error: (err) => {
//       this.errorMessage = err;
//     }
//   }); 
// }

  ngOnInit(): void {
  this.customers= this.customerService.getCustomers().pipe(
    catchError(err => {
      this.errorMessage = err.message;
      throw err;
    })
  );
}

}
