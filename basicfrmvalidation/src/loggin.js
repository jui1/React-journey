import React,{useState} from 'react'

function Login(){
    const [user,setUser] =useState("")
    const [password ,setPass] = useState("")
    const[pass,setpasse] =useState(false);
    const [useerro,setErro] = useState(false);
 function logginHandel(e)
    {
       if(user.length <3 || password.length<3){
        alert("wrong")
       } else{
        alert("all grood")
       }
        e.preventDefault()
    }
    function UserHandel(e){
        let item = e.target.value;
        if(item.length<3){
            setErro(true)
        }else{setErro(false)}
        setUser(item)
    }
    function passhandel(e){
        let item = e.target.value;
        if(item.length<3){
            setPass(true)
        }else{setPass(false)}
        setPass(item)
    }
    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={logginHandel}>
        <input type="text" placeholder="Enter name" onChange={UserHandel}/>{useerro?<span>no no no</span>:""}
        <br></br>
        <input type="password" placeholder="user password" onChange={passhandel}/>{password?<span>no no no</span>:""}
        <br></br>
        <button type='submit' >Login</button>
        </form>
    </div>
    )
}

export default Login;