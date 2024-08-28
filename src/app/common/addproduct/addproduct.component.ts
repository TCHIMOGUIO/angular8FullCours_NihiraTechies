import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Products } from '../../model/prodcutmodel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatFormFieldModule,
    MatInputModule, MatCheckboxModule, MatCardModule, MatButtonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit{


  _dialogdata:any;
  _productinfo!:Products;

  constructor(private service: ProductService, 
    private ref: MatDialogRef<AddproductComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private toastr: ToastrService){}

  ngOnInit(): void {
    this._dialogdata = this.data;
    let editid = this._dialogdata.id as number;
    if(editid != 0){
      this.service.GetproductbyId(editid).subscribe(item => {
        this._productinfo = item;
        this.productform.setValue({
          id:this._productinfo.id,
          name:this._productinfo.name,
          description:this._productinfo.description,
          price:this._productinfo.price,
          status:this._productinfo.status
        })
      })
    }
    
    
  }

  productform = new FormGroup({
    //id: new FormControl({value: 0, disabled: true}),
    id: new FormControl(0, Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(1, Validators.required),
    status: new FormControl(true)
  });

  Proceedsave(){
    if(this.productform.valid){
      let _data: Products = {
        id: this.productform.value.id as number,
        name: this.productform.value.name as string,
        description: this.productform.value.description as string,
        price: this.productform.value.price as number,
        status: this.productform.value.status as boolean
      }

      if(this._dialogdata.id !=0){
        _data.id=this._dialogdata.id as number;
        this.service.Updateproduct(_data).subscribe(item => {
          this.toastr.success('Updated successfully.', 'Success');
        })
      }else{
        this.service.Createproduct(_data).subscribe(item => {
          this.toastr.success('Created successfully.', 'Success');
        })
      }
      this.productform.reset();
      this.cancelpopup();
    }
  }

  cancelpopup(){
    this.ref.close();
  }
}
