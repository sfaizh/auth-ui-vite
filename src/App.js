import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { authLoader } from './utils/authLoader';
import { redirectIfAuthed } from './utils/redirectIfAuthed';
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: _jsx(Home, {})
        },
        {
            path: '/login',
            loader: redirectIfAuthed,
            element: _jsx(Login, {})
        },
        {
            path: '/dashboard',
            loader: authLoader,
            element: _jsx(Dashboard, {})
        }
    ]);
    return _jsx(RouterProvider, { router: router });
}
export default App;
