import React, { useState } from 'react';
import {BASE} from './../Vars/Vars'
import './NetflixOriginals.css'
import YouTube from 'react-youtube';

const ROW_WIDTH = -3300;

function NetflixOriginals(props) {
    const [Netflixleft,setNetflixLeft] = useState(0)
    let row;

    const handleRightScroll = () => {
        let newVal = 0
        console.log(Netflixleft)
        console.log('asd' + (Netflixleft - props.windowWidth))
        if(Netflixleft - props.windowWidth > ROW_WIDTH + props.windowWidth) {
            newVal = Netflixleft - props.windowWidth;
            console.log('1')
        } else {
            newVal = ROW_WIDTH + props.windowWidth;
            console.log('2')
        }
        setNetflixLeft(newVal)
    }

    const handleLeftScroll = () => {
        let newVal = 0
        if(Netflixleft + props.windowWidth < 0) {
            newVal = Netflixleft + props.windowWidth;
        } else {
            newVal = 0
        }

        setNetflixLeft(newVal)
    }

    const scrollStyle = () => {
        return {
            transition: `all 1.5s`,
            transform: `translatex(${Netflixleft}px)`
        }
    }

    props.listForBanner.length !== 0 ?
        row = props.listForBanner.map(movie =>{
            return (
                <div className='NetflixOriginals_Tile' key = {BASE + movie.id} onClick={() => props.handleClick(props.gen, movie)}>
                    <img src={BASE + movie.poster_path} alt='Movie Poster' className='NetflixOriginals_Poster'/>
                </div>
            )
        }) :
    <div></div>

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
        <div className={props.isYTOpen[props.gen] ? 'NetflixOriginals' : 'NetflixOriginals NetflixOriginals_MaxHeight'}>
            <h1>NETFLIX ORIGINALS</h1>
            <div className='NetflixOriginals_ArrowRight' onClick = {handleRightScroll}>►</div>
            <div className='NetflixOriginals_ArrowLeft' onClick = {handleLeftScroll}>◄</div>
            <div className='NetflixOriginals_Row' style={scrollStyle()}>
                {row}
            </div>
            <div className={props.isYTOpen[props.gen] ? 'NetflixOriginals_YouTube' : 'NetflixOriginals_ToggleYouTube'}>
            {props.isYTOpen[props.gen] &&  <YouTube className='FilmsGenres_Player' videoId={props.movieID} opts={opts} />}
            </div>

        </div>
    )
}

export default NetflixOriginals
