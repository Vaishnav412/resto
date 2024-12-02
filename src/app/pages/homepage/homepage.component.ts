import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  tables = [
    { id: 1, name: 'Table 1' },
    { id: 2, name: 'Table 2' },
    { id: 3, name: 'Table 3' },
    { id: 4, name: 'Table 4' },

  ];

  menu = [
    { id: 1, name: 'Pasta', price: 12.99, count: 0 },
    { id: 2, name: 'Pizza', price: 15.49, count: 0 },
    { id: 3, name: 'Burger', price: 10.99, count: 0 },
    { id: 4, name: 'Salad', price: 8.99, count: 0 },
    {id:5, name:'Noodles', price:10.00, count:0},
    {id:6, name:'Friedrice' , price:15.00, count:0},
    {id:7, name:'Juice' , price:5.00, count:0},
    {id:8, name:'Coffee' , price:5.00, count:0},
    {id:9, name:'Fresh Lime' , price:4.00, count:0},
    {id:10, name:'Shawaya' , price:18.00, count:0},
    {id:11, name:'Alfaham' , price:18.00, count:0},
    {id:12, name:'Biriyani' , price:15.00, count:0},
  ];
  get totalItems() {
    return this.menu.reduce((total, item) => total + item.count, 0);
  }
  
  get totalPrice() {
    return this.menu.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  }

  increaseCount(item: any) {
    item.count++;
  }

  decreaseCount(item: any) {
    if (item.count > 0) {
      item.count--;
    }
  }

}
