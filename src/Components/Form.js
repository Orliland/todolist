function Form(props) {
  return (
    <form
      className="flex border-4 border-teal-800 rounded-md"
      onSubmit={props.handleAddTask}
    >
      <input
        type="text"
        className="py-4 px-6 w-full"
        value={props.value}
        placeholder="Add a task here..."
        onChange={props.handleChange}
      />
      <button
        className="bg-teal-800 px-4 hover:bg-teal-700"
        onClick={props.handleAddTask}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-6 h-6 fill-white"
        >
          <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
        </svg>
      </button>
    </form>
  );
}

export default Form;
