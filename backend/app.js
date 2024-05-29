const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

let peliculas = [
  {
    "id": 1,
    "titulo": "the batman",
    "descripcion": "batman debe enfrentarse al acertijo",
    "urlImagen": "https://pics.filmaffinity.com/The_Batman-449856406-large.jpg",
    "categoria": "Acción",
    "protagonista":"Robert partison",
    "urlVideo":"https://www.youtube.com/watch?v=fWQrd6cwJ0A"
  },
  {
    "id": 2,
    "titulo": "spiderman 1",
    "descripcion": "peter parker se convierte en el increible...",
    "urlImagen": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    "categoria": "Acción",
    "protagonista":"Tobey Maguire",
    "urlVideo":"https://www.youtube.com/watch?v=t06RUxPbp_c"
  },
  {
    "id": 3,
    "titulo": "barbie",
    "descripcion": "barbie viaja desde su mundo a la tierra",
    "urlImagen": "https://people.com/thmb/DFJVi55j_94AB3c4vHGSb9T4rmU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(665x0:667x2)/margot-robbie-barbie-kid-071823-2-a799c026201640ee91bd3ecfd680ca87.jpg",
    "categoria": "comedia",
    "protagonista":"Margot Robbie",
    "urlVideo":"https://www.youtube.com/watch?v=zh4KhVSMwtQ"

  },
  
];

app.post('/api/peliculas', (req, res) => {
  const { titulo, descripcion, urlImagen,categoria,protagonista,urlVideo } = req.body;
  const id = peliculas.length > 0 ? peliculas[peliculas.length - 1].id + 1 : 1;
  const nuevaPelicula = { id, titulo, descripcion, urlImagen,categoria,protagonista,urlVideo };
  peliculas.push(nuevaPelicula);
  res.status(201).json(nuevaPelicula);
});

// Obtener todas las películas
app.get('/api/peliculas', (req, res) => {
  res.status(200).json(peliculas);
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
  const { titulo, protagonista, descripcion, urlVideo,urlImagen,categoria } = req.body;
  const peliculaIndex = peliculas.findIndex(pelicula => pelicula.id === parseInt(id));
  
  if (peliculaIndex !== -1) {
    const pelicula = peliculas[peliculaIndex];
    
    // Solo actualizar los campos que no estén vacíos o nulos
    if (titulo !== undefined && titulo !== null && titulo !== '') {
      pelicula.titulo = titulo;
    }
    if (protagonista !== undefined && protagonista !== null && protagonista !== '') {
      pelicula.protagonista = protagonista;
    }
    if (descripcion !== undefined && descripcion !== null && descripcion !== '') {
      pelicula.descripcion = descripcion;
    }
    if (urlVideo !== undefined && urlVideo !== null && urlVideo !== '') {
      pelicula.urlVideo = urlVideo;
    }
    if (urlImagen !== undefined && urlImagen !== null && urlImagen !== '') {
      pelicula.urlImagen = urlImagen;
    }
    if (categoria !== undefined && categoria !== null && categoria !== '') {
      pelicula.categoria = categoria;
    }

    res.status(200).json(pelicula);
  } else {
    res.status(404).json({ error: 'Película no encontrada' });
  }
});


const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/api/peliculas`);
});
