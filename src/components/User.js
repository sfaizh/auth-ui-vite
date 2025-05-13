import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const User = ({ userId, username, email }) => {
    return (_jsxs("tr", { children: [_jsx("td", { children: userId }), _jsx("td", { children: username }), _jsx("td", { children: email })] }, userId));
};
export default User;
