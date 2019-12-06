import React from "react";

import { useSelector } from "react-redux";

import { db } from "../../firebase";

import { Plus as Add } from "styled-icons/boxicons-regular/Plus";

import { toast } from "react-toastify";

import * as S from "./styled";

const NavFormAdd = () => {
    const userData = useSelector(state => state.user.data);
    
    function handleAddTodo({ text }, { resetForm }) {
        if (!text.length) {
            toast.error("First set a text :)");
            return;
        }
        db.collection("todo").add({
            text,
            completed: false,
            userEmail: userData.email,
            date: new Date()
        });
        resetForm();
    }
    return (
        <S.NavFormUnform onSubmit={handleAddTodo}>
            <S.InputUnform
                placeholder="To study React..."
                type="text"
                name="text"
            />
            <S.ButtonUnformContainer>
                <S.ButtonUnform type="submit">
                    <Add />
                </S.ButtonUnform>
            </S.ButtonUnformContainer>
        </S.NavFormUnform>
    );
};

export default NavFormAdd;