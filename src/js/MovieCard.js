import React from 'react';

const MovieCard = ({title, imgUrl, rating, releaseDate, ticketLink, description}) => (
  <div style={styles.border}>
    <h4>{title}</h4>
    <hr/>
    <div className="row">
      <img style={styles.img} className="col-xs-5" src={imgUrl} alt={title}/>
      <p className="col-xs-6">Release Date: {releaseDate} Rating:{rating}</p>
      <p style={styles.text} className="col-xs-6">{description}</p>
    </div>
    <hr/>
    <section style={styles.form} className="row container-fluid">
      <div className="range range-primary">
        <input id="slider" type="range" className="range" min="1" max="13" value="7" onChange={renderRatings}/>
        <output id="rangePrimary">C</output>
      </div>
      <textarea
        className="col-xs-12"
        id="ta"
        cols="30"
        rows="8"
        defaultValue="leave a short comment here if you want to..."/>
      <input type="submit" className="btn btn-default"/>
    </section>
    <hr/>
    <section style={styles.footer}>
      <a href={ticketLink}>Click Here to buy Movie Tickets</a>
    </section>
  </div>
)

var styles = {
  border: {
    border: "1px solid #ccc",
    margin: "10px 5px",
    background: "white"
  },
  text: {
    textAlign: "left"
  },
  img: {
    marginLeft: "3px"
  },
  footer: {
    padding: "10px 5px"
  },
  form: {
    marginleft: "10px",
    marginRight: "10px",
    flexDiretion: "row",
    justifyContent: "center",
  },
  flexChild: {
    flexGrow: "2"
  }
};

function renderRatings(e) {
  var idx = e.target.value;
  var ratings = [
    'A+', 'A', 'A-',
    'B+', 'B', 'B-',
    'C+', 'C', 'C-',
    'D+', 'D', 'D-',
    'F'];

  e.target.nextSibling.textContent = ratings[13 - idx]
}
export default MovieCard;
