import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../../core/model/libro.model'; // Assicurati che la classe Libro sia corretta


@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {
  route = inject(ActivatedRoute); // Iniettiamo ActivatedRoute
  libro!: Libro; // Il tipo di libro che riceveremo

  ngOnInit(): void {
    // Recupera i parametri dalla query string
    this.route.queryParams.subscribe((params) => {
      const query = params['query']; // Ottieni l'oggetto libro passato
      if (query) {
        // Parsea il JSON e assegnalo alla variabile libro
        this.libro = JSON.parse(query);
      }
    });
  }

  // Metodo per aggiungere un libro alla wishlist
  addToWishlist() {
    // this.libro
    console.log(this.libro)
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]'); // Recupera la wishlist dal localStorage
    wishlist.push(this.libro); // Aggiungi il libro alla wishlist
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Salva la wishlist aggiornata

    console.log(localStorage.getItem("wishlist"))
  }
}
