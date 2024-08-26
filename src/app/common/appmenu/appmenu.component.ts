import { Component, DoCheck } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, 
    MatButtonModule, RouterLink, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements DoCheck {
  showmenu= false;
  constructor(private router: Router){

  }
  ngDoCheck(): void {
    let currenturl= this.router.url;
    if (currenturl === "/login" || currenturl === "/register"){
      this.showmenu = false;
    }else{
      this.showmenu = true;
    }
  }
  
}
