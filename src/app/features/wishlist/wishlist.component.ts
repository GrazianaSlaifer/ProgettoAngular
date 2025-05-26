import { Component, inject, OnInit } from '@angular/core';
import { Libro } from '../../core/model/libro.model'; // Assicurati che la classe Libro sia corretta
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: Libro[] = [];
  router=inject(Router);


  ngOnInit(): void {
    // Carica la wishlist dal localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    this.wishlist = wishlist; // Assegna la wishlist alla variabile

    console.log(this.wishlist)
  }

  stampaLibro(libro: Libro) {
    console.log(libro);
  }
  mostraDettagli(libro: Libro) {
    this.router.navigate(['/dettaglio'], { queryParams: { query: JSON.stringify(libro) } });
  }
}
