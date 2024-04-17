import React, { useEffect, useState } from 'react'
import AuthUserServices from '../Redux/services/userAuth'
import { format } from 'date-fns';

import './UsersPage.css'
import { toast } from 'react-toastify';

const thead = [
  { name: 'ID' },
  { name: 'Name' },
  { name: 'Email' },
  { name: 'Created at' },
  { name: 'Delete' },
]

type usersType = {
  id: number,
  name: string,
  email: string,
  created_at: string,
  remember_token: string,
  updated_at: string
}

export const UsersPage:React.FC = () => {
  const [users, setUsers] = useState([])

  const loginHandler = async () => {
    try {
      const res = await AuthUserServices.users()
      setUsers(res.data)
    } catch (error: any) {
      toast.error(error.message)
      console.log(error);
    }
  }

  useEffect(()=>{
    loginHandler()
  },[])

  
//   const deleteHandler = async (id: number) => {
//     try {
//         await ProductServices.productDelete(id)
//         getProduct()
//         toast.success('Categorie succesfuly deleted')
//     } catch (error: any) {
//         toast.error(error.response.data.message)
//     }
// }

  return (

    <div className="res-table">
      <table>
        <thead>
          <tr>
            {thead?.map((item, index) => (
              <th key={index}>{item?.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((item: usersType) => (
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{format(new Date(item.created_at), 'dd MMM yyyy')}</th>
              <td>
                <button
                  className='delete'
                  // onClick={() => deleteHandler(item.id)}
                >
                  <i className="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}