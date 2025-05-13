import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Home = () => {
    return (_jsx("div", { className: "card", children: _jsx(Link, { to: '/login', children: _jsx("h1", { children: "Go to Login" }) }) }));
};
export default Home;
