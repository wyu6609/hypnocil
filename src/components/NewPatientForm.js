import React, { useState } from "react";

function NewPatientForm({ onAddItem }) {
  //new objState
  const [newForm, setNewForm] = useState({
    name: "",
    deceased: false,
    side_effects: "",
  });

  const onChangeHandler = (event) => {
    let newObj = { ...newForm, [event.target.name]: [event.target.value] };
    setNewForm(newObj);
    console.log(newObj);
  };
  const submitBtnHandler = (event) => {
    event.preventDefault();
    //POST REQUEST
    fetch("http://localhost:3000/patients", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onAddItem(data);
      });
  };
  return (
    <>
      <form id="new-patient-form">
        <input
          id="patient-name"
          name="name"
          type="text"
          placeholder="Patient Name"
          onChange={onChangeHandler}
        />
        <select
          name="side_effects"
          id="side-effects"
          form="new-patient-form"
          onChange={onChangeHandler}
        >
          <option value="dizziness">Dizziness</option>
          <option value="nausea">Nausea</option>
          <option value="somnambulism">Somnambulism</option>
          <option value="memory">Memory</option>
          <option value="allergy">Severe Allergic Reaction</option>
          <option value="headache">Headache</option>
        </select>
        <input type="submit" value="Add Patient" onClick={submitBtnHandler} />
      </form>
    </>
  );
}

export default NewPatientForm;
