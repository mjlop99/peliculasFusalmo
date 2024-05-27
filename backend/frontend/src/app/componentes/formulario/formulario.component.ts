import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnChanges {
  @Input() id: string = '';
  @Input() titulo: string = '';
  @Input() caracteristicas: string = '';
  @Input() categoria: string = '';

  @Output() cancelar = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      this.id = changes['id'].currentValue || '';
    }
    if (changes['titulo']) {
      this.titulo = changes['titulo'].currentValue || '';
    }
    if (changes['caracteristicas']) {
      this.caracteristicas = changes['caracteristicas'].currentValue || '';
    }
    if (changes['categoria']) {
      this.categoria = changes['categoria'].currentValue || '';
    }
  }

  resetForm() {
    this.id = '';
    this.titulo = '';
    this.caracteristicas = '';
    this.categoria = '';
  }

  mostrarPeliculas() {
    this.cancelar.emit();
  }
}
