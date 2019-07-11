import React from "react";
import ReactDOM from "react-dom";

//
import { EditableInput } from "./input";

import "./styles.css";

const lists = [
  [
    {
      value: "1",
      id: 0,
      isEditable: true
    },
    {
      value: "2",
      id: 1,
      isEditable: false
    },
    {
      value: "3",
      id: 2,
      isEditable: true
    },
    {
      value: "4",
      id: 3,
      isEditable: true
    },
    {
      value: "5",
      id: 4,
      isEditable: true
    },
    {
      value: "6",
      id: 5,
      isEditable: true
    }
  ],
  [
    {
      value: "6",
      id: 6,
      isEditable: true
    },
    {
      value: "5",
      id: 7,
      isEditable: true
    },
    {
      value: "4",
      id: 8,
      isEditable: true
    },
    {
      value: "3",
      id: 9,
      isEditable: true
    },
    {
      value: "2",
      id: 10,
      isEditable: true
    },
    {
      value: "1",
      id: 11,
      isEditable: true
    }
  ]
];

function TableCell(props) {
  const { data, isEditable, editFunc, changeFunc, onTrackChange } = props;
  const isEditableCell = isEditable ? "enable-to-edit" : "unable-to-edit";
  return (
    <td
      onClick={editFunc}
      onChange={changeFunc}
      onMouseOut={onTrackChange}
      className={isEditableCell}
    >
      {data}
      {isEditable && <EditableInput initialValue={data} />}
    </td>
  );
}

function tableRowCreator(
  listOfCells = [],
  func = null,
  change = null,
  track = null
) {
  return (
    <tr>
      {listOfCells.map(cell => (
        <TableCell
          data={cell.value}
          key={cell.value}
          editFunc={func}
          changeFunc={change}
          isEditable={cell.isEditable}
          onTrackChange={event => track(event)}
        />
      ))}
    </tr>
  );
}

function Table(props) {
  const { list, editFunc, onChangeFunc, onTrackChange } = props;
  return (
    <table>
      <tbody>
        {list.map(listItem =>
          tableRowCreator(listItem, editFunc, onChangeFunc, onTrackChange)
        )}
      </tbody>
    </table>
  );
}

class TableWrapper extends React.Component {
  state = { cellData: "" };
  editCell = event => {
    console.log(event.target.className);
    const { value, nodeName } = event.target;
    if (nodeName === "INPUT") {
      this.onTrackChange(value);
    }
  };

  editInputHandlerClick = event => {
    console.log("edit input click", event.target);
  };

  editInputHandlerChange = event => {
    console.log("edit input change", event.target);
  };

  onTrackChange = value => {
    console.log("tracking change___", value);
    this.setState({ cellData: value });
  };

  render() {
    console.log("state from wrapper___", this.state.cellData);
    return (
      <Table
        list={lists}
        editFunc={this.editCell}
        onChangeFunc={this.editInputHandlerChange}
        onTrackChange={this.onTrackChange}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TableWrapper />, rootElement);
