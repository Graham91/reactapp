import React, { Component } from "react";
import Dinogame from "./components/HelloBootstrap";

class App extends Component {
  state = {
    Pictures: [
      {
        id: 1,
        clicked: true,
        href: "https://i.imgur.com/LFXgB63.png",
      },
      {
        id: 2,
        clicked: true,
        href: "https://i.imgur.com/g7WSe8Y.png",
      },
      {
        id: 3,
        clicked: true,
        href: "https://i.imgur.com/Nmiy4b4.png",
      },
      {
        id: 4,
        clicked: true,
        href: "https://i.imgur.com/sqHLxRM.png",
      },
    ],
  };

  logclick = (name, value) => {
    console.log("running");
    console.log(name, value);
    let newitem = {};
    let newarray = [];
    this.state.Pictures.forEach((element) => {
      if (name === element.id) {
        if (value === true) {
          newitem.clicked = false;
          newitem.id = name;
          newitem.href = element.href;
          newarray.push(newitem);
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
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newarray[i];
      newarray[i] = newarray[j];
      newarray[j] = temp;
    }

    this.setState({ links: newarray });
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
