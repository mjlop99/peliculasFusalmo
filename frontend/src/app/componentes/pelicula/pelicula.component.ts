import { Component, Input, OnInit } from '@angular/core';
import { PeliculasApisService } from '../../services/peliculas-apis.service'; 

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit { 
  hovered = false;
  @Input() peliculaId?: number;
  @Input() urlImagen?: string;
  @Input() titulo?: string;
  @Input() categoria?: string;
  @Input() descripcion?: string;
  @Input() urlVideo?: string;
  @Input() protagonista?: string;
  
  constructor(private peliculasService: PeliculasApisService) {}

  ngOnInit(): void { 
  }

  visible(hovering: boolean) {
    this.hovered = hovering;
  }

}
