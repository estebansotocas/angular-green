import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
 
  toggleClass() {
    // You can toggle a class on the element here
    // For demonstration, let's toggle a class on the 'header' element
    const navElement = document.getElementById('navigation');
    if (navElement) {
      navElement.classList.toggle('active');
    }
  }
}
