
import {useState, useEffect} from 'react'
import axios from 'axios'

const Users = () => {

    const [newData, setData] = useState([])

    useEffect(() => {
      axios.get("http://localhost:3000/users")
      .then(resp => {
        console.log(resp.data)
        setData(resp.data);
      })
      .catch(error => {
        console.log("error", error);
      })},[])

const username = newData.map(user => <h2 key={user.id}>{user.username}</h2> )
    return (
        <div>
            {username}
        </div>
    )
}

export default Users
