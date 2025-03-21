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

}
