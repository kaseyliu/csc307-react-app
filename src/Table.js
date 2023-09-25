import React from "react";

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

function TableBody(props) {
    // return table row for each object in the array
    const rows = props.characterData && props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    }
    );
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData}/>
    </table>
  );
}

export default Table;