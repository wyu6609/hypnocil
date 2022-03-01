import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewPatientForm from "./components/NewPatientForm";
import PatientList from "./components/PatientList";

function App() {
  //patientlist state
  const [patientsDirectory, setPatientsDirectory] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onAddItem = (newObj) => {
    setPatientsDirectory([...patientsDirectory, newObj]);
  };

  let updatedList = patientsDirectory.filter((el) => {
    if (el.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return el;
    } else if (searchInput == "") {
      return el;
    }
  });

  return (
    <div className="root">
      <Header setSearchInput={setSearchInput} />
      <div className="content">
        <NewPatientForm onAddItem={onAddItem} />
        <PatientList
          patientsDirectory={updatedList}
          setPatientsDirectory={setPatientsDirectory}
        />
      </div>
    </div>
  );
}

export default App;
