import React,{userState} from "react"

function Jui(props){
    return(
        <div>
            <h1>User Compnent</h1>
            <button onClick={()=>props.data()}>call data</button>
        </div>
    )
}

export default Jui;