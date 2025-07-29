const API_URL = "https://apigithubrepo.onrender.com/repos";
const CACHE_KEY = "github_projects";
const CACHE_TTL = 1000 * 60 * 60 * 24;

export async function fetchApi() {
  //primero validamos si ya existen los datos en el localStorage
  const cached = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(CACHE_KEY + "_time");

  if (cached && cachedTime && Date.now() - Number(cachedTime) < CACHE_TTL) {
    return JSON.parse(cached); //si existen, retornamos esos datos.
  }

  //si no existen hacemos la peticion
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los proyectos");

    const data = await response.json();

    //guardamos la data en el localStorage
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(CACHE_KEY + "_time", Date.now().toString());

    return data; //retornamos la data
  } catch (err) {
    console.error("Fallo al cargar los proyectos", err);
    return [];
  }
}
