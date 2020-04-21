import React from "react";

import { useSelector } from "react-redux";

import { db } from "../../firebase";

import { toast } from "react-toastify";

import * as S from "./styled";

const UpdateTodo = ({ edit, setEdit }) => {
  const todoData = useSelector((state) => state.todo.data);

  function todoExists(todo) {
    return todoData.filter((item) => item.id === todo.id).length !== 0
      ? true
      : false;
  }
  function handleUpdateTodo(todo) {
    if (!todoExists(todo)) {
      toast.error("This To Do does not exist :(");
      return;
    }

    db.collection("todo").doc(todo.id).update({
      text: todo.text,
    });
  }
  return (
    <>
      <S.UpdateContainer visible={!!edit}>
        <textarea
          type="text"
          value={(edit && edit.text) || ""}
          onChange={(e) => setEdit({ ...edit, text: e.target.value })}
          placeholder="Type anything..."
        />
        <S.UpdateFlexButton>
          <S.UpdateButton
            onClick={() => setEdit(null)}
            background="#DD5145"
            type="button"
          >
            Cancel
          </S.UpdateButton>
          <S.UpdateButton
            onClick={() => {
              handleUpdateTodo(edit);
              setEdit(null);
            }}
            background="#79b538"
            type="button"
          >
            Save
          </S.UpdateButton>
        </S.UpdateFlexButton>
      </S.UpdateContainer>
      <S.UpdateClose visible={!!edit}></S.UpdateClose>
    </>
  );
};

export default UpdateTodo;
