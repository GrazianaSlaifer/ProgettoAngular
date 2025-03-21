import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // Per la navigazione
import { GestoreLibriService } from '../../core/services/gestore-libri.service'; // (Se necessario per la ricerca)
import { FormsModule } from '@angular/forms'; // Per utilizzare ngModel
import { Libro } from '../../core/model/libro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FormsModule]
})
export class HomeComponent {
  gestoreLibri = inject(GestoreLibriService);
  query: string = ''; // Variabile per la ricerca del titolo del libro
  queryTitolo: string = ''; // Variabile per il titolo
  queryAutore: string = ''; // Variabile per l'autore
  queryCodice: string = ''; // Variabile per il codice del libro

  constructor(private router: Router) { }

  // Metodo per la ricerca dei libri
  searchBooks() {
    if (this.query.trim() !== '') {
      // Reindirizza alla pagina di ricerca con la query del libro
      this.router.navigate(['/ricerca'], { queryParams: { query: this.query } });
    }
  }

  // Metodo per aggiungere un libro e passare i dati alla pagina dei dettagli
  addBook() {
    if (this.queryTitolo.trim() !== '' || this.queryAutore.trim() !== '' || this.queryCodice.trim() !== '') {
      // Crea un oggetto Libro
      const libro: Partial<Libro> = {
        title: this.queryTitolo,
        author_name: [this.queryAutore],
        key: this.queryCodice
      };

      this.gestoreLibri.creaLibro(libro)

      // Naviga verso la pagina dei dettagli passando l'oggetto libro come query
      this.router.navigate(['/dettaglio'], {
        queryParams: {
          query: JSON.stringify(libro) // Passa l'oggetto come stringa JSON
        }
      });
    } else {
      alert('Per favore, compila almeno uno dei campi.');
    }
  }

  // Metodo per aggiungere un libro alla wishlist
  addToWishlist(libro: Partial<Libro>) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]'); // Recupera la wishlist dal localStorage
    wishlist.push(libro); // Aggiungi il libro alla wishlist
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Salva la wishlist aggiornata
  }
}






