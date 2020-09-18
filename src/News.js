import React from 'react'
import './Styles/News.scss'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { noAuto } from '@fortawesome/fontawesome-svg-core';

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
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: "flex"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br />
      <input
        style={{ fontSize: "2em", padding: 5, height: 50, border: 'none', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5, borderTopRightRadius: 20, borderBottomRightRadius: 20, border: "none" }} onClick={submit}>
        Submit
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
