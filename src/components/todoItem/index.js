import React, { useState } from "react";

import { Types as TypesToast } from "../../store/ducks/toast"
import { useDispatch, useSelector } from "react-redux";

import { Checkbox as Uncompleted } from "styled-icons/boxicons-regular/Checkbox";
import { CheckboxChecked as Completed } from "styled-icons/boxicons-regular/CheckboxChecked";

import { Trash as Remove } from "styled-icons/boxicons-regular/Trash";
import { EditAlt as Edit } from "styled-icons/boxicons-regular/EditAlt";

import { db } from "../../firebase";

import * as S from "./styled";

const TodoItem = ({ item, setEdit }) => {
    const dispatch = useDispatch();
    const { isVisible } = useSelector(state => state.toast);
    let buttonPressTimer

    const [confirm, setConfirm] = useState({
        visible: false,
        onConfirm: deleteTodo,
        onCancel: () => {
            setConfirm({
                ...confirm,
                visible: false
            });
        }
    });

    function deleteTodo() {
        console.log("chego aq")
        db.collection("todo")
            .doc(item.id)
            .delete();
    }

    //TODO ITEM ACTION
    function handleRemoveTodo() {
        setConfirm({
            ...confirm,
            visible: true
        });
    }
    function handleToggleCompleted() {
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
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }

    function handleButtonPress() {
        buttonPressTimer = setTimeout(onLongPress, 500);
    }
    function onLongPress() {
        copyToClipboard(item.text);
        if (isVisible) return;
        dispatch({
            type: TypesToast.REQUEST_MESSAGE,
            payload: {
                message: "Copied"
            }
        });
    }
    function handleButtonRelease() {
        clearTimeout(buttonPressTimer);
    }

    function onConfirmDelete() {
        confirm.onConfirm();
    }
    function onCancelDelete() {
        confirm.onCancel();
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
                    item.completed
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

                <S.TodoToolsWrapper>
                    <S.TodoToolsContainer>
                        <S.TodoIconBox
                            color={
                                item.completed
                                    ? "#79B538"
                                    : "#dd5145"
                            }
                            onClick={handleToggleCompleted}
                            title="Toggle completed"
                        >
                            {item.completed ? <Completed /> : <Uncompleted />}
                        </S.TodoIconBox>
                        <S.TodoIconBox onClick={() => setEdit(item)}>
                            <Edit />
                        </S.TodoIconBox>
                        <S.TodoIconBox
                            className={confirm.visible ? "hide" : "visible"}
                            onClick={handleRemoveTodo}
                            title="Remove"
                        >
                            <Remove />
                        </S.TodoIconBox>
                    </S.TodoToolsContainer>
                    <S.TodoButtonsWrapper>
                        <S.TodoButton color="#f1f1f1" onClick={onCancelDelete} className={confirm.visible ? "visible" : "hide"}>
                            Cancel
                        </S.TodoButton>
                        <S.TodoButton color="#fff" background="#DD5145" onClick={onConfirmDelete} className={confirm.visible ? "visible" : "hide"}>
                            Confirm
                        </S.TodoButton>
                    </S.TodoButtonsWrapper>
                </S.TodoToolsWrapper>

            </S.TodoContainer>
        </S.TodoWrapper>
    );
};
export default TodoItem;
