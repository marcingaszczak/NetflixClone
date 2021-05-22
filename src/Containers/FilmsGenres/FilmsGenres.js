import React, { useEffect, useState } from 'react';
import './FilmsGenres.css'
import {BASE} from './../../Components/Vars/Vars';
import YouTube from 'react-youtube';

const ROW_WIDTH = -4000

function FilmsGenres(props) {
const [list, setList]=useState([])
const [left,setLeft] = useState(0)


    useEffect(()=> {
        fetch(props.fetchGenre)
        .then(res => res.json())
        .then(response => {
            setList(response.results)
        })
        .catch((error)=>{console.log(error)}) //obsługa błędu
    },[])

    const handleRightScroll = () => {
        let newVal = 0
        if(left - props.windowWidth > ROW_WIDTH + props.windowWidth) {
            newVal = left - props.windowWidth;
        } else {
            newVal = ROW_WIDTH + props.windowWidth;
        }
        setLeft(newVal)
    }

    const handleLeftScroll = () => {
        let newVal = 0
        if(left + props.windowWidth < 0) {
            newVal = left + props.windowWidth;
        } else {
            newVal = 0
        }

        setLeft(newVal)
    }

    const scrollStyle = () => {
        return {
            transition: `all 1.5s`,
            transform: `translatex(${left}px)`
        }
    }

    const opts = {
        height: '390',
        width: '100%',
        position: 'relative',
        top: '100',
        playerVars: {
            autoplay: 1,
            rel: 0,
        },
    }

    return (
        <div className={props.isYTOpen[props.gen] ? 'FilmsGenres' : 'FilmsGenres FilmsGenres_MaxHeight'}>
            <h2>{props.genre}</h2>
            <div className='FilmsGenres_ArrowRight' onClick = {handleRightScroll}>►</div>
            <div className='FilmsGenres_ArrowLeft' onClick = {handleLeftScroll}>◄</div>
            <div style={scrollStyle()} className='FilmsGenres_Row'>
                {list.map(movie => {
                    return (<div className='FilmsGenres_RowElement' key={movie.id} onClick={() => props.handleClick(props.gen, movie)}>
                    <img src={BASE + movie.backdrop_path} alt='Movie' className='FilmsGenres_Pic' />
                    </div>)
                })}
            </div>
            <div className={props.isYTOpen[props.gen] ? 'FilmsGenres_YouTube' : 'FilmsGenres_ToggleYouTube'}>
                {props.isYTOpen[props.gen] &&  <YouTube className='FilmsGenres_Player' videoId={props.movieID} opts={opts} />}
            </div>

        </div>
    )
}

export default FilmsGenres
