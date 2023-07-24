import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy } from "../Action/Actions";

const Dispatch = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(buy())}>Buy</button>
            <p>{state.eggcake}</p>
        </div>
    )
}

export default Dispatch;