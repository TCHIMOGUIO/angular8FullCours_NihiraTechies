import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Role, user } from '../../model/loginmodel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule,
    MatInputModule,MatButtonModule, CommonModule,
  MatCheckboxModule, MatRadioModule, MatSelectModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor( private service: MasterService, private router: Router){

  }

  Roles: Role[] = [
    {value: 'salesman', viewValue: 'salesman'},
    {value: 'supervisor', viewValue: 'supervisor'},
    {value: 'manager', viewValue: 'manager'},
  ];

  registerform= new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    role: new FormControl('salesman', Validators.required),
    gender: new FormControl('m'),
    terms: new FormControl(true)

  });


  ProceedRegister(){

    if(this.registerform.value.terms){
      if(this.registerform.valid){
        let _data: user ={
          id: this.registerform.value.username as string,
          password: this.registerform.value.password as string,
          name: this.registerform.value.name as string,
          role: this.registerform.value.role as string,
          gender: this.registerform.value.gender as string,
          email: this.registerform.value.email as string
       }
      this.service.ProceedRegister(_data).subscribe(item => {
       alert("Redistered successfully.");
       this.router.navigateByUrl('/login'); 
       
      });
     
      
       
     }
    }else{
      alert('please agree terms and conditions and proceed');
    }
}
}