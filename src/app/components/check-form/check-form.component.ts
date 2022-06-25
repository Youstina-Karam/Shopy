import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent implements OnInit {
  name:string ='';
  address:string='';
   phone:number=0;
  credit:number=0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitForm(){
    const formdata ={
      name:this.name,
      address:this.address,
      phone:this.phone,
      credit:this.credit
    }
       this.name='';
      this.address='';
      this.phone=0;
      this.credit=0;
     this.router.navigate(['Confirm'])
  }
}
