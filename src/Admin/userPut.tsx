import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthUserServices from '../Redux/services/userAuth'
import { usersType } from './UsersPage'
import './userPut.css'
import { coursesArr } from '../Page'
import { toast } from 'react-toastify'

export const UserPut: React.FC = () => {
    const { id }: any = useParams()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [course, setCourse] = useState('')

    const userDetail = async () => {
        try {
            const res = await AuthUserServices.user(id)
            setEmail(res.user.email)
            setName(res.user.name)
            setCourse(res.user.course)
        } catch (error) {
            console.log(error);
        }
    }

    const userPutHandler = async (e: React.FormEventHandler<HTMLFormElement> | any) => {
        e.preventDefault()
        const userArr = { email, name, course }
        
        try {
            await AuthUserServices.userPut(id, userArr)
            toast.success('You have successfully logged in')
            navigate('/admin/users')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userDetail()
    }, [id])


    return (
        <div className="user-put">
            <h3>Oqiwshi</h3>
            <form onSubmit={userPutHandler}>
                <span>
                    <label>Elektron poshta</label>
                    <input
                        type="email"
                        className='registration__first-name'
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        required
                    />
                </span>
                <span>
                    <label>Ati</label>
                    <input
                        type="text"
                        className='registration__first-name'
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        required
                    />
                </span>
                <span>
                    <label>Kurs</label>
                    <select
                        onChange={(e) => setCourse(e.target.value)}
                        className='selectArr'
                        required
                        value={course}
                    >
                        {coursesArr.map(item => (
                            <option key={course === item ? course : item} value={item}>{item}</option>
                        ))}
                    </select>
                </span>
                <span>
                    <button type='submit'>Ozgeris kiritiw</button>
                    <button onClick={() => navigate('/admin/users')}>Arqag'a</button>
                </span>
            </form>
        </div>
    )
}