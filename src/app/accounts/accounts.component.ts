import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs';
import { AccountsService } from '../services/accounts.service';
import { AccountDetails } from '../model/account.model';
@Component({
  selector: 'app-accounts',
  standalone: false,
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {
  accountFormGroup! : FormGroup;
  currentPage : number=0;
  pageSize : number=5;

  accountObservable! : Observable<AccountDetails>;
  constructor(private accountService:AccountsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId : this.fb.control("")
    });
    
  }

  handleSearchAccount(){
    let accountId : string = this.accountFormGroup.value.accountId;
    this.accountObservable = this.accountService.getAccount(accountId, this.currentPage, this.pageSize);
     

  }
}
