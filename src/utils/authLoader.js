import { redirect } from 'react-router-dom';
import { currentUser } from './currentUser';
export async function authLoader() {
    const user = await currentUser();
    if (!user)
        throw redirect('/login');
    return user;
}
