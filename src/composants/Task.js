import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, setTask }) => {
  // Fonction checkbox
  const clickCheck = (index) => {
    const newTask = [...task];
    newTask[index].done = !newTask[index].done;
    setTask(newTask);
  };

  // Fonction trash
  const clickTrash = (index) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };
  return task.map((task, index) => {
    return (
      <>
        <div className="box-task" key={index}>
          <input
            type="checkbox"
            checked={task.done ? true : false}
            onClick={() => clickCheck(index)}
          />
          <span className={task.done ? "task-done" : null}>{task.name}</span>
          <FontAwesomeIcon
            onClick={() => clickTrash(index)}
            className="trash"
            icon="trash-alt"
          />
        </div>
      </>
    );
  });
};

export default Task;

// Étape 1 : initialisation de la fonction lorsqu'on clic sur checkbox. On passe "done" de true à false / false à true grâce à l'index du .map qui retourne la task concernée
// Étaoe 2 : initialisation de la fonction lorsqu'on clic sur trash - méthode : .splice qui supprime la tâche concernée du tableau.
