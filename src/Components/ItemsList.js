const Items = (props) => {
  const { tasksToDo } = props;
  if (
    tasksToDo.filter((element) => {
      return element.done === false;
    }).length === 0
  ) {
    return <div>There are no tasks to do</div>;
  } else {
    return tasksToDo.map((element, index) => {
      if (element.done === false) {
        return (
          <div key={index}>
            <p>{element.title}</p>
            <button onClick={() => props.handleCheckTask(index, true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 h-4"
              >
                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
              </svg>
            </button>
            <button onClick={() => props.handleDeleteTask(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z" />
              </svg>
            </button>
          </div>
        );
      } else {
        return null;
      }
    });
  }
};

function ItemsList(props) {
  const { tasksToDo, handleCheckTask, handleDeleteTask } = props;

  return (
    <section>
      <Items
        tasksToDo={tasksToDo}
        handleCheckTask={handleCheckTask}
        handleDeleteTask={handleDeleteTask}
      />
    </section>
  );
}

export default ItemsList;
