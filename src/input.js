import React from "react";

export class EditableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initialValue: 0, previousValue: 0 };
  }

  componentDidMount() {
    this.setState({
      initialValue: this.props.initialValue,
      previousValue: this.props.initialValue
    });
  }

  inputHandlerChange = event => {
    console.log(event.target.value);
    this.setState({ initialValue: event.target.value });
  };

  returnPreviousValue = value => {
    console.log("you had not change anything");
    this.setState({ initialValue: value });
  };

  onMouseOutHandler = event => {
    if (!event.target.value) {
      this.returnPreviousValue(this.state.previousValue);
    }
  };

  render() {
    const { onClickHandler = null } = this.props;
    console.log(this.state);
    return (
      <input
        type="text"
        value={this.state.initialValue}
        onClick={onClickHandler}
        onChange={this.inputHandlerChange}
        onMouseOut={this.onMouseOutHandler}
      />
    );
  }
}
