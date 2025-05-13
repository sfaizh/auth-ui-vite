import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useLoaderData } from 'react-router';
import User from '../components/User';
import { useEffect, useState } from 'react';
import axios from 'axios';
import deployment from '../deployment.json';
const Dashboard = () => {
    const user = useLoaderData();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(deployment.url + '/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
            console.log(res);
            setUsers(res.data);
        })
            .catch(err => console.error(err));
    }, []);
    return (_jsxs("div", { className: 'card', children: [_jsxs("h1", { children: ["Welcome ", user.username] }), _jsx("div", { children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "ID" }), _jsx("th", { children: "Username" }), _jsx("th", { children: "email" })] }) }), _jsx("tbody", { children: users.map(u => {
                                return _jsx(User, { ...u }, u.userId);
                            }) })] }) })] }));
};
export default Dashboard;
