import { Component } from '@angular/core';
import {CategoriesComponent} from '../categories/categories.component';
import {ProfileDropdownComponent} from '../profile-dropdown/profile-dropdown.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CategoriesComponent,ProfileDropdownComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
