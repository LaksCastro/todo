import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Types } from "../../store/ducks/user";
import { Types as TypesTodo } from "../../store/ducks/todo";

import firebase from "../../firebase";
import { db } from "../../firebase";
import "firebase/auth";

import AllComplete from "../allComplete/index";
import LoadingData from "../loadingData/index";
import LoadingUser from "../loadingUser/index";

import UpdateTodo from "../updateTodo/index";
import TodoItem from "../todoItem/index";

import NavFormAdd from "../navFormAdd/index";
import NavTools from "../navTools/index";

import HeaderMenu from "../headerMenu/index";

import Viewport from "../viewport/index";

import A from "./assets";

import * as S from "./styled";

const Todo = props => {
    const [edit, setEdit] = useState(null);

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
    const userData = user.data;
    const userIsLoading = user.loading;

    const todo = useSelector(state => state.todo);
    const todoData = todo.data;
    const todoIsLoading = todo.loading;

    function dispatchSnapshot(snapshot) {
        if (!snapshot.size) {
            dispatch({
                type: TypesTodo.SUCCESS_TODO_LIST,
                payload: {
                    data: []
                }
            });
        }
        const todoList = snapshot.docs.map(item => {
            return {
                ...item.data(),
                id: item.id,
                marked: false
            };
        });

        dispatch({
            type: TypesTodo.SUCCESS_TODO_LIST,
            payload: {
                data: todoList
            }
        });
    }
    function addSnapshotListener(email) {
        db.collection("todo")
            .where("userEmail", "==", email)
            .orderBy("date", "desc")
            .onSnapshot(snapshot => {
                dispatchSnapshot(snapshot);
            });
    }
    useEffect(() => {
        function getUserData() {
            if (userData && todoData) return;


            dispatch({
                type: TypesTodo.REQUEST_TODO_LIST
            });
            const currentUser = firebase.auth().currentUser;
            if (currentUser) {
                dispatch({
                    type: Types.SUCCESS_USER,
                    payload: {
                        data: {
                            uid: currentUser.uid,
                            name: currentUser.displayName,
                            email: currentUser.email,
                            photoURL: currentUser.photoURL
                        }
                    }
                });
                addSnapshotListener(currentUser.email);

                return;
            }
            dispatch({
                type: Types.FAILED_USER,
                payload: {
                    error: "User not logged"
                }
            });
        }
        getUserData();
        // eslint-disable-next-line
    }, []);
    if (userIsLoading || !userData)
        return <LoadingUser img={A.LoadingUserImg} />;
    return (
        <Viewport>
            <HeaderMenu userData={userData} />

            <UpdateTodo edit={edit} setEdit={setEdit} />

            <S.NavWrapper>
                <S.NavContainer>
                    <NavFormAdd />
                    <NavTools />
                </S.NavContainer>
            </S.NavWrapper>

            {todoData && !todoIsLoading ? (
                !todoData.length ? (
                    <AllComplete img={A.AllCompleteImg} />
                ) : (
                    todoData.map(item => (
                        <TodoItem setEdit={setEdit} key={item.id} item={item} />
                    ))
                )
            ) : (
                <LoadingData img={A.Loading} />
            )}
        </Viewport>
    );
};
export default Todo;
