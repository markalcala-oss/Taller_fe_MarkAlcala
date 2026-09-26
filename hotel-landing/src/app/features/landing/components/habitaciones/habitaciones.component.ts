import { Component } from '@angular/core';

export interface Habitacion {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css',
})
export class HabitacionesComponent {
  habitaciones: Habitacion[] = [
    {
      id: 1,
      nombre: 'Suite del Bosque',
      descripcion: 'Ambiente íntimo con vistas panorámicas, terraza privada y baño de lujo.',
      precio: 180,
      imagen:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 2,
      nombre: 'Habitación Premium',
      descripcion: 'Espacio elegante, cama king size y un balcón ideal para disfrutar el amanecer.',
      precio: 230,
      imagen:
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 3,
      nombre: 'Casa de Montaña',
      descripcion: 'Diseño contemporáneo con cocina pequeña, sala de estar y vistas exclusivas.',
      precio: 310,
      imagen:
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80',
    },
  ];
}
