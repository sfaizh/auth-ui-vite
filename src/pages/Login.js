import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import deployment from '../deployment.json';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = await axios.post(deployment.url + '/auth/login', data);
            const { access_token } = res.data;
            localStorage.setItem('token', access_token);
            navigate('/dashboard');
        }
        catch (err) {
            console.error('Login failed', err.response?.data || err.message);
        }
    };
    return (_jsx("div", { className: 'card', children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), style: { display: 'grid', gap: '1rem', maxWidth: 300 }, children: [_jsx("input", { type: 'username', placeholder: 'Username', ...register('username', { required: 'Username is required' }) }), errors.username && _jsx("p", { style: { color: 'red' }, children: errors.username.message }), _jsx("input", { type: 'password', placeholder: 'Password', ...register('password', { required: 'Password is required' }) }), errors.password && _jsx("p", { style: { color: 'red' }, children: errors.password.message }), _jsx("button", { type: 'submit', children: "Login" })] }) }));
};
export default Login;
