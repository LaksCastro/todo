import React, { useState } from "react";

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

    let buttonPressTimer
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
    function copyToClipboard() {
        const textArea = document.createElement("textarea");
        textArea.value = item.text;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }

    function handleButtonPress() {
        buttonPressTimer = setTimeout(() => copyToClipboard(item.text), 500);
    }

    function handleButtonRelease() {
        clearTimeout(buttonPressTimer);
    }

    return (
        <S.TodoWrapper
            onTouchStart={handleButtonPress}
            onTouchEnd={handleButtonRelease}
            onMouseDown={handleButtonPress}
            onMouseUp={handleButtonRelease}
            onMouseLeave={handleButtonRelease}
            background={item.marked ? "dimgrey" : "transparent"}
            key={item.id}
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
                <S.TodoMainContent>
                    <S.TodoContent
                        textDecoration={
                            item.completed ? "line-through" : "none"
                        }
                    >
                        {item.text}
                    </S.TodoContent>
                </S.TodoMainContent>

                <S.TodoToolsContainer>
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
                </S.TodoToolsContainer>
            </S.TodoContainer>
        </S.TodoWrapper>
    );
};
export default TodoItem;
