// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ricerca',
//   imports: [],
//   templateUrl: './ricerca.component.html',
//   styleUrl: './ricerca.component.scss'
// })
// export class RicercaComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Per ottenere la query dalla URL
import { Libro } from '../../core/model/libro.model';
import { GestoreLibriService } from '../../core/services/gestore-libri.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.scss'],
})
export class RicercaComponent implements OnInit {
  query: string = ''; // Query di ricerca dalla URL
  books: Libro[] = []; // Lista di libri trovati

  constructor(
    private route: ActivatedRoute,
    private gestoreLibri: GestoreLibriService
  ) {}

  ngOnInit(): void {
    // Recupera la query dalla URL
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      if (this.query) {
        // Esegui la ricerca per il libro
        this.gestoreLibri.recuperaLibriByTitle(this.query).subscribe((data) => {
          this.books = data.docs; // Assegna i risultati a "books"
        });
      }
    });
  }
  stampaLibro(libro: Libro) {
    console.log(libro);
  }
}
