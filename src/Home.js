import React from 'react'
import './Styles/Home.scss'
import {
  Link
} from "react-router-dom";
import SanahQuiz from './SanahQuiz';

function Home() {
    return (
        <div className="homeScreen">
          <Link className="link" to="/quizy">
            <div className="option quizy">
              <h1 className="option__text">Quizy</h1>
            </div>
          </Link>

          <Link className="link" to="/news">
            <div className="option aktualnosci">
              <h1 className="option__text">Newsletter</h1>
            </div>
          </Link>

          <Link className="link" to="/users">
            <div className="option omnie">
              <h1 className="option__text">O mnie</h1>
            </div>
          </Link>
        </div>
    )
}

export default Home;