import { RichiestaLibri, Libro } from './../model/libro.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestoreLibriService {
http = inject(HttpClient);
listaLibri=signal<Libro[]>([])

  constructor() { }

  recuperaLibri() {
    this.http.get<RichiestaLibri>("https://openlibrary.org/search.json?title=the+lord+of+the+rings")
    .subscribe((data:RichiestaLibri)=>{
      console.log(data)
      this.listaLibri.set(data.docs)
    })
  }


}
