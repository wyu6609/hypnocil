import React from "react";

function Patient({ patient, onDeleteItem }) {
  //deleteBtnHandler
  const deleteBtnHandler = () => {
    //DELETE REQUEST
    fetch(`http://localhost:3000/patients/${patient.id}`, {
      method: "DELETE",
    }).then(() => onDeleteItem(patient));
  };
  return (
    <tr className="">
      <td>
        <button onClick={deleteBtnHandler}>Delete</button>
      </td>
      <td>{patient.id}</td>
      <td>{patient.name}</td>
      <td>{patient.side_effects}</td>
    </tr>
  );
}

export default Patient;
