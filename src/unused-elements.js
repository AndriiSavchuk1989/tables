export function TableRow(props) {
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
