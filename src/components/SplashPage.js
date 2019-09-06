import React from 'react'
import '../splashpage.css'
import { Link } from 'react-router-dom'

const SplashPage = () => {
    return (
        <div className="splashpage">
                <div className="content">
                    <h1>WatchCom</h1>
                    <Link to={"/view"}>
                        <button>Start watching</button>
                    </Link>
                </div>
        </div>
    )
}

export default SplashPage