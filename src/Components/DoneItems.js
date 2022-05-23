const Items = (props) => {
  const { tasksToDo } = props;
  if (
    tasksToDo.filter((element) => {
      return element.done === true;
    }).length === 0
  ) {
    return (
      <div className="my-4 p-2 font-bold text-center">
        There are no completed tasks
      </div>
    );
  } else {
    return tasksToDo.map((element, index) => {
      if (element.done === true) {
        return (
          <div className="flex gap-1 bg-teal-800 px-6 py-3 rounded" key={index}>
            <p className="w-full text-white truncate">{element.title}</p>
            <button
              className="bg-white hover:bg-slate-300 rounded-full p-1"
              onClick={() => props.handleCheckTask(index, false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 h-4 fill-teal-800"
              >
                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
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

function DoneItems(props) {
  const { tasksToDo, handleCheckTask } = props;

  return (
    <section className="pt-8 border-t-2 border-teal-400 flex flex-col gap-6">
      <Items tasksToDo={tasksToDo} handleCheckTask={handleCheckTask} />
    </section>
  );
}

export default DoneItems;
