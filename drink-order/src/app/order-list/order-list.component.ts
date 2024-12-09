import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  standalone: false,

  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent {
  orders = [
    { user: 'John', bar: 'Sample Bar', total: 20.5, orderDate: '2024-12-01' },
    { user: 'Alice', bar: 'Another Bar', total: 15.0, orderDate: '2024-12-02' },
  ];
}
