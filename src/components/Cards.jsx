import React from "react";
import editImage from "../images/edit.png";
import delImage from "../images/del.png";

const Card = ({
  inputText,
  setInputText,
  inputTime,
  setInputTime,
  todo,
  setTodo,
}) => {
  const color = (number) => {
    const colors = ["#f02929", "#ff9800", "#2954f0", "#4ef029"];
    return colors[number % 4];
  };
  const deleteHandle = (id) => {
    setTodo(todo.filter((target) => target.id !== id));
  };

  const checkHandle = (id) => {
    setTodo(
      todo.map((target) => {
        return target.id === id && target.complete === false
          ? { ...target, complete: true }
          : target.id === id && target.complete === true
          ? { ...target, complete: false }
          : target;
      })
    );
  };

  const editHandle = (id) => {
    const myTodo = todo.find((target) => target.id === id);
    setInputText(myTodo.title);
    setInputTime(myTodo.time);
    setTodo(todo.filter((target) => target.id !== id));
  };

  return (
    <page>
      {todo.map((obj, i) => {
        return (
          <div className="parent">
            <>
              <div
                className="after-checklist"
                style={{ backgroundColor: color(i) }}
              ></div>
              <div id="checklist">
                <input
                  value="1"
                  name="r"
                  type="checkbox"
                  id={obj.id}
                  checked={obj.complete}
                  onChange={() => checkHandle(obj.id)}
                />
                <label htmlFor={obj.id}>
                  <art>{obj.title}</art>
                  <time>{obj.time}</time>
                  <pro>
                    <img
                      src={editImage}
                      alt="editImage"
                      onClick={(e) => {
                        e.preventDefault();
                        !obj.complete && editHandle(obj.id);
                      }}
                    />
                    <img
                      src={delImage}
                      alt="delImage"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteHandle(obj.id);
                      }}
                    />
                  </pro>
                </label>
              </div>
            </>
          </div>
        );
      })}
    </page>
  );
};

export default Card;
