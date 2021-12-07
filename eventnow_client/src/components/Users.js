
import {useState, useEffect} from 'react'
import axios from 'axios'

const Users = () => {

    const [newData, setData] = useState([])

    useEffect(() => {
      axios.get("http://localhost:3000/me")
      .then(resp => {
        console.log(resp.data)
        setData(resp.data);
      })
      .catch(error => {
        console.log("error", error);
      })},[])


    return (
        <div>
            {newData}
        </div>
    )
}

export default Users
