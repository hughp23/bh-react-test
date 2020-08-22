import React, { Component } from "react";
// import InputRange from "react-input-range";
import "../style/_sideBar.scss";
// import { render } from "@testing-library/react";

class SideBar extends Component {
  state = {
    buttons: [
      { sort: "AZ&ASC", text: "A - Z", checked: "checked" },
      { sort: "AZ&DESC", text: "Z - A", checked: "" },
      { sort: "Price&ASC", text: "Low - High", checked: "" },
      { sort: "Price&DESC", text: "High - Low", checked: "" }
    ]
  };
  render() {
    const { buttons } = this.state;
    return (
      <div>
        <h2>Filter Search Results</h2>
        <section>
          {/* <InputRange
          maxValue={20}
          minValue={0}
          // value={this.state.value}
          onChange={value => console.log(value, "slider value")}
        /> */}
          <div>
            {/* <input type="radio" value="A - Z" />
          <input type="radio" value="Z - A" />
          <input type="radio" value="High - Low" />
          <input type="radio" value="Low - High" /> */}
            <ul>
              {buttons.map((button, i) => {
                return (
                  <li key={i} className="flex-box">
                    <button
                      onClick={() => this.chooseSort(i, button.sort)}
                      className={button.checked}
                    >
                      {button.text}
                    </button>
                  </li>
                );
              })}
              {/* <li className="flex-box">
                <button className="checked">A - Z</button>
              </li>
              <li className="flex-box">
                <button>Z - A</button>
              </li>
              <li className="flex-box">
                <button>High - Low</button>
              </li>
              <li className="flex-box">
                <button>Low - High</button>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    );
  }

  chooseSort = (i, sort) => {
    const { handleSearch, inputValue } = this.props;
    const { buttons } = this.state;
    handleSearch(inputValue, sort);
    for (let j = 0; j < buttons.length; j++) {
      console.log(i, "i");
      console.log(j, "j");
      if (j === i) {
        buttons[j].checked = "checked";
      } else {
        buttons[j].checked = "";
      }
    }
    this.setState({ buttons });
  };
}

export default SideBar;
