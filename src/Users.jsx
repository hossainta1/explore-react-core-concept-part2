import { useEffect, useState } from "react"
import User from "./User";



export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setUsers(data))
    }, [])
    return(
        <div>
          <h3>Total USer: {users.length}</h3>
          {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
        </div>
    )
}