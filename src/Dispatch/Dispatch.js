import { useDispatch, useSelector } from "react-redux";
import { buyBriyani, buyCoke, sellBriyani, sellCoke } from "../Action/Actions";
import { initState } from "../States/State";
const Dispatch = () => {
    let initstate = initState;
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    let stylesContainer ={
        backgroundColor:"#8ecae6",
        padding:"1%",
        borderRadius:"15px",
        width:"30%",
        color:"black",
        fontWeight:"bold"
    }
    return (
        <div className="container" style={stylesContainer}>
            <button className="btn btn-info me-2" onClick={() => { dispatch(buyCoke()) }}>Buy Coke</button>
            <button className="btn btn-danger me-2" onClick={() => { dispatch(sellCoke()) }}>Sell Coke</button>
            <button className="btn btn-info me-2" onClick={() => { dispatch(buyBriyani()) }}>Buy Briyani</button>
            <button className="btn btn-danger me-2" onClick={() => { dispatch(sellBriyani()) }}>Sell Briyani</button>
            <p>Coke:{state.coke}/{initstate.coke}</p>
            <p>Briyani:{state.briyani}/{initstate.briyani}</p>
        </div>
    )
}

export default Dispatch