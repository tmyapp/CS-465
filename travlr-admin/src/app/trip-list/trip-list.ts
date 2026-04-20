import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripService, Trip } from '../services/trip';
import { TripCard } from '../trip-card/trip-card';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {
  private tripService = inject(TripService);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);

  trips: Trip[] = [];
  editingCode: string | null = null;

  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.loadTrips();
    }
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        this.trips = [...data];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading trips:', err);
      }
    });
  }

  addTrip(): void {
    this.tripService.addTrip(this.newTrip).subscribe({
      next: () => {
        this.resetForm();
        this.loadTrips();
      },
      error: (err) => {
        console.error('Error adding trip:', err);
      }
    });
  }

  deleteTrip(code: string): void {
    this.tripService.deleteTrip(code).subscribe({
      next: () => {
        this.loadTrips();
      },
      error: (err) => {
        console.error('Error deleting trip:', err);
      }
    });
  }

  editTrip(trip: Trip): void {
    this.editingCode = trip.code;
    this.newTrip = { ...trip };
  }

  updateTrip(): void {
    if (!this.editingCode) return;

    this.tripService.updateTrip(this.editingCode, this.newTrip).subscribe({
      next: () => {
        this.editingCode = null;
        this.resetForm();
        this.loadTrips();
      },
      error: (err) => {
        console.error('Error updating trip:', err);
      }
    });
  }

  cancelEdit(): void {
    this.editingCode = null;
    this.resetForm();
  }

  resetForm(): void {
    this.newTrip = {
      code: '',
      name: '',
      length: '',
      start: '',
      resort: '',
      perPerson: '',
      image: '',
      description: ''
    };
  }
}