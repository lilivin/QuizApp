import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import firebase from 'firebase/app';
import 'firebase/database';
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { DB_CONFIG } from './Config/Firebase/db_config';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class MarkowskiQuiz extends Component {
  constructor(props){
    super(props);
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {},
      randomIndex: 1,
      questionNumber: 1,
      isLoading: true
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;
    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG)
    }

    firebase.database().ref().child("MarkowskiQuestions").on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        question: snap.val().question,
        answerA: snap.val().answerA,
        answerB: snap.val().answerB,
        answerC: snap.val().answerC,
        answerD: snap.val().answerD,
        correctAnswer: snap.val().correctAnswer
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards),
        isLoading: false
      })

    })
  }

  getRandomCard(currentCards){
    this.state.randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[this.state.randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(currentCards)
    }
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    currentCards.splice(this.state.randomIndex, 1);
    if(currentCards.length <= 0) {
      document.getElementById('card').classList.remove('cardRotate')
      return;
    }
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
      questionNumber: this.state.questionNumber + 1,
    })
    document.getElementById('card').classList.remove('cardRotate')
  }

  render() {
    return (
      <div className="App">
          { this.state.isLoading ? 
          <Loader className="loader" type="ThreeDots" color="#fff" height={100} width={100} timeout={3000} /> : 
                <div>
                    <Link to="/quizy">
                    <FontAwesomeIcon className="exitButton" icon={faTimes} />
                    </Link>
                    <div className="cardRow">
                        <Card question={this.state.currentCard.question}
                            answerA={this.state.currentCard.answerA}
                            answerB={this.state.currentCard.answerB}
                            answerC={this.state.currentCard.answerC}
                            answerD={this.state.currentCard.answerD}
                            correctAnswer={this.state.currentCard.correctAnswer}
                            answerLength={this.state.cards.length}
                            drawCard={this.updateCard}
                            questionNumber={this.state.questionNumber}
                            quizName="MarkowskiQuiz"
                        />
                    </div>
                </div>
            }
      </div>
    );
  }
}

export default MarkowskiQuiz;
