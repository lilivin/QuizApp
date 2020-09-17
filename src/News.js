import React from 'react'
import './Styles/News.scss'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MailchimpSubscribe from "react-mailchimp-subscribe"

function News() {
    const url = "https://gmail.us17.list-manage.com/subscribe/post?u=8f483363674247f434e90221e&amp;id=81a8814874";
    return (
        <div className="newsContainer">
            <Link to="/">
                <FontAwesomeIcon className="exitButton" icon={faTimes} />
            </Link>
            <div className="newsletter">
                <input placeholder="Wpisz adres email..." className="newsletter__input" />
                <button className="newsletter__button">Zapisz się!</button>
            </div>
            <MailchimpSubscribe url={url}/>
        </div>
    )
}

export default News;
