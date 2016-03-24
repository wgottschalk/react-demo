import React from 'react';
import Feed from './MovieList';
import {Map} from 'immutable';
import Nav from './Nav.jsx';
import $ from 'jquery';
import {pages} from './../../movies.json';
import _ from 'ramda';
import Promise from 'bluebird'

var mapAndIndex = _.addIndex(_.map)
var dummyJSON = mapAndIndex( (data, idx) => structureData(data, idx) )(pages);
var root = 'http://jsonplaceholder.typicode.com';
// Create class called HelloBox that extends the base React Component class


var App = React.createClass({
  getInitialState() {
    return {
      activeFeed: dummyJSON[0],
      friendsFeed: false
    }
  },
  componentDidMount(){
    if(!localStorage.getItem('data')) {
      var routes = ['users', 'photos', 'posts', 'comments']
      var proms = [];
      routes.forEach(route => {
        proms.push($.get(root + "/" + route));
      });
      Promise.all(proms).then(dataArray => {
        var cards = {};
        dataArray.forEach((info, index) => {
          cards[routes[index]] = info;
        });
        dummyJSON.push({
          category: 'Friends Feed',
          cards: cards
        });
        localStorage.setItem('data', JSON.stringify(dummyJSON));
      });
    }
  },

  changeFeed(e) {
    switch (e.target.textContent.trim()) {
      case "Now Playing":
        this.setState({
          activeFeed: JSON.parse(localStorage.getItem('data'))[0],
          friendsFeed: false
        });
        break;
      case "Coming Soon":
        this.setState({
          activeFeed: JSON.parse(localStorage.getItem('data'))[1],
          friendsFeed: false
        });
        break;
      case "Friends Feed":
        this.setState({
          activeFeed: JSON.parse(localStorage.getItem('data'))[2],
          friendsFeed: true
        });
        break;
    }
  },

  render() {
    var {data} = this.state;
    return (
      <div>
        <Nav
          changeFeed={this.changeFeed}>
        </Nav>
        <div className="spacer" style={styles.spacer}></div>
        <div className="container">
          <Feed
            title={this.state.activeFeed.category}
            cardData={this.state.activeFeed.cards}
            friendsFeed={this.state.friendsFeed}
            changeFeed={this.changeFeed}>
          </Feed>
        </div>
      </div>
    )
  }
})

export default App;
















// HELPER FUNCTIONS

function structureData({results}, index) {
  var output = {
    category: index === 0 ? "New Releases" : "Coming Soon"
  };
  output.cards = _.map( obj => {
    return {
      imgUrl: obj.movieposter_image,
      title: obj.wrapper_value,
      ticketLink: obj.gettickets_link,
      description: "This is a description of the movie. It is a couple of sentences long and should cut off at a certain point",
      releaseDate: obj.available_value,
      rating: Math.ceil(Math.random() * 10)
    }
  })(results)
  return output;
};

var styles = {
  spacer: {
    height: '38px'
  }
}
