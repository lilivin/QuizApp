import React from 'react'
import './Styles/News.scss'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomForm = ({ status, message, onValidated }) => {
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
    <div className="newsletter">
      <input
        className="newsletter__input"
        ref={node => (email = node)}
        type="email"
        placeholder="Wpisz email..."
      />
      <button className="newsletter__button" onClick={submit}>
        Zapisz sie!
      </button>
    </div>
  );
};

function News() {
    const url = "https://gmail.us17.list-manage.com/subscribe/post?u=8f483363674247f434e90221e&amp;id=81a8814874";
    return (
        <div className="newsContainer">
            <Link to="/">
                <FontAwesomeIcon className="exitButton" icon={faTimes} />
            </Link>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default News;
