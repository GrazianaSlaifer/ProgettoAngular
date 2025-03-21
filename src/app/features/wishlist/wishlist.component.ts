import { Component, OnInit } from '@angular/core';
import { Libro } from '../../core/model/libro.model'; // Assicurati che la classe Libro sia corretta

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: Libro[] = [];

  ngOnInit(): void {
    // Carica la wishlist dal localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    this.wishlist = wishlist; // Assegna la wishlist alla variabile
  }
}
