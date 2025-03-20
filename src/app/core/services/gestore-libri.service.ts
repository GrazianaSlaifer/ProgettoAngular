// // Questo servizio si occupa di recuperare informazioni sui libri da un'API (Open Library).
// // Quando viene chiamato il metodo "recuperaLibri", fa una richiesta all'API per cercare libri con il titolo "The Lord of the Rings".
// // Una volta ricevuti i dati, li salva in una lista chiamata "listaLibri", che è reattiva: questo significa che ogni volta che i dati cambiano,
// // l'interfaccia dell'app si aggiorna automaticamente per mostrare i nuovi libri.


// import { RichiestaLibri, Libro } from './../model/libro.model';
// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable, signal } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GestoreLibriService {
// http = inject(HttpClient);
// listaLibri=signal<Libro[]>([])

//   constructor() { }

//   //richiesta GET

//   recuperaLibri() {
//     this.http.get<RichiestaLibri>("https://openlibrary.org/search.json?title=the+lord+of+the+rings")
//     .subscribe((data:RichiestaLibri)=>{
//       console.log(data)
//       this.listaLibri.set(data.docs)
//     })
//   }


// }

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RichiestaLibri } from './../model/libro.model';

@Injectable({
  providedIn: 'root'
})
export class GestoreLibriService {
  http = inject(HttpClient);

  // Metodo per cercare i libri in base al titolo
  recuperaLibriByTitle(title: string): Observable<RichiestaLibri> {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;
    return this.http.get<RichiestaLibri>(url);
  }
}
