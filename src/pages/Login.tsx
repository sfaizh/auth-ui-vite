import { useForm } from 'react-hook-form'
import deployment from '../deployment.json'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type LoginFormData = {
    username: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>()

    const onSubmit = async (data: LoginFormData) => {
        try {
            const res = await axios.post(deployment.url + '/auth/login', data)
            const { access_token } = res.data
            localStorage.setItem('token', access_token)

            navigate('/dashboard')
        } catch (err: any) {
            console.error('Login failed', err.response?.data || err.message)
        }
    }

    return (
        <div className='card'>
            {/* Login form */}
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '1rem', maxWidth: 300 }}>
                <input type='username' placeholder='Username' {...register('username', { required: 'Username is required' })} />
                {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}

                <input type='password' placeholder='Password' {...register('password', { required: 'Password is required' })} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login