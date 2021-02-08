const Form = ({ add, setAdd, task, setTask }) => {
  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (add.length <= 0) {
            alert("You have to add your task!");
          } else {
            const newTask = [...task];
            newTask.push({ name: add, done: false });
            setTask(newTask);
            setAdd("");
          }
        }}
      >
        <input
          type="text"
          name="task"
          value={add}
          onChange={(event) => {
            setAdd(event.target.value);
          }}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default Form;

// Étape 1 : initialisation du comportement d'ajout d'une tâche à sa soumission - méthode : preventDefault() + spread qui copie et pousse les tâches ajoutées dans un nouveau tableau.
// Étaoe 2 : manipulation des données ajoutées dans l'input - méthode : onChange qui détecte lorsque la valeur d'un élément est modifiée.
