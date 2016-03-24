import React from 'react';
var {random, floor} = Math;
const UserCard = ({name, url, num}) => {
  var ratings = [
    'A+', 'A', 'A-',
    'B+', 'B', 'B-',
    'C+', 'C', 'C-',
    'D+', 'D', 'D-',
    'F'
  ]
  return (
    <div className="card container-fluid" style={styles.card}>
      <header className="row">
        <img src={"https://lorempixel.com/50/50/people/" + num} className="col-xs-4" style={styles.img}/>
        <h4 className="col-xs-8">{name}</h4>
      </header>
      <hr/>
      <section className="row container">
        <p>{name} rated the movie "The Movie" a rating of: {ratings[ floor(random()*13 ) ]}</p>
        <p>This is the comment section of the movie This is where the user can leave a twitter sized comment about the movie. Must be kept short and sweet because nobody wants to read a novel of movie spoilers.</p>
      </section>
      <hr/>
      <footer className="row">
        <button className="btn btn-default col-xs-6">I agree</button>
        <button className="btn btn-default col-xs-6">I disagree</button>
      </footer>
    </div>
  )
}

var styles = {
  img: {
    height: "50px",
    width: "50px",
    marginLeft: "15px",
    marginTop: "10px",
    padding: "0",
    borderRadius: "50"
  },
  card: {
    margin: "10px 5px",
    border: "1px solid #ccc",
    background: "white"
  }
}

export default UserCard
