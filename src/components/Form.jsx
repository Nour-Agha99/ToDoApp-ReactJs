import React from "react";

const Form = ({
  inputText,
  setInputText,
  inputTime,
  setInputTime,
  todo,
  setTodo,
}) => {
  const onInputTextChange = (e) => setInputText(e.target.value);
  const onInputTimeChange = (e) =>
    setInputTime(e.target.value.replace(/T/, " "));
  const submitClick = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        id: Date.now().toString(36),
        title: inputText,
        time: inputTime,
        complete: false,
      },
    ]);
    setInputText("");
    setInputTime("");
  };
  return (
    <>
      <form className="form" onSubmit={submitClick}>
        <container>
          <input
            className="todo-form"
            type="text"
            name="title"
            placeholder="Enter a Todo..."
            value={inputText}
            onChange={onInputTextChange}
            required
          />
          <input
            className="time"
            name="time"
            type="datetime-local"
            value={inputTime}
            onChange={onInputTimeChange}
            required
          />
        </container>
        <button className="button" type="submit">
          Add
          <i className="fa fa-check"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
