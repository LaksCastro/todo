import React from "react"

import { useDispatch, useSelector } from "react-redux";

import * as S from "./styled";

function MobileToast() {
    const dispatch = useDispatch();
    const toast = useSelector(state => state.toast)
    const { isAnimating, message } = toast;
    if (!isAnimating) return <div />
    return (
        <S.ToastWrapper>
            {message}
        </S.ToastWrapper>
    )
}

export default MobileToast;