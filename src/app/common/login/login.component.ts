import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { loginmodel } from '../../model/loginmodel';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: MasterService, private router:Router){

  }

  _logindata: loginmodel = {
    username: '',
    password: ''
  }
  ProceedLogin(form: any) {
    if(form.valid){
      this.service.Proceedlogin(this._logindata).subscribe(item => {
        let _resp = item;
        if(_resp.length > 0){
          this.router.navigateByUrl('');
        }else{
          alert('Invalid credentials');
        }
      })
    }

  }

}
