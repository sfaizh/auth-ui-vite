import { redirect } from 'react-router-dom';
import { currentUser } from './currentUser';
export async function redirectIfAuthed() {
    const user = await currentUser();
    if (user)
        throw redirect('/dashboard');
    return null;
}
