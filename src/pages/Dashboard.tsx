import { useLoaderData, useNavigate } from 'react-router'
import User from '../components/User'
import { useEffect, useState } from 'react'
import axios from 'axios'
import deployment from '../deployment.json'

type User = {
    username: string,
}

type UserType = {
    userId: number,
    username: string,
    email: string
}

const Dashboard = () => {
    const user = useLoaderData() as User
    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        axios.get(deployment.url + '/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='card'>
            {/* Dashboard*/}
            <h1>Welcome {user.username}</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => {
                            return <User key={u.userId} {...u} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard