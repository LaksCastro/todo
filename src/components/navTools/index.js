import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Types as TypesTodo } from "../../store/ducks/todo";

import { ErrorCircle as RemoveMarked } from "styled-icons/boxicons-regular/ErrorCircle";
import { CheckCircle as RemoveCompleted } from "styled-icons/boxicons-regular/CheckCircle";
import { BoltCircle as ToggleMarked } from "styled-icons/boxicons-regular/BoltCircle";

import { db } from "../../firebase";
import styled from "styled-components";

import NavToolItem from "../navToolItem";

import { toast } from "react-toastify";

const NavTools = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const NavToolsComponent = () => {
    const todoData = useSelector(state => state.todo.data);

    const dispatch = useDispatch();

    function handleRemoveAllCompleted() {
        toast.info("All completed To Do's are removed!");
        todoData.forEach(item => {
            if (item.completed) {
                db.collection("todo")
                    .doc(item.id)
                    .delete();
            }
        });
    }
    function handleRemoveAllMarked() {
        toast.info("All marked To Do's are removed!");
        todoData.forEach(item => {
            if (item.marked) {
                db.collection("todo")
                    .doc(item.id)
                    .delete();
            }
        });
    }
    function handleToggleMarkAll() {
        todoData.forEach(item => {
            dispatch({
                type: TypesTodo.UPDATE_TODO,
                payload: {
                    newTodo: {
                        ...item,
                        marked: !item.marked
                    }
                }
            });
        });
    }
    return (
        <NavTools>
            <NavToolItem
                title="Remove all completed"
                clickEvent={handleRemoveAllCompleted}
                Icon={RemoveCompleted}
            />
            <NavToolItem
                title="Remove all marked"
                clickEvent={handleRemoveAllMarked}
                Icon={RemoveMarked}
            />
            <NavToolItem
                title="Toggle all marked"
                clickEvent={handleToggleMarkAll}
                Icon={ToggleMarked}
            />
        </NavTools>
    );
};

export default NavToolsComponent;
