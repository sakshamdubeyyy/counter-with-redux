import React, { Fragment, useState } from "react";
import styles from "./counter.module.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../counterSlice/counterSlice";

export default function Counter(){
    const count = useSelector(state => state.value);
    const dispatch = useDispatch();



    return(
        <Fragment>
            <h1>Counter</h1>
            <div className={styles.counterContainer}>
                <button onClick={() => dispatch(decrement())}>-</button>
                <div className={styles.count}>{count}</div>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </Fragment>
    )
}