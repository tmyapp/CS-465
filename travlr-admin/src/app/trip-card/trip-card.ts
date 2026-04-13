import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../services/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip!: Trip;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Trip>();

  onDelete(): void {
    this.delete.emit(this.trip.code);
  }

  onEdit(): void {
    this.edit.emit(this.trip);
  }
}