import React from 'react';
import TaskItem from './components/TaskItem';
import CreateItem from './components/CreateItem';

function App() {
  const [tasks, setTasks] = React.useState([
    { name: 'First task', completed: true },
    { name: 'Second task', completed: false },
    { name: 'Third task', completed: true },
  ]);

  //map just goes through array and return all array with modifications
  const taskSelect = (index) => {
    const update = (prevTasks) => {
      return prevTasks.map((task, indx) => {
        if (index === indx) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    };
    setTasks(update);
  };

  //filter select index and keep it / other delete
  const taskRemove = (index) => {
    const update = (prevTasks) => {
      return prevTasks.filter((task, indx) => {
        if (index !== indx) {
          return true;
        }
        return false;
      });
    };
    setTasks(update);
  };

  const taskCreate = (name) => {
    if (name !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          name,
          completed: false,
        },
      ]);
    } else {
      alert('Please, type a task name');
    }
  };

  //need to fix - adding at the end
  const taskEdit = (name, index) => {
    if (name !== '') {
      const update = (prevTasks) => {
        return prevTasks.map((task, indx) => {
          if (index === indx) {
            return {
              ...task,
              name: name,
            };
          }
          return task;
        });
      };
      setTasks(update);
    }
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Task list</h4>
      </div>
      <CreateItem taskCreate={taskCreate} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <TaskItem
            name={task.name}
            index={index}
            key={index}
            removedTask={taskRemove}
            selectedTask={taskSelect}
            completed={task.completed}
            taskEdit={taskEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
