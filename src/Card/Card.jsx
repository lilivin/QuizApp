import React, { useState } from 'react';
import './Card.scss';

function Card(props) {
    const [radioValue, setRadioValue] = useState("");
    const [points, setPoints] = useState(0);

    function spin() {
        if(radioValue === ""){
            return;
        }
        document.getElementById('card').classList.add('cardRotate');
        
        if(props.correctAnswer === radioValue){
            setPoints(points => points + 1)
        }
        
        setRadioValue('');
        setTimeout(drawCard, 500)

        if(props.answerLength <= 1){
            return setTimeout(endScreen, 500);
        }
    }

    function endScreen(){
        if(props.correctAnswer !== radioValue) {
            document.getElementById('cardFront').innerHTML = `
            <h1 className='result'>Koniec</h1>
            <div>
                <h1>Twój wynik</h1>
                <p>`+ points + ` / 20</p>
            </div>
            <h1 className="greatings">Dziękujemy za gre!</h1>
        `
        } else{
            document.getElementById('cardFront').innerHTML = `
            <h1 className='result'>Koniec</h1>
            <div>
                <h1>Twój wynik</h1>
                <p>`+ (points + 1) + ` / 20</p>
            </div>
            <h1 className="greatings">Dziękujemy za gre!</h1>
        `
        }
        
    }

    function drawCard(){
        props.drawCard();
        //Usuwanie check z radio
        let radio = document.getElementsByName('radio');
        for (let i = 0; i < radio.length; i++) {
                radio[i].checked = false
        }
    }

    return(
        <div className="card-container">
            <div id="card" className="card">
                <div id="cardFront" className="front">
                    <div className="question">{props.questionNumber}/20</div>
                    <div className="question">{props.question}</div>
                    <div className="answers">
                        <div className="form">
                            <input className="form__input" id="ansA" type="radio" name="radio" onChange={() => setRadioValue('A')}/>
                            <label className="form__label" for="ansA">{props.answerA}</label>
                        </div>
                        <div className="form">
                            <input className="form__input" id="ansB" type="radio" name="radio" onChange={() => setRadioValue('B')}/>
                            <label className="form__label" for="ansB">{props.answerB}</label>
                        </div>
                        <div className="form">
                            <input className="form__input" id="ansC" type="radio" name="radio" onChange={() => setRadioValue('C')}/>
                            <label className="form__label" for="ansC">{props.answerC}</label>
                        </div>
                        <div className="form">
                            <input className="form__input" id="ansD" type="radio" name="radio" onChange={() => setRadioValue('D')}/>
                            <label className="form__label" for="ansD">{props.answerD}</label>
                        </div>
                    </div>
                    <button className="button" onClick={spin}>Odpowiedz</button>
                    
                </div>
                <div className="front back">
                    <h1 className="cardBack">{props.quizName}</h1>
                </div>
            </div>
        </div>
    )

    
}

export default Card
