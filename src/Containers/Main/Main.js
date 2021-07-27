import React, {useEffect, useState } from 'react'
import MainTile from '../../Components/MainTile/MainTile';
import NavBar from '../../Components/NavBar/NavBar';
import NetflixOriginals from '../../Components/NetflixOriginals/NetflixOriginals';
import FilmsGenres from '../FilmsGenres/FilmsGenres';
import Vars from './../../Components/Vars/Vars';
import movieTrailer from 'movie-trailer';


function Main() {
    const [scrollY,setScrollY] = useState(0)
    const [listForBanner, setListForBanner] = useState([])
    const [isYTOpen, setIsYTOpen] = useState({ Netflix_Originals: false,
                            Trending_Now: false,
                            Top_Rated: false,
                            Action_Movies: false,
                            Comedy_Movies: false,
                            Horror_Movies: false,
                            Romance_Movies: false,
                            Documentaries: false})
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [movieID, setMovieID] = useState('')

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    });

    useEffect(()=> {
        fetch(address)
        .then(res => res.json())
        .then(response => {
            setListForBanner(response.results)
        })
        .catch((error)=>{console.log(error)}) //obsługa błędu
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    },[])


    const handleYTOpen = (gen, movie) => {
        const allFalse = {Netflix_Originals: false,
            Trending_Now: false,
            Top_Rated: false,
            Action_Movies: false,
            Comedy_Movies: false,
            Horror_Movies: false,
            Romance_Movies: false,
            Documentaries: false}
            if(isYTOpen[gen] === true) {
                setIsYTOpen(allFalse)
            } else {
                allFalse[gen] = true
                setIsYTOpen(allFalse)
            }

            movieTrailer(movie?.title || movie?.name || '', {id: true} ,(error, response)=> {
                setMovieID(response)
            })
    }

    let address = Vars.NetflixOriginals




    return (
        <React.Fragment>
            <NavBar scrollY = {scrollY}/>
            <MainTile listForBanner={listForBanner}/>
            <main>
                <NetflixOriginals
                    gen='Netflix_Originals'
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    listForBanner={listForBanner}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
                <FilmsGenres
                    genre='Trending Now'
                    gen='Trending_Now'
                    fetchGenre = {Vars.TrendingNow}
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
                <FilmsGenres
                    genre='Top Rated'
                    gen='Top_Rated'
                    fetchGenre = {Vars.TopRated}
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
                <FilmsGenres
                    genre='Action Movies'
                    gen = 'Action_Movies'
                    fetchGenre={Vars.ActionMovies}
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
                <FilmsGenres
                    genre='Comedy Movies'
                    gen = 'Comedy_Movies'
                    fetchGenre={Vars.ComedyMovies}
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
                <FilmsGenres
                    genre='Horror Movies'
                    gen = 'Horror_Movies'
                    fetchGenre={Vars.HorrorMovies}
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
                <FilmsGenres
                    genre='Romance Movies'
                    gen = 'Romance_Movies'
                    fetchGenre={Vars.RomanceMovies}
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
                <FilmsGenres
                    genre='Documentaries'
                    gen = 'Documentaries'
                    fetchGenre={Vars.Documentaries}
                    isYTOpen = {isYTOpen}
                    handleClick = {handleYTOpen}
                    windowWidth = {windowWidth}
                    movieID = {movieID}/>
            </main>
        </React.Fragment>
    )
}

export default Main
