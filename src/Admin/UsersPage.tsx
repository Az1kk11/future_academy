import React, { useEffect, useState } from 'react'
import AuthUserServices from '../Redux/services/userAuth'
import { format } from 'date-fns';

import './UsersPage.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const thead = [
  { name: 'ID' },
  { name: 'Atı' },
  { name: 'Elektron poshtası' },
  { name: "Tan'lag'an kursı" },
  { name: "Ashılg'an waqtı" },
  { name: "Ozgeris kiritilgen waqtı" },
  { name: "O'shiriw" },
  { name: "Ozgeris kiritiw" },
]

export type usersType = {
  id: number,
  name: string,
  email: string,
  course: string
  created_at: string,
  updated_at: string
}

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const usersHandler = async () => {
    try {
      const res = await AuthUserServices.users()
      setUsers(res.data)
    } catch (error: any) {
      console.log(error);
    }
  }

  const deleteHandler = async (id: number) => {
    try {
      await AuthUserServices.userDel(id)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    usersHandler()
  }, [deleteHandler])

  return (
    <div className="users-box">
      <h3>Oqıwshılar dizimi</h3>
      <div className="res-table">
        <table>
          <thead>
            <tr>
              {thead?.map((item, index) => (
                <th key={index}><strong>{item?.name}</strong></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item: usersType) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.course}</th>
                <th>{format(new Date(item.created_at), 'dd MMM yyyy')}</th>
                <th>{format(new Date(item.updated_at), 'dd MMM yyyy')}</th>
                <td>
                  <button
                    className='delete'
                    onClick={() => deleteHandler(item.id)}
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
                <td>
                  <button
                    className='put'
                    onClick={() => navigate(`/admin/users/${item.id}`)}
                  >
                    <i className="ri-pencil-line"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}