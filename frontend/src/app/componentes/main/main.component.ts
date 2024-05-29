import { Component, OnInit } from '@angular/core';
import { PeliculasApisService } from '../../services/peliculas-apis.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  peliculas: Array<any> = [];
  peliculaSeleccionada: any = null;
  mostrarLista: boolean = true;

  constructor(private peliculasService: PeliculasApisService) {}

  ngOnInit(): void {
    this.consultarPeliculas();
  }

  async consultarPeliculas():Promise<any> {
    this.peliculasService.getPeliculas().then(pelis => {
      this.peliculas = pelis;
      console.log(pelis);
      
    }).catch(error => {
      console.error('Error al obtener películas:', error);
    });
  }
  

  agregarPelicula() {
    this.mostrarLista = false;
    this.peliculaSeleccionada = null;
  }

  seleccionarPelicula(peli: any) {
    this.peliculaSeleccionada = peli;
    this.mostrarLista = false;
  }

  manejarCancelar() {
    this.mostrarLista = true;
    this.peliculaSeleccionada = null;
  }
  PeliculaCambios() {
    this.consultarPeliculas(); 
  }
}
