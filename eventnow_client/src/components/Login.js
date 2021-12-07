import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3000/login", null, { params: {
            username,
            password}})
        .then(resp => {
          console.log(resp)
        })
        .catch(error => {
          console.log("error", error);
        })}
    

    return (
        <form onSubmit = {handleSubmit}>
          <fieldset>
          <h1>Login: </h1>
          <label>Username: </label>
          <br></br>
            <input name="username" 
            onChange={(e) => setUsername(e.target.value) }
             />
            <br></br>
            <label>Password: </label>
            <br></br>
            <input name="password" type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            />
            <br></br>
            <button type="submit">Submit</button>
          </fieldset>
          
        </form>
    )
}

export default Login
