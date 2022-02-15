import React, { Component } from "react";
import "./App.css";
// import Picker from "react-mobile-picker";
// import "spring-picker/lib/style.css";
// import { Picker, Popup } from "spring-picker";
import BirthPicker from "./BirthPicker";
import NamePicker from "./NamePicker";
import "./example.css";
import "./style.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     valueGroups: {
  //       title: "Mr.",
  //       firstName: "Micheal",
  //       secondName: "Jordan",
  //     },
  //     optionGroups: {
  //       title: ["Mr.", "Mrs.", "Ms.", "Dr."],
  //       firstName: ["John", "Micheal", "Elizabeth"],
  //       secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"],
  //     },
  //   };
  // }

  // // Update the value in response to user picking event
  // handleChange = (name, value) => {
  //   this.setState(({ valueGroups }) => ({
  //     valueGroups: {
  //       ...valueGroups,
  //       [name]: value,
  //     },
  //   }));
  // };

  render() {
    // const { optionGroups, valueGroups } = this.state;

    return (
      <div className="page">
        <header className="page-header">
          <h1 className="page-title">React Mobile Picker</h1>
        </header>
        <main className="page-body">
          <p className="description">
            React Mobile Picker is a super simple component with no restriction,
            which means you can use it in any way you want.
          </p>
          <p className="description">Here are two examples:</p>
          <NamePicker />
          <BirthPicker />
        </main>
      </div>
    );
  }
}

export default App;
