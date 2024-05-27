import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasApisService {

  constructor() { }

  getPeliculas() {
    return fetch('http://localhost:4000/api/peliculas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener películas');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }

}
