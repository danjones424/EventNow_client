import React, {useState} from 'react'
import axios from 'axios'

const Signup = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordcon] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) =>  {
        e.preventDefault()
        axios.post("http://localhost:3000/signup", null, { params: {
            username,
            password,
            email,
            password_confirmation}})
        .then(resp => {
          console.log(resp)
        })
        .catch(error => {
          console.log("error", error);
        })}

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
          <h1>Signup: </h1>
          <label>Username: </label>
          <br></br>
            <input name="username" 
            onChange={(e) => setUsername(e.target.value) }
             />
            <br></br>
            <label>Email: </label>
            <br></br>
            <input name="email"
            onChange={(e) => setEmail(e.target.value)} 
            />
            <br></br>
            <label>Password: </label>
          <br></br>
            <input name="password" type="password" 
            onChange={(e) => setPassword(e.target.value) }
             />
            <br></br>
            <label>Confirm Password: </label>
            <br></br>
            <input name="password_confirmation" type="password" 
            onChange={(e) => setPasswordcon(e.target.value)} 
            />
            <br></br>
            <button type="submit">Submit</button>
          </fieldset>
          
        </form>
        </div>
    )
}

export default Signup
