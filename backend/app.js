const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

let peliculas = [
  {
    "id": 1,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "descripcion": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  {
    "id": 2,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  {
    "id": 3,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  {
    "id": 1,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  {
    "id": 1,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  {
    "id": 1,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  {
    "id": 1,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  {
    "id": 1,
    "titulo": "Batman: El Caballero de la Noche",
    "protagonista": "Bruce Wayne / Batman",
    "caracteristicas": "Un multimillonario que lucha contra el crimen...",
    "urlPelicula": "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "urlImagen": "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
    "categoria": "Acción"
  },
  
];

app.post('/api/peliculas', (req, res) => {
  const { titulo, protagonista, caracteristicas, urlPelicula, urlImagen } = req.body;
  const id = peliculas.length > 0 ? peliculas[peliculas.length - 1].id + 1 : 1;
  const nuevaPelicula = { id, titulo, protagonista, caracteristicas, urlPelicula, urlImagen };
  peliculas.push(nuevaPelicula);
  res.status(201).json(nuevaPelicula);
});

// Obtener todas las películas
app.get('/api/peliculas', (req, res) => {
  res.json(peliculas);
});

// Eliminar una película
app.delete('/api/peliculas/:id', (req, res) => {
  const { id } = req.params;
  peliculas = peliculas.filter(pelicula => pelicula.id !== parseInt(id));
  res.status(204).end();
});

// Editar una película
app.put('/api/peliculas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, protagonista, caracteristicas, urlPelicula } = req.body;
  const peliculaIndex = peliculas.findIndex(pelicula => pelicula.id === parseInt(id));
  
  if (peliculaIndex !== -1) {
    peliculas[peliculaIndex] = { id: parseInt(id), titulo, protagonista, caracteristicas, urlPelicula };
    res.json(peliculas[peliculaIndex]);
  } else {
    res.status(404).json({ error: 'Película no encontrada' });
  }
});

const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://http://localhost:${PORT}/api/peliculas`);
});
