import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Container from './components/Container';
import dogs from './dogs.json';
import Character from './components/Character';

class App extends Component {
  state = {
    dogs: [],
    clicked: [],
    repeat: false,
    score: 0,
    topScore: 0,
    firstTurn: true
  }

  componentDidMount() {
    this.setState({ dogs: dogs });
  }

  displayDogs = () => {
    return this.state.dogs.map((dog, i) =>
      <Character
        key={i}
        src={dog.image}
        id={dog.id}
        handleClick={this.handleClick}
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
    this.updateState({repeat: !winner});

    setTimeout(() => {
      this.updateState({
        dogs: dogs,
        clicked: [],
        repeat: false,
        score: 0,
        topScore: score > this.state.topScore ? score : this.state.topScore
      });
    }, 1000);
    
  }

  checkClickedDogs = id => {
    let repeatClick = this.state.clicked.includes(id) ? true : false
    let newClicked = [...this.state.clicked, id];
    let shuffledDogs = this.shuffleDogs();
    let score = repeatClick ? this.state.score : this.state.score + 1;
    let newState = {
      dogs: shuffledDogs,
      clicked: newClicked,
      repeat: repeatClick,
      score: score,
      firstTurn: false
    };

    if (repeatClick || this.state.score === 12) {
      this.handleGameOver(!repeatClick, score);
    } else {
      this.updateState(newState);
    }
  }

  render() {
    return (
      <>
        <Navbar firstTurn={this.state.firstTurn} repeat={this.state.repeat} score={this.state.score} topScore={this.state.topScore} />
        <Wrapper>
          <Container>
            {this.displayDogs()}
          </Container>
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default App;
