import React from 'react';
import _ from 'ramda';
import MovieCard from './MovieCard'
import UserCard from './UserCard'

var {floor, random} = Math;
// Create class called HelloText that extends the base React Component class
var mapI = _.addIndex(_.map);
const Feed = ({title, cardData, friendsFeed}) => {
  if(friendsFeed) {
    var url = cardData.photos[floor( random()*10 )]
    var cards = _.map( ({id, name}) => {
      return (<UserCard
        key={id}
        num={id}
        name={name}
        url={url}
        >
        </UserCard>)
    })(cardData.users)
  } else {
    var cards = mapI( ({title, imgUrl, rating, releaseDate, ticketLink, description}, i) => (
      <MovieCard
      title={title}
      imgUrl={imgUrl}
      rating={rating}
      releaseDate={releaseDate}
      ticketLink={ticketLink}
      description={description}
      key={i}>
      </MovieCard>
    ))(cardData)
  }

  return (
    <div>
      <h2>{title}</h2>
      {cards}
    </div>
  )
};
export default Feed;
