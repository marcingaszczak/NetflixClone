import React, { useEffect, useState }from 'react'
import {BASE} from './../../Components/Vars/Vars';
import './MainTile.css';


function MainTile(props) {

    const [backgroundPic, setBackgroundPic] = useState('');


    useEffect (() => {
        let randomMovieIndex;
        if(props.listForBanner.length !== 0) {
            randomMovieIndex = Math.floor(Math.random() * props.listForBanner.length);
        }
        setBackgroundPic(props.listForBanner.length !== 0 ? (
            <header className='BgPic' style={{
                backgroundImage: `url(${BASE + props.listForBanner[randomMovieIndex].backdrop_path})`
            }}>
                <div className='MainTile_Content'>
                   <h1 className='MainTile_h1'>{props.listForBanner[randomMovieIndex].name}</h1>
                   <button className='MainTile_Play'>Play</button>
                   <button className='MainTile_MyList'>My List</button>
                   <p className='MainTile_p'>{props.listForBanner[randomMovieIndex].overview}</p>
                </div>
               <div className='MainTile_Fade'></div>
            </header>

       ) : <div></div>)
    }, [props.listForBanner])

    return (
        <React.Fragment>
            {backgroundPic}
        </React.Fragment>
    )
}

export default MainTile
