import React, { Component } from "react";
// import Dinoimage from "./dino";

const mystyle = {
  margin: "20px",
  height: "200px",
};
class Dinogame extends Component {
  constructor(props) {
    super();

    this.Pictures = props.Pictures;
    this.logclick = props.logclick;
  }

  handleInputChange = (event) => {
    console.log("clicked");

    const { name, value } = event.target;
    console.log(value);
    this.logclick(name, value);
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>DINO GAME</h1>
        </div>
        <div className="card">
          <div className="card-body">
            {this.Pictures.map((element, index) => (
              <img
                src={element.href}
                alt={element.href}
                value={element.clicked}
                name={element.id}
                key={index}
                onClick={this.handleInputChange}
                style={mystyle}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Dinogame;
