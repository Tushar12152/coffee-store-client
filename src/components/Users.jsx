import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers=useLoaderData()
    const [users,setUsers]=useState(loadedUsers);

    const handleDelete=id=>[
 
        fetch(`http://localhost:5003/users/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                console.log('delete hoise')
                const remaining=users.filter(user=>user._id!==id)
                setUsers(remaining)
            }
        })
    ]

    return (
        <div>
               {loadedUsers.length}  


               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>createdAt</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user=> <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
                 <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>
        )
     }
      
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;