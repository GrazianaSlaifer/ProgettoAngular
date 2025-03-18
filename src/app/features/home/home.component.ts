import { Component, inject } from '@angular/core';
import { GestoreLibriService } from '../../core/services/gestore-libri.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
gestoreLibri=inject(GestoreLibriService)

test() {
  this.gestoreLibri.listaLibri()
}
}
