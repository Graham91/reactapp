import React, { Component } from "react";
import Dinogame from "./components/HelloBootstrap";

class App extends Component {
  state = {
    youfoundthemall: 0,
    wins: 0,
    pictures: [
      {
        id: 1,
        clicked: "elbow",
        href: "https://i.imgur.com/LFXgB63.png",
      },
      {
        id: 2,
        clicked: "elbow",
        href: "https://i.imgur.com/g7WSe8Y.png",
      },
      {
        id: 3,
        clicked: "elbow",
        href: "https://i.imgur.com/Nmiy4b4.png",
      },
      {
        id: 4,
        clicked: "elbow",
        href: "https://i.imgur.com/sqHLxRM.png",
      },
    ],
  };
  logclick = (name, value) => {
    let newnumber = this.state.youfoundthemall;
    let newwins = this.state.wins;
    if (this.state.youfoundthemall === 4) {
      alert("You found them all! And the game just reset!");
      let finishedarray = [];
      this.state.pictures.forEach((element) => {
        let finalrestelement = {};
        finalrestelement.clicked = "elbow";
        finalrestelement.href = element.href;
        finalrestelement.id = element.id;
        finishedarray.push(finalrestelement);
      });
      console.log(finishedarray);
      newwins++;
      this.setState({
        pictures: finishedarray,
        youfoundthemall: 0,
        wins: newwins,
      });
    } else {
      let newitem = {};
      let newarray = [];
      this.state.pictures.forEach((element) => {
        let name2 = parseInt(name);
        if (name2 === element.id) {
          if (value === "elbow") {
            newitem.id = name2;
            newitem.clicked = "knee";
            newitem.href = element.href;
            newarray.push(newitem);
            alert("nice");
            newnumber++;
          } else {
            alert("bad");
            newitem.id = name2;
            newitem.clicked = "knee";
            newitem.href = element.href;
            newarray.push(newitem);
          }
        } else {
          newarray.push(element);
        }
      });

      // const newLinks = this.state.links.concat(bookmark);
      for (var i = newarray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = newarray[i];
        newarray[i] = newarray[j];
        newarray[j] = temp;
      }
      console.log(newarray);

      this.setState({ pictures: newarray, youfoundthemall: newnumber });
      console.log(this.state);
    }
  };

  handleInputChange = (event) => {
    const eventTarget = event.target;
    console.log(eventTarget);
    let nameofimg = eventTarget.name;
    let value = eventTarget.alt;
    console.log(value);
    this.logclick(nameofimg, value);
  };

  // deleteBookmark = (bookmarkIndex) => {
  //   const newLinks = this.state.links.filter(function (link, index) {
  //     return index !== bookmarkIndex;
  //   });

  //   this.setState({ links: newLinks });
  // };

  render() {
    return (
      <div className="container">
        <Dinogame
          pictures={this.state.pictures}
          logclick={this.logclick}
          function12={this.handleInputChange}
          wins={this.state.wins}
        />
      </div>
    );
  }
}

export default App;
