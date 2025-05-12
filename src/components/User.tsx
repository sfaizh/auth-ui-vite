type UserProps = {
    userId: number,
    username: string,
    email: string
}

const User = ({ userId, username, email }: UserProps) => {

    return (
        <tr key={userId}>
            <td>{userId}</td>
            <td>{username}</td>
            <td>{email}</td>
        </tr>
    )
}

export default User