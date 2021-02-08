import "./App.css";
import { useState } from "react";
import Header from "./composants/Header";
import Form from "./composants/Form";
import Task from "./composants/Task";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt);

function App() {
  // Etape 1 : stocker les valeurs entrées dans l'input par l'utilisateur
  const [add, setAdd] = useState("");

  // Etape 2 : Afficher les valeurs entrées dans l'input par l'utilisateur
  const [task, setTask] = useState([]);

  return (
    <div className="container">
      <Header />
      <div className="main">
        {/* Composant pour ajouter une tâche */}
        <Form add={add} setAdd={setAdd} task={task} setTask={setTask} />
        {/* Composant pour afficher une liste de tâches */}
        <Task task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
