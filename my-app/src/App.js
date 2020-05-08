import React, { Component } from "react";
import Dinogame from "./components/HelloBootstrap";

class App extends Component {
  state = {
    Pictures: [
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
    let newitem = {};
    let newarray = [];
    this.state.Pictures.forEach((element) => {
      console.log(element.id);
      console.log(name);
      let name2 = parseInt(name);
      if (name2 === element.id) {
        if (value === "elbow") {
          newitem.id = name2;
          newitem.clicked = "knee";
          newitem.href = element.href;
          newarray.push(newitem);
          console.log(newitem);
          alert("nice");
        } else {
          alert("bad");
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

    this.setState({ Pictures: newarray });
    console.log(this.state);
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
        <Dinogame Pictures={this.state.Pictures} logclick={this.logclick} />
      </div>
    );
  }
}

export default App;
