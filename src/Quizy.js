import React from 'react'
import './Styles/Quizy.scss';
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import sanah from './Photos/Sanah.jpg'

function Quizy() {
    return (
        <>
            <Link to="/">
                <FontAwesomeIcon className="exitButton" icon={faTimes} />
            </Link>
            <div className="quizContainer">
                <Link className="link" to="/SanahQuiz">
                    <div className="quizCarddwa"></div>
                    <div className="quizCardtrzy"></div>
                    <div className="quizCard">
                        <img className="quizCard__image" src={sanah} alt="Sanah" />
                        <h1 className="quizCard__header">Sanah</h1>
                        <h3 className="quizCard__description">Sprawdź wiedze o najpopularniejszego piosenkarce 2020 roku!</h3>
                    </div>
                </Link>

                <Link className="link" to="/SanahQuiz">
                    <div className="quizCarddwa"></div>
                    <div className="quizCardtrzy"></div>
                    <div className="quizCard">
                        <img className="quizCard__image" src={sanah} alt="Sanah" />
                        <h1 className="quizCard__header">Sanah</h1>
                        <h3 className="quizCard__description">Sprawdź wiedze o najpopularniejszego piosenkarce 2020 roku!</h3>
                    </div>
                </Link>

                <Link className="link" to="/SanahQuiz">
                    <div className="quizCarddwa"></div>
                    <div className="quizCardtrzy"></div>
                    <div className="quizCard">
                        <img className="quizCard__image" src={sanah} alt="Sanah" />
                        <h1 className="quizCard__header">Sanah</h1>
                        <h3 className="quizCard__description">Sprawdź wiedze o najpopularniejszego piosenkarce 2020 roku!</h3>
                    </div>
                </Link>

                <Link className="link" to="/SanahQuiz">
                    <div className="quizCarddwa"></div>
                    <div className="quizCardtrzy"></div>
                    <div className="quizCard">
                        <img className="quizCard__image" src={sanah} alt="Sanah" />
                        <h1 className="quizCard__header">Sanah</h1>
                        <h3 className="quizCard__description">Sprawdź wiedze o najpopularniejszego piosenkarce 2020 roku!</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Quizy;