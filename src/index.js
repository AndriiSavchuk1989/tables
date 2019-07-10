import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function TableCell(props) {
  const { data, isEditable, editFunc } = props;
  const isEditableCell = isEditable ? "enable-to-edit" : "unable-to-edit";
  return (
    <td onClick={editFunc} className={isEditableCell}>
      {data}
    </td>
  );
}

function tableRowCreator(listOfRows) {
  const count = listOfRows.length;
  console.log(count);
}

tableRowCreator();

function TableRow(props) {
  const { cells, editFunc } = props;
  return (
    <tr>
      {cells.map(cell =>
        cell.map(item => (
          <TableCell
            data={item.value}
            isEditable={item.isEditable}
            editFunc={editFunc}
          />
        ))
      )}
    </tr>
  );
}

function Table(props) {
  const { list, editFunc } = props;
  return (
    <table>
      <tbody>
        {list.map(listItem => (
          <TableRow cells={list} editFunc={editFunc} key={listItem.value} />
        ))}
      </tbody>
    </table>
  );
}

class TableWrapper extends React.Component {
  editCell = event => {
    console.log(event.target.className);
  };

  render() {
    return <Table list={lists} editFunc={this.editCell} />;
  }
}

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
      value: "7",
      id: 6,
      isEditable: true
    },
    {
      value: "8",
      id: 7,
      isEditable: true
    },
    {
      value: "9",
      id: 8,
      isEditable: true
    },
    {
      value: "10",
      id: 9,
      isEditable: true
    },
    {
      value: "11",
      id: 10,
      isEditable: true
    },
    {
      value: "12",
      id: 11,
      isEditable: true
    }
  ]
];

const rootElement = document.getElementById("root");
ReactDOM.render(<TableWrapper />, rootElement);
