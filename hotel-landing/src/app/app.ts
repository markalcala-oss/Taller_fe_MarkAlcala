import { Component } from '@angular/core';
import { InicioComponent } from './features/landing/pages/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
