import { Component } from '@angular/core';
import { Login } from './login/login';
import { TripList } from './trip-list/trip-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, TripList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}