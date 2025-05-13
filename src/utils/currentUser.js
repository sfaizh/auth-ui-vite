import axios from 'axios';
import deployment from '../deployment.json';
export async function currentUser() {
    const token = localStorage.getItem('token');
    if (!token)
        return null;
    try {
        const res = await axios.get(deployment.url + '/auth/current', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            validateStatus: () => true
        });
        if (res.status === 200) {
            return res.data;
        }
        return null;
    }
    catch (err) {
        throw err.message;
    }
}
