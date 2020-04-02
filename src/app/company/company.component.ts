import { Component, OnInit, ContentChild , QueryList, ContentChildren} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyName:string="ABCCOMPANY";


  
  // @ContentChild(EmployeeComponent) emp:EmployeeComponent;


  @ContentChildren('second') emp:QueryList<EmployeeComponent>;

  


  

  constructor() { 

  }

  ngOnInit(): void {
  }
  ClickMe(){
    var  a = this.emp.toArray();
    for(var i=0 ;  i<a.length ; i++){
      a[i].empName ="prudvi";
    }

    // this.emp.empName = "Prudvi";
  }
}
