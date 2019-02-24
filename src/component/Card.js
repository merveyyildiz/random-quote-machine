import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
  state = {
    qoute: '',
    author: '',
    color: 'lightblue'
  };
  getRandomQuote = () => {
    axios.get('https://quota.glitch.me/random').then(res => {
      this.setState({ quote: res.data.quoteText });
      this.setState({ author: res.data.quoteAuthor });
      document.body.style.background = this.state.color;
    });
  };
  componentDidMount() {
    this.getRandomQuote();
  }
  randomColor = () => {
    var letters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++) {
      colory += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ color: colory });
  };

  render() {
    return (
      <div className="container ortala text-center">
        <p style={{ color: this.state.color }}>{this.state.quote}</p>
        <div className="container d-flex flex-column text-right">
          <p style={{ color: this.state.color }}>{this.state.author}</p>
        </div>{' '}
        <button
          onClick={() => {
            this.getRandomQuote();
            this.randomColor();
          }}
          className="btn  bt "
          style={{ backgroundColor: this.state.color }}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default Card;
