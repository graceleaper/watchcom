import React from 'react'
import '../splashpage.css'
import { Link } from 'react-router-dom'

const SplashPage = () => {
    return (
        <div className="splashpage">
                <div className="splash-container">
                    <div className="splash-content">
                    <h1>WatchCom</h1>
                    <Link to={"/view"}>
                        <button>start watching</button>
                    </Link>
                    </div>
                </div>
        </div>
    )
}

export default SplashPage