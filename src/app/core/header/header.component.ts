import { CommonModule } from "@angular/common"; 
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){ }

menuButtons:any[] = [];

ngOnInit(){
  this.loadMenuButtons();
}

loadMenuButtons(){
  //should be done with api call
  this.menuButtons = [
    {
      label: 'About',
      route: '/about'
    },
  ]
}

goTo(route: string = ''): void {
  this.router.navigate([route]);
}

}
