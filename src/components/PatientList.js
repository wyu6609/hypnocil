import React, { useEffect } from "react";
import Patient from "./Patient";
import { v4 as uuid } from "uuid";

function PatientList({ patientsDirectory, setPatientsDirectory }) {
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:3000/patients")
      .then((resp) => resp.json())
      .then((data) => setPatientsDirectory(data));
  };
  // delete handler
  const onDeleteItem = (deletedObj) => {
    let updatedList = patientsDirectory.filter((el) => el.id !== deletedObj.id);
    setPatientsDirectory(updatedList);
  };
  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>Noted Side Effects</th>
        </tr>
        {patientsDirectory.map((patient) => {
          return (
            <Patient
              key={uuid()}
              patient={patient}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default PatientList;
