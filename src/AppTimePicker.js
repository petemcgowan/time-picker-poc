import React, { Component } from "react";
import "./App.css";
import Picker from "react-mobile-picker";

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

class AppTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        title: "Mr.",
        firstName: "Micheal",
        secondName: "Jordan",
      },
      optionGroups: {
        title: ["Mr.", "Mrs.", "Ms.", "Dr."],
        firstName: ["John", "Micheal", "Elizabeth"],
        secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"],
      },
    };
  }

  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value,
      },
    }));
  };

  render() {
    const { optionGroups, valueGroups } = this.state;

    return (
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange}
      />
    );
  }
}

export default AppTimePicker;
