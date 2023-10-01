const API_KEY="1239b2220124845c6d5bfd5344013d36";
const react_app_api="https://api.themoviedb.org/3";
const Api={
fetchTrending: `${react_app_api}/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `${react_app_api}/discover/tv?api_key=${API_KEY}&with_network=213`,
fetchTopRated:`${react_app_api}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`${react_app_api}/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`${react_app_api}/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`${react_app_api}/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`${react_app_api}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentries:`${react_app_api}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default Api;