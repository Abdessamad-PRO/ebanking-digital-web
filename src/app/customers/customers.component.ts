import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  // customers : any; premier declaration
  customers! : Observable<Array<Customer>>;
  errorMessage! : Object; 
  searchFormGroup : FormGroup |undefined;

  constructor(private customerService:CustomerService, private fb:FormBuilder) { }

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
  this.searchFormGroup=this.fb.group({
    keyword : this.fb.control('')
  })
  this.handleSearchCustomers();
  // this.customers= this.customerService.getCustomers().pipe(
  //   catchError(err => {
  //     this.errorMessage = err.message;
  //     throw err;
  //   })
  // );
}

handleSearchCustomers(){
   let kw = this.searchFormGroup?.value.keyword;  //? signifie if la valeur exist
   this.customers = this.customerService.searchCustomers(kw).pipe(
     catchError(err => {
       this.errorMessage = err.message;
       throw err;
     })
   );
}

handleDeleteCustomer(c:Customer){
  this.customerService.deleteCustomer(c.id).subscribe({
    next : (resp:Object) => {
      this.handleSearchCustomers();
    },
    error : err => {
      console.log(err);
    }
  });

}

}
