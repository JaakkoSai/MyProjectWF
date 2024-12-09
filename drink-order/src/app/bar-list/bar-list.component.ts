import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bar-list',
  standalone: false,
  templateUrl: './bar-list.component.html',
})
export class BarListComponent implements OnInit {
  bars: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getBars().subscribe(
      (data: any) => {
        this.bars = data; // Update bars with API data
      },
      (error) => {
        console.error('Error fetching bars:', error); // Handle errors
      }
    );
  }
}
