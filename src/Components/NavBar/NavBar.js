import React from 'react';
import './NavBar.css'
import user from './../../Img/user.png';
import netflix from './../../Img/netflix.png'

function NavBar(props) {
    return (
        <div className = {(props.scrollY>50) ? 'NavBar_Background' : 'NavBar'}>
            <img className='NavBar_Netflix' src={netflix} alt='netflix' />
            <img className='NavBar_User' src={user} alt='user'/>
        </div>
    )
}

export default NavBar
