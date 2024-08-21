import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatCardModule,
    CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'Angular 18 Tutorial';
  subtitle = 'Angular for Beginners';
   todaydate = Date();
   salary = 14544645452482;
   obj = { 
    fname: "tchimo",
    lname: "jacob"
   };
   _class='active';

   isdisabled = true;
   _color="blue";
   _font="40px";
   isshow= false;
   _view='about';

   ticketinfo=[
    {'id':1, 'name':'angular', color:'green'},
    {'id':2, 'name':'react', color:'red'},
    {'id':3, 'name':'vuejs', color:'blue'}
   ];

   changetitle(){
    this.title = "Angular 18  full Tutorial"
   };

   updatetitle(event: any){

    this.title = event.target.value
   };

}
