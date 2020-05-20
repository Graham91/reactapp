import React from "react";
// import Dinoimage from "./dino";

const mystyle = {
  margin: "20px",
  height: "200px",
};
function Dinogame(props) {
  //  handleInputChange = (event) => {
  //     console.log("clicked");

  // const eventTarget = event.target;
  // let value;

  // let name = eventTarget.name;
  // for (let i = 0; i < this.pictures.length; i++) {
  //   if (this.pictures[i].id === parseInt(name)) {
  //     value = this.pictures[i].clicked;
  //   }
  // }
  // console.log(value);
  // this.logclick(name, value);
  // };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>DINO GAME</h1>
        <h2>WINS: {props.wins}</h2>
      </div>
      <div className="card">
        <div className="card-body">
          {props.pictures.map((element, index) => (
            <img
              src={element.href}
              alt={element.clicked}
              name={element.id}
              onClick={props.function12}
              key={index}
              style={mystyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// class Dinogame extends Component {
//   constructor(props) {
//     super(props);

//     this.pictures = props.pictures;
//     this.logclick = props.logclick;
//   }

//   handleInputChange = (event) => {
//     console.log("clicked");

//     const eventTarget = event.target;
//     let value;

//     let name = eventTarget.name;
//     for (let i = 0; i < this.pictures.length; i++) {
//       if (this.pictures[i].id === parseInt(name)) {
//         value = this.pictures[i].clicked;
//       }
//     }
//     console.log(value);
//     this.logclick(name, value);
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="jumbotron">
//           <h1>DINO GAME</h1>
//         </div>
//         <div className="card">
//           <div className="card-body">
//             {this.pictures.map((element, index) => (
//               <img
//                 src={element.href}
//                 alt={element.href}
//                 name={element.id}
//                 onClick={this.handleInputChange}
//                 key={index}
//                 style={mystyle}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default Dinogame;
