import React from "react";

import { useDispatch } from "react-redux";
import { Types as TypesTodo } from "../../store/ducks/todo";

import { RadioCircleMarked as Marked } from "styled-icons/boxicons-regular/RadioCircleMarked";
import { RadioCircle as Unmarked } from "styled-icons/boxicons-regular/RadioCircle";

import { Checkbox as Uncompleted } from "styled-icons/boxicons-regular/Checkbox";
import { CheckboxChecked as Completed } from "styled-icons/boxicons-regular/CheckboxChecked";

import { Trash as Remove } from "styled-icons/boxicons-regular/Trash";
import { EditAlt as Edit } from "styled-icons/boxicons-regular/EditAlt";

import { db } from "../../firebase";

import * as S from "./styled";

const TodoItem = ({ item, setEdit, updateInput }) => {
    const dispatch = useDispatch();

    //TODO ITEM ACTION
    function handleToggleMarked(item) {
        dispatch({
            type: TypesTodo.UPDATE_TODO,
            payload: {
                newTodo: {
                    ...item,
                    marked: !item.marked
                }
            }
        });
    }

    function handleRemoveTodo(item) {
        db.collection("todo")
            .doc(item.id)
            .delete();
    }
    function handleToggleCompleted(item) {
        db.collection("todo")
            .doc(item.id)
            .update({
                completed: !item.completed
            });
    }
    function copyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = item.text;
        textArea.style.position = "fixed"; //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }

    return (
        <S.TodoWrapper
            background={item.marked ? "dimgrey" : "transparent"}
            key={item.id}
            onClick={() => copyToClipboard(item.text)}
        >
            <S.TodoContainer
                borderColor={
                    item.marked
                        ? "white"
                        : item.completed
                        ? "#79B538"
                        : "#dd5145"
                }
            >
                <S.TodoIconBox
                    color={
                        item.marked
                            ? "white"
                            : item.completed
                            ? "#79B538"
                            : "#dd5145"
                    }
                    onClick={() => handleToggleMarked(item)}
                    title="Toggle marked"
                >
                    {item.marked ? <Marked /> : <Unmarked />}
                </S.TodoIconBox>
                <S.TodoContent
                    textDecoration={item.completed ? "line-through" : "none"}
                >
                    {item.text}
                </S.TodoContent>
                <S.TodoIconBox onClick={() => setEdit(item)}>
                    <Edit />
                </S.TodoIconBox>
                <S.TodoIconBox
                    onClick={() => handleRemoveTodo(item)}
                    title="Remove"
                >
                    <Remove />
                </S.TodoIconBox>
                <S.TodoIconBox
                    color={
                        item.marked
                            ? "white"
                            : item.completed
                            ? "#79B538"
                            : "#dd5145"
                    }
                    onClick={() => handleToggleCompleted(item)}
                    title="Toggle completed"
                >
                    {item.completed ? <Completed /> : <Uncompleted />}
                </S.TodoIconBox>
            </S.TodoContainer>
        </S.TodoWrapper>
    );
};
export default TodoItem;
