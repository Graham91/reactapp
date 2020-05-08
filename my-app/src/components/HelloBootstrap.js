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

    const eventTarget = event.target;
    let value;

    let name = eventTarget.name;
    for (let i = 0; i < this.Pictures.length; i++) {
      if (this.Pictures[i].id === parseInt(name)) {
        value = this.Pictures[i].clicked;
      }
    }
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
                name={element.id}
                // burrito={element.clicked}S
                onClick={this.handleInputChange}
                key={index}
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
