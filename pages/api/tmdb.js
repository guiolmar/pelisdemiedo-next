import axios from 'axios';

export default async function handler(req, res) {
  const API_KEY = process.env.TMDB_API_KEY; // Usamos la clave API desde las variables de entorno

  const { query, type } = req.query; // Obtenemos los parámetros de la solicitud
  console.log(req.query)

  // Normalizar los parámetros que llegan como query[]
  const normalizedQuery = {};
  Object.keys(req.query).forEach((key) => {
    if (key.startsWith('query[') && key.endsWith(']')) {
      const newKey = key.slice(6, -1); // Remover 'query[' y ']'
      normalizedQuery[newKey] = req.query[key];
    }
  });

  // Construimos la URL para la solicitud a TMDb basada en el tipo
  const url = `https://api.themoviedb.org/3/${type}`;

  try {
    // Llamada a la API de TMDb usando axios
    const response = await axios.get(url, {
      params: {
        ...normalizedQuery, // Pasamos los parámetros corregidos
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    res.status(200).json(response.data); // Enviamos los datos al frontend
  } catch (error) {
    console.error('Error fetching data from TMDb:', error);
    res.status(500).json({ error: 'Error fetching data from TMDb' });
  }
}
