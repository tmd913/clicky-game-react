import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Container from './components/Container';
import dogs from './dogs.json';
import Character from './components/Character';
import "./App.css";

class App extends Component {
  state = {
    dogs: [],
    clicked: [],
    repeat: false,
    score: 0,
    topScore: 0,
    firstTurn: true,
    shake: false,
    winner: false
  }

  componentDidMount() {
    this.setState({ dogs: dogs });
  }

  // generate character component for each dog
  displayDogs = () => {
    return this.state.dogs.map((dog, i) =>
      <Character
        key={i}
        src={dog.image}
        id={dog.id}
        handleClick={this.handleClick}
        shake={this.state.shake}
        winner={this.state.winner}
      />)
  }

  // https://bost.ocks.org/mike/shuffle/
  shuffleDogs = () => {
    let array = dogs.slice();
    let currentIndex = array.length;
    let temp;
    let randomIndex;
    // While there remain elements to shuffle…
    while (currentIndex > 0) {
      // Pick a remaining element…
      randomIndex = Math.floor(Math.random() * currentIndex--);
      // And swap it with the current element.
      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;
  }

  handleClick = event => {
    let id = event.target.dataset.id;

    this.checkClickedDogs(id)

    this.displayDogs();
  }

  updateState = newState => {
    this.setState(newState);
  }

  handleGameOver = (winner, score) => {
    this.updateState({repeat: !winner, shake: !winner, winner: winner});

    // slight delay before new game
    setTimeout(() => {
      this.updateState({
        dogs: dogs,
        clicked: [],
        repeat: false,
        score: 0,
        topScore: score > this.state.topScore ? score : this.state.topScore,
        firstTurn: true,
        shake: false,
        winner: false
      });
    }, 1000);
    
  }

  // check if dog has been clicked previously
  checkClickedDogs = id => {
    // check clicked dogs for most recently clicked dog
    let repeatClick = this.state.clicked.includes(id) ? true : false
    // add most recently clicked dog to clicked array
    let newClicked = [...this.state.clicked, id];
    let shuffledDogs = this.shuffleDogs();
    // increment score if dog was not previously clicked
    let score = repeatClick ? this.state.score : this.state.score + 1;
    // create obj which represents new state
    let newState = {
      dogs: shuffledDogs,
      clicked: newClicked,
      repeat: repeatClick,
      score: score,
      firstTurn: false
    };

    // check if game is over, win or lose
    if (repeatClick || score === 12) {
      this.handleGameOver(!repeatClick, score);
    } else {
      this.updateState(newState);
    }
  }

  render() {
    return (
      <div className="divBody">
        <Navbar firstTurn={this.state.firstTurn} repeat={this.state.repeat} score={this.state.score} topScore={this.state.topScore} winner={this.state.winner} />
        <Wrapper>
          <Container>
            {this.displayDogs()}
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
