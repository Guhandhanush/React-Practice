import { useDispatch, useSelector } from "react-redux";
import { buyBriyani, buyCoke, sellBriyani, sellCoke } from "../Action/Actions";
import { initState } from "../States/State";
const Dispatch = () => {
    let initstate = initState;
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => { dispatch(buyCoke()) }}>Buy Coke</button>
            <button onClick={() => { dispatch(sellCoke()) }}>Sell Coke</button>
            <button onClick={() => { dispatch(buyBriyani()) }}>Buy Briyani</button>
            <button onClick={() => { dispatch(sellBriyani()) }}>Sell Briyani</button>

            <p>Coke:{state.coke}/{initstate.coke}</p>
            <p>Briyani:{state.briyani}/{initstate.briyani}</p>
        </div>
    )
}

export default Dispatch