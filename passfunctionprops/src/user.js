import React,{userState} from "react"

function User(props){
    return(
        <div>
            <h1>User Compnent</h1>
            <button onClick={()=>props.data()}>call data</button>
        </div>
    )
}

export default User;