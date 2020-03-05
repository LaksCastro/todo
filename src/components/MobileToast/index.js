import React, { useEffect } from "react"

import { Types as TypesToast } from "../../store/ducks/toast";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styled";

function MobileToast() {
    const dispatch = useDispatch();
    const toast = useSelector(state => state.toast)
    const { isVisible, message } = toast;


    function endMessage() {
        dispatch({
            type: TypesToast.END_MESSAGE
        });
    }

    useEffect(() => {
        if(isVisible){
            setTimeout(endMessage, 2000);
        }
    }, [isVisible])
    return (
        <S.ToastWrapper className={isVisible ? "visible" : "hide"}>
            {message || ""}
        </S.ToastWrapper>
    )
}

export default MobileToast;