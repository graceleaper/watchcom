import React from 'react'
import '../splashpage.css'
import { Link } from 'react-router-dom'
import mainlogo from '../mainlogo.png'

const SplashPage = () => {
    return (
        <div className="splashpage">
                <div className="splash-container">
                    <div className="splash-content">
                    <Link to={"/view"}>
                        <img className="main-logo" alt="main logo" src={mainlogo}/>
                    </Link>
                    </div>
                </div>
        </div>
    )
}

export default SplashPage