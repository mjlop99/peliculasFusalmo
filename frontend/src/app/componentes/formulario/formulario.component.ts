import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PeliculasApisService } from '../../services/peliculas-apis.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnChanges {
  @Input() id: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() categoria: string = '';
  @Input() urlImagen: string = '';
  @Input() urlVideo: string = '';
  @Input() protagonista: string = '';
  apiUrl:string="http://localhost:4000/api/peliculas";

  @Output() cancelar = new EventEmitter<void>();
  @Output() peliculaEliminada = new EventEmitter<void>();
  @Output() peliculaAgregada = new EventEmitter<void>(); 
  @Output() peliculaModificada = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      this.id = changes['id'].currentValue || '';
    }
    if (changes['titulo']) {
      this.titulo = changes['titulo'].currentValue || '';
    }
    if (changes['descripcion']) {  
      this.descripcion = changes['descripcion'].currentValue || '';
    }
    if (changes['categoria']) {
      this.categoria = changes['categoria'].currentValue || '';
      console.log(this.categoria);
    }
    if (changes['urlImagen']) {
      
      this.urlImagen = changes['urlImagen'].currentValue || '';
    }
    if (changes['protagonista']) {
      
      this.protagonista = changes['protagonista'].currentValue || '';
    }
    if (changes['urlVideo']) {
      
      this.urlVideo = changes['urlVideo'].currentValue || '';
    }
  }

  constructor(private peliculasService: PeliculasApisService) {}

  resetForm() {
    this.id = '';
    this.titulo = '';
    this.descripcion = '';
    this.categoria = '';
    this.urlImagen = '';
    this.urlVideo='';
    this.protagonista='';
  }

  mostrarPeliculas() {
    this.cancelar.emit();
  }

  async eliminarPeliculas(id: string): Promise<void> {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Error al eliminar película');
    } else {
      console.log("se eliminó perfectamente");
      this.resetForm();
      this.peliculaEliminada.emit();
      this.mostrarPeliculas();
    }

    if (response.status !== 204) {
      return response.json();
    }
  }

  async agregarPelicula(): Promise<void> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titulo: this.titulo,
        urlImagen: this.urlImagen,
        descripcion: this.descripcion,
        categoria: this.categoria,
        protagonista:this.protagonista,
        urlVideo:this.urlVideo
      })
    });
    if (!response.ok) {
      throw new Error('Error al agregar película');
    } else {
      console.log("Película agregada exitosamente");
      this.resetForm();
      this.peliculaAgregada.emit();
      this.mostrarPeliculas();
    }
  }
  async modificarPelicula(idpelicula:string,UrlVideo:string,protagonista:string, urlImagen: string, titulo: string, descripcion: string, categoria: string): Promise<void> {
    console.log(`${this.apiUrl}/${idpelicula}`);
    
    const response = await fetch(`${this.apiUrl}/${idpelicula}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titulo: titulo,
        urlImagen: urlImagen,
        urlVideo:UrlVideo,
        protagonista:protagonista,
        descripcion: descripcion,
        categoria: categoria
      })
    });
    if (!response.ok) {
      throw new Error('Error al modificar película');
    } else {
      console.log("Película modificada exitosamente");
      this.resetForm();
      this.peliculaModificada.emit();
      this.mostrarPeliculas();
    }
  }
}
