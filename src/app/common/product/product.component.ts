import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Products } from '../../model/prodcutmodel';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatPaginatorModule,
    MatSortModule, MatButtonModule, MatInputModule, CommonModule,
  MatDialogModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description',
    'price', 'status', 'action'];

  dataSource !: MatTableDataSource<Products>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Loadproducts();
  }

  productlist: Products[] = [];

  Loadproducts() {

    this.service.GetAll().subscribe(item => {
      this.productlist = item;
      this.dataSource = new MatTableDataSource(this.productlist)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  Createproduct(){

    this.Openpopup();
  }

  Openpopup(){
    this.dialog.open(AddproductComponent, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms'
    }).afterClosed().subscribe(item => {
      this.Loadproducts();
    })
  }
}
