// Questo componente è la parte principale della home page dell'app.
// Quando viene chiamato il metodo "test", il componente chiede al servizio "GestoreLibriService" di recuperare e gestire la lista dei libri.
// In altre parole, il componente interagisce con il servizio per ottenere i dati dei libri e usarli nell'interfaccia utente.


import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // Per la navigazione
import { GestoreLibriService } from '../../core/services/gestore-libri.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FormsModule]
})
export class HomeComponent {
  gestoreLibri = inject(GestoreLibriService);
  query: string = '';  // Variabile per il titolo del libro da cercare

  constructor(private router: Router) { }

  // Metodo che viene chiamato quando l'utente clicca sul pulsante "Cerca"
  searchBooks() {
    if (this.query.trim() !== '') {
      // Reindirizza alla pagina di ricerca con la query
      this.router.navigate(['/ricerca'], { queryParams: { query: this.query } });
    }
  }
}







// import { Component, inject } from '@angular/core';
// import { GestoreLibriService } from '../../core/services/gestore-libri.service';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {
// gestoreLibri=inject(GestoreLibriService)

// test() {
//   this.gestoreLibri.listaLibri()
// }
// }

