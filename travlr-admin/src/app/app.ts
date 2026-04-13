import { Component } from '@angular/core';
import { TripList } from './trip-list/trip-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'travlr-admin';
}