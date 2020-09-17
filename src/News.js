import React from 'react'
import './Styles/News.scss'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function News() {
    return (
        <div className="newsContainer">
            <Link to="/">
                <FontAwesomeIcon className="exitButton" icon={faTimes} />
            </Link>
            <div className="newsletter">
                <input placeholder="Wpisz adres email..." className="newsletter__input" />
                <button className="newsletter__button">Zapisz się!</button>
            </div>
        </div>
    )
}

export default News;