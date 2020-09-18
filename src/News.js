import React from 'react'
import './Styles/News.scss'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const MyForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });
    return (
        <form>
            <input placeholder="chuj" type="email" />
            <button onClick={submit}>
                Submit
            </button>
        </form>
    );
};

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
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <div>
                    <MyForm onSubmitted={formData => subscribe(formData)} />
                    {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                    {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                </div>
                )}
            />
        </div>
    )
}

export default News;
