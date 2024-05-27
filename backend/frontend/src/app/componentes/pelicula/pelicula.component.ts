import { Component, Input, OnInit } from '@angular/core';
import { PeliculasApisService } from '../../services/peliculas-apis.service'; 

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit { // Aquí implementé OnInit
  hovered = false;
  @Input() peliculaId?: number;
  @Input() URL?: string;
  @Input() titulo?: string;
  @Input() categoria?: string;
  @Input() descripcion?: string;

  constructor(private peliculasService: PeliculasApisService) {}

  ngOnInit(): void { 
  }

  visible(hovering: boolean) {
    this.hovered = hovering;
  }

}
