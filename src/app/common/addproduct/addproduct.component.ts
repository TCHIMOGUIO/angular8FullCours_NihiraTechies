import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Products } from '../../model/prodcutmodel';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatFormFieldModule,
    MatInputModule, MatCheckboxModule, MatCardModule, MatButtonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  constructor(private service: ProductService, private ref: MatDialogRef<AddproductComponent>){}

  productform = new FormGroup({
    id: new FormControl({value: 0, disabled: true}),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(1, Validators.required),
    status: new FormControl(true)
  });

  Proceedsave(){
    if(this.productform.valid){
      let _data: Products = {
        id: 0,
        name: this.productform.value.name as string,
        description: this.productform.value.description as string,
        price: this.productform.value.price as number,
        status: this.productform.value.status as boolean
      }

      this.service.Createproduct(_data).subscribe(item => {
        alert('Created successfully.');
        this.productform.reset();
        this.ref.close()
      })
    }
  }

}
