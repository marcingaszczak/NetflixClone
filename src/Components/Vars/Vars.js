export const BASE = 'https://image.tmdb.org/t/p/original';
const KEY = '77baee7ff89572d49ed4b0d4dbeae31d';
const Vars = {
    NetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&with_networks=213`,
    TrendingNow: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
    TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
    ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc&with_genres=28`,
    ComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc&with_genres=35`,
    HorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc&with_genres=27`,
    RomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=77baee7ff89572d49ed4b0d4dbeae31d&sort_by=popularity.desc&include_video=true&with_genres=10749`,
    Documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc&with_genres=99`
};

export default Vars